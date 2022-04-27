<template>
  <Layout>
    <h1>{{ $page.activity.title[$context.locale] }}</h1>
  </Layout>
</template>

<page-query>
query activity ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  activity: sanityActivity (id: $id) {
    title {
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
