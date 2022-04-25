<template>
  <Layout>
    <main class="page-content">
      <h1>{{ $page.eventPage.pageHeader.heading[$context.locale] }}</h1>
      <p class="lead">
        {{ $page.eventPage.pageHeader.lead[$context.locale] }}
      </p>
    </main>
  </Layout>
</template>

<page-query>
query {
  eventPage: sanityEventPage(id: "eventPage") {
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
