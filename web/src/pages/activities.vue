<template>
  <Layout>
    <main class="page-content">
      <h1>{{ $page.activityPage.pageHeader.heading[$context.locale] }}</h1>
      <p class="lead">
        {{ $page.activityPage.pageHeader.lead[$context.locale] }}
      </p>
      <ActivityGrid />
    </main>
  </Layout>
</template>

<page-query>
query {
  activityPage: sanityActivityPage(id: "activityPage") {
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
import ActivityGrid from "~/components/ActivityGrid";

export default {
  components: {
    BlockContent,
    ActivityGrid,
  },
  metaInfo: {
    title: "Rooms",
  },
};
</script>

<style lang="scss" scoped></style>
