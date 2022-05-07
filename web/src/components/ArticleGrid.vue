<template>
  <section class="news grid article-grid">
    <div class="section-intro article-intro">
      <g-link
        class="section-heading--link"
        :to="$tp(`${$t('slug.news')}`)"
        v-if="showIntro"
        ><span>{{ $t("menu.news") }}</span></g-link
      >
      <h2 class="article-heading">
        <template v-if="heading">
          {{ heading }}
        </template>
        <template v-else-if="showIntro">
          {{ $static.articlePage.pageHeader.heading[$context.locale] }}
        </template>
      </h2>
      <p
        class="lead"
        v-if="
          showIntro &&
            $static.articlePage.pageHeader.lead &&
            $static.articlePage.pageHeader.lead[$context.locale]
        "
      >
        {{ $static.articlePage.pageHeader.lead[$context.locale] }}
      </p>
    </div>
    <template v-if="current">
      <ArticleItem
        v-for="article in shuffle(getLocaleArticles()).slice(0, limit)"
        :key="article.id"
        :article="article.node"
      />
    </template>
    <template v-else>
      <ArticleItem
        v-for="article in getLocaleArticles().slice(0, limit)"
        :key="article.id"
        :article="article.node"
      />
    </template>
    <div class="section-button" v-if="!hideButton || showArchive">
      <Button
        :text="$t('links.news')"
        :link="$tp(`${$t('slug.news')}`)"
        v-if="!hideButton"
      />
      <div
        v-if="showArchive && limit < getLocaleArticles().length"
        class="button show-more"
        @click="showMore()"
      >
        {{ $t("links.showMore") }}
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  articlePage: sanityArticlePage(id: "articlePage") {
    pageHeader {
      title {
        no
        en
      }
      heading {
        no
        en
      }
      lead {
        no
        en
      }
    }
  }
  articles: allSanityArticle(
    filter: {publishedAt: {ne: null}},
    sortBy: "publishedAt", order: DESC
  ) {
    edges {
      node {
        id
        title
        slug {
          current
        }
        publishedAt
        locale
        lead
        image {
          image {
            asset {
              _id
              url
            }
          }
          alt
        }
      }
    }
  }
}
</static-query>

<script>
import ArticleItem from "@/components/ArticleItem";
import Button from "@/components/buttons/Button";

export default {
  components: {
    ArticleItem,
    Button,
  },
  props: {
    limit: {
      type: Number,
      default: undefined,
    },
    showIntro: {
      type: Boolean,
      default: false,
    },
    hideButton: {
      type: Boolean,
      default: false,
    },
    heading: {
      type: String,
      default: undefined,
    },
    current: {
      type: String,
      default: undefined,
    },
    showArchive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getLocaleArticles() {
      return this.$static.articles.edges.filter((article) => {
        return article.node.locale === this.$context.locale;
      });
    },
    shuffle(array) {
      return array
        .filter((item) => item.node.id != this.current)
        .sort(() => Math.random() - Math.random());
    },
    showMore() {
      this.limit += this.limit;
    },
  },
};
</script>

<style lang="scss" scoped>
.article-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-sitepadding);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}
</style>
