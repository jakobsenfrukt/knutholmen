<template>
  <Layout>
    <main class="page-content">
      <PageHeader :pageHeader="$page.eventPage.pageHeader" />
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

export default {
  components: {
    BlockContent,
    PageHeader,
  },
  metaInfo: {
    title: "Rooms",
  },
};
</script>

<style lang="scss" scoped></style>
