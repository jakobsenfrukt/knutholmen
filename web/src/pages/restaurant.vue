<template>
  <Layout>
    <main class="page-content">
      <PageHeader :pageHeader="$page.restaurantPage.pageHeader" />
      <!--<block-content
          :blocks="$page.restaurantPage._rawBody"
          v-if="$page.restaurantPage._rawBody"
          class="block-content"
        />-->
    </main>
  </Layout>
</template>

<page-query>
query {
  restaurantPage: sanityRestaurantPage(id: "restaurantPage") {
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
    PageHeader,
    BlockContent,
  },
  metaInfo: {
    title: "Rooms",
  },
};
</script>

<style lang="scss" scoped></style>
