<template>
  <Layout>
    <main class="page-content">
      <h1>{{ $page.restaurantPage.pageHeader.heading[$context.locale] }}</h1>
      <p class="lead">
        {{ $page.restaurantPage.pageHeader.lead[$context.locale] }}
      </p>
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
