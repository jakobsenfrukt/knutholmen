<template>
  <Layout>
    <main class="page-content">
      <h1>{{ $page.offerPage.pageHeader.heading[$context.locale] }}</h1>
      <p class="lead">
        Dette er en ingress
      </p>
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
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";
import OfferGrid from "~/components/OfferGrid";

export default {
  components: {
    BlockContent,
    OfferGrid,
  },
  metaInfo: {
    title: "Rooms",
  },
};
</script>

<style lang="scss" scoped></style>
