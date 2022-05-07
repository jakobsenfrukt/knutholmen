<template>
  <Layout class="news">
    <PageHeader
      :heading="$page.article.title"
      :image="$page.article.image"
      :lead="$page.article.lead"
    />
    <div class="article-meta">
      <Date
        v-if="$page.article.publishedAt"
        :rawDate="$page.article.publishedAt"
        class="article-date"
      />
    </div>
    <main class="page-content">
      <block-content
        class="block-content"
        :blocks="$page.article._rawBody"
        v-if="$page.article._rawBody"
      />
    </main>
    <ArticleGrid
      :heading="$t('headings.moreArticles')"
      :limit="3"
      :current="$page.article._id"
    />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  article: sanityArticle (id: $id) {
    _id
    _type
    title
    slug {
      current
    }
    publishedAt
    image {
      image {
        asset {
          url
        }
      }
      alt
    }
    lead
    _rawBody
  }
  general: sanityGeneral(id: "general") {
    seo {
      ogimg {
        asset {
          url
        }
      }
      description {
        no
        en
      }
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";
import Date from "~/components/tools/Date";
import PageHeader from "~/components/PageHeaderSecondary";
import ArticleGrid from "~/components/ArticleGrid";

export default {
  components: {
    BlockContent,
    Date,
    PageHeader,
    ArticleGrid,
  },
  metaInfo() {
    return {
      title: this.$page.article.title,
      meta: [
        {
          name: "description",
          content: this.$page.article.lead
            ? this.$page.article.lead
            : this.$page.general.seo.description,
        },
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.article.image
            ? this.$page.article.image.image.asset.url
            : this.$page.general.seo.ogimg.asset.url,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.article-meta {
  width: 100%;
  max-width: 70em;
  margin: -1rem auto 2rem;
  padding: 0 calc(var(--spacing-sitepadding) * 2);
}
@media (max-width: 800px) {
  .article-meta {
    text-align: center;
  }
}
</style>
