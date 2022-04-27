<template>
  <Layout>
    <PageHeader :pageHeader="$page.offerPage.pageHeader" />
    <main class="page-content">
      <OfferGrid hideButton />
    </main>
  </Layout>
</template>

<page-query>
query {
  offerPage: sanityOfferPage(id: "offerPage") {
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
import OfferGrid from "~/components/OfferGrid";

export default {
  components: {
    BlockContent,
    PageHeader,
    OfferGrid,
  },
  metaInfo() {
    return {
      title: this.$page.offerPage.pageHeader.title[this.$context.locale],
    };
  },
};
</script>

<style lang="scss" scoped></style>
