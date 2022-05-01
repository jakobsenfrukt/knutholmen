<template>
  <Layout class="news">
    <PageHeader :pageHeader="$page.articlePage.pageHeader" />
    <main class="page-content">
      <ArticleGrid hideButton />
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
    };
  },
};
</script>

<style lang="scss">
.layout.news .lead {
  margin-bottom: 0;
}
.layout.news .section-intro {
  display: none;
}
</style>
