<template>
  <Layout>
    <main class="page-content">
      <h1>{{ $page.roomPage.title[$context.locale] }}</h1>
      <p class="lead">
        Dette er en ingress
      </p>
    </main>
  </Layout>
</template>

<page-query>
query {
  roomPage: sanityRoomPage(id: "roomPage") {
    title {
      no
      en
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
  metaInfo: {
    title: "Rooms",
  },
};
</script>

<style lang="scss" scoped></style>
