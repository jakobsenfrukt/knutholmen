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
  metaInfo: {
    title: "Welcome",
  },
};
</script>

<style lang="scss" scoped></style>
