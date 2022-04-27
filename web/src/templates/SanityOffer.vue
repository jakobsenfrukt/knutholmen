<template>
  <Layout>
    <PageHeader :pageHeader="$page.offer" />
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
    heading {
      no
      en
    }
    slug {
      no {
        current
      }
      en {
        current
      }
    }
    image {
      image {
        asset {
          url
        }
      }
      alt {
        no
        en
      }
    }
    lead {
      no
      en
    }
  }
}
</page-query>

<script>
import PageHeader from "~/components/PageHeader";
import BlockContent from "~/components/tools/BlockContent";

export default {
  components: {
    PageHeader,
    BlockContent,
  },
};
</script>
