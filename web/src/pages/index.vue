<template>
  <Layout class="index">
    <section>
      <h1>{{ $page.frontpage.pageHeader.heading[$context.locale] }}</h1>
    </section>
    <OfferGrid />
    <RoomGrid />
    <section>Aktiviteter</section>
    <RestaurantSection />
    <section>Aktuelt</section>
  </Layout>
</template>

<page-query>
query {
  frontpage: sanityFrontpage(id: "frontpage") {
    pageHeader {
      heading {
        no
        en
      }
    }
  }
}
</page-query>

<script>
import OfferGrid from "@/components/OfferGrid";
import RoomGrid from "@/components/RoomGrid";
import RestaurantSection from "@/components/RestaurantSection";

export default {
  components: {
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
    background: #eee;
  }
}
</style>
