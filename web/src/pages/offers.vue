<template>
  <Layout>
    <main class="page-content">
      <PageHeader :pageHeader="$page.offerPage.pageHeader" />
      <OfferGrid />
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
        asset {
          _id
          url
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
  metaInfo: {
    title: "Rooms",
  },
};
</script>

<style lang="scss" scoped></style>
