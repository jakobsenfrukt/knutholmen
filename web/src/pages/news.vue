<template>
  <Layout class="news">
    <PageHeader :pageHeader="$page.articlePage.pageHeader" />
    <main class="page-content">
      <ArticleGrid hideButton showArchive :limit="12" />
    </main>
  </Layout>
</template>

<page-query>
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
      image {
        image {
          asset {
            _id
            url
          }
        }
        alt {
          no
          en
        }
      }
    }
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
import PageHeader from "~/components/PageHeader";
import ArticleGrid from "~/components/ArticleGrid";

export default {
  components: {
    BlockContent,
    PageHeader,
    ArticleGrid,
  },
  metaInfo() {
    return {
      title: this.$page.articlePage.pageHeader.title[this.$context.locale],
      meta: [
        {
          name: "description",
          content: this.$page.articlePage.pageHeader.lead[this.$context.locale]
            ? this.$page.articlePage.pageHeader.lead[this.$context.locale]
            : this.$page.general.seo.description[this.$context.locale],
        },
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.articlePage.pageHeader.image.image.asset.url
            ? this.$page.articlePage.pageHeader.image.image.asset.url
            : this.$page.general.seo.ogimg.asset.url,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.layout.news .lead {
  margin-bottom: 3rem;
}
.layout.news .section-intro {
  display: none;
}
</style>
