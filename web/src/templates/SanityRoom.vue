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
