<template>
  <Layout>
    <PageHeader
      :pageHeader="$page.restaurantPage.pageHeader"
      button="bookTable"
    />
    <main class="page-content">
      <div class="body-content" v-if="$page.restaurantPage.tempbody">
        <block-content
          :blocks="$page.restaurantPage.tempbody._rawNo"
          v-if="$page.restaurantPage.tempbody._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="$page.restaurantPage.tempbody._rawEn"
          v-else-if="
            $page.restaurantPage.tempbody._rawEn && $context.locale == 'en'
          "
          class="block-content"
        />
      </div>
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
    tempbody {
      _rawNo
      _rawEn
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";
import PageHeader from "~/components/PageHeader";
import Button from "~/components/buttons/Button";

export default {
  components: {
    PageHeader,
    BlockContent,
    Button,
  },
  metaInfo() {
    return {
      title: this.$page.restaurantPage.pageHeader.title[this.$context.locale],
    };
  },
};
</script>

<style lang="scss" scoped></style>
