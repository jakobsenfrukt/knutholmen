<template>
  <Layout class="index">
    <Intro />
    <OfferGrid showIntro />
    <RoomGrid showIntro />
    <ActivityGrid showIntro :limit="3" />
    <RestaurantSection />
    <section>
      <h1>Aktuelt</h1>
    </section>
  </Layout>
</template>

<script>
import Intro from "@/components/Intro";
import OfferGrid from "@/components/OfferGrid";
import RoomGrid from "@/components/RoomGrid";
import ActivityGrid from "@/components/ActivityGrid";
import RestaurantSection from "@/components/RestaurantSection";

export default {
  components: {
    Intro,
    OfferGrid,
    RoomGrid,
    ActivityGrid,
    RestaurantSection,
  },
  metaInfo: {
    title: "Welcome",
  },
};
</script>

<style lang="scss" scoped></style>
