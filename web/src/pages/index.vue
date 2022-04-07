<template>
  <Layout class="index">
    <Intro />
    <OfferGrid />
    <RoomGrid />
    <section>
      <h1>Aktiviteter</h1>
    </section>
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
import RestaurantSection from "@/components/RestaurantSection";

export default {
  components: {
    Intro,
    OfferGrid,
    RoomGrid,
    RestaurantSection,
  },
  metaInfo: {
    title: "Welcome",
  },
};
</script>

<style lang="scss" scoped>
section {
  &:nth-of-type(odd) {
    background: var(--color-yellow-light);
  }
}
</style>
