<template>
  <Layout>
    <main class="page-content">
      <PageHeader :pageHeader="$page.activityPage.pageHeader" />
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
import ActivityGrid from "~/components/ActivityGrid";

export default {
  components: {
    BlockContent,
    PageHeader,
    ActivityGrid,
  },
  metaInfo: {
    title: "Rooms",
  },
};
</script>

<style lang="scss" scoped></style>
