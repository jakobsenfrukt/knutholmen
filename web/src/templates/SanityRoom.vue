<template>
  <Layout>
    <h1>{{ $page.room.title[$context.locale] }}</h1>
  </Layout>
</template>

<page-query>
query room ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  room: sanityRoom (id: $id) {
    _type
    title {
      no
      en
    }
    slug {
      current
    }
    slug2 {
      no {
        current
      }
      en {
        current
      }
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
