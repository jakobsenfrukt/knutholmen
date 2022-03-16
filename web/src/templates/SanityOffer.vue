<template>
  <Layout>
    <h1>{{ $page.offer.title[$context.locale] }}</h1>
  </Layout>
</template>

<page-query>
query offer ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  offer: sanityOffer (id: $id) {
    title {
      no
      en
    }
    slug {
      current
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";

export default {
  components: {
    BlockContent,
  },
};
</script>
