<template>
  <Layout class="index">
    <Intro />
    <OfferGrid showIntro />
    <RoomGrid showIntro />
    <ActivityGrid showIntro :limit="3" />
    <RestaurantSection />
    <ArticleGrid showIntro />
  </Layout>
</template>

<page-query>
query {
  frontpage: sanityFrontpage(id: "frontpage") {
    title {
      no
      en
    }
  }
}
</page-query>

<script>
import Intro from "@/components/Intro";
import OfferGrid from "@/components/OfferGrid";
import RoomGrid from "@/components/RoomGrid";
import ActivityGrid from "@/components/ActivityGrid";
import RestaurantSection from "@/components/RestaurantSection";
import ArticleGrid from "@/components/ArticleGrid";

export default {
  components: {
    Intro,
    OfferGrid,
    RoomGrid,
    ActivityGrid,
    RestaurantSection,
    ArticleGrid,
  },
  metaInfo() {
    return {
      title: this.$page.frontpage.title[this.$context.locale],
    };
  },
};
</script>

<style lang="scss" scoped></style>
