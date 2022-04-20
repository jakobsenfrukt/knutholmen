<template>
  <Layout class="index">
    <Intro />
    <OfferGrid />
    <RoomGrid />
    <ActivityGrid />
    <RestaurantSection />
    <section>
      <h1>Aktuelt</h1>
    </section>
  </Layout>
</template>

<page-query>
query {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  frontpage: sanityFrontpage(id: "frontpage") {
    pageHeader {
      heading {
        no
        en
      }
      text {
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
