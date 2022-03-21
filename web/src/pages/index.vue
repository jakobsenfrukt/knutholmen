<template>
  <Layout class="index">
    <section>
      <h1>{{ $page.frontpage.pageHeader.heading[$context.locale] }}</h1>
      <p>{{ $page.frontpage.pageHeader.text[$context.locale] }}</p>
      <g-image
        v-if="$page.frontpage.pageHeader.image"
        :src="
          $urlForImage(
            $page.frontpage.pageHeader.image,
            $page.metadata.sanityOptions
          )
            .width(1200)
            .auto('format')
            .url()
        "
        :alt="$page.frontpage.pageHeader.image.alt[$context.locale]"
      />
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
