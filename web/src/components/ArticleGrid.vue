<template>
  <section class="news article-grid">
    <div class="section-intro article-intro" v-if="showIntro">
      <span class="section-heading"
        ><span>{{
          $static.articlePage.pageHeader.title[$context.locale]
        }}</span></span
      >
      <h2 class="article-heading">
        {{ $static.articlePage.pageHeader.heading[$context.locale] }}
      </h2>
      <p
        class="lead"
        v-if="
          $static.articlePage.pageHeader.lead &&
            $static.articlePage.pageHeader.lead[$context.locale]
        "
      >
        {{ $static.articlePage.pageHeader.lead[$context.locale] }}
      </p>
    </div>
    <ArticleItem
      v-for="article in getLocaleArticles().slice(0, limit)"
      :key="article.id"
      :article="article.node"
    />
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
  },
  methods: {
    getLocaleArticles() {
      return this.$static.articles.edges.filter((article) => {
        return article.node.locale === this.$context.locale;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.article-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sitepadding);
}
@media (min-width: 1200px) {
  .article-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
