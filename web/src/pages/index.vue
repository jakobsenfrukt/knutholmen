<template>
  <Layout class="index">
    <Intro />
    <OfferGrid showIntro :items="$page.frontpage.selectedOffers" :limit="3" />
    <RoomGrid showIntro :items="$page.frontpage.selectedRooms" :limit="3" />
    <RestaurantSection :images="$page.frontpage.restaurantImages" />
    <ActivityGrid
      showIntro
      :items="$page.frontpage.selectedActivities"
      :limit="3"
    />
    <ArticleGrid showIntro />
  </Layout>
</template>

<page-query>
query {
  frontpage: sanityFrontpage(id: "frontpage") {
    id
    title {
      no
      en
    }
    selectedOffers {
      id
      title {
        no
        en
      }
      heading {
        no
        en
      }
      slug {
        no {
          current
        }
        en {
          current
        }
      }
      image {
        image {
          asset {
            url
          }
        }
        alt {
          no
          en
        }
      }
    }
    selectedRooms {
      id
      title {
        no
        en
      }
      slug {
        no {
          current
        }
        en {
          current
        }
      }
      image {
        image {
          asset {
            url
          }
        }
        alt {
          no
          en
        }
      }
      lead {
        no
        en
      }
    }
    selectedActivities {
      id
      title {
        no
        en
      }
      slug {
        no {
          current
        }
        en {
          current
        }
      }
      image {
        image {
          asset {
            url
          }
        }
        alt {
          no
          en
        }
      }
      lead {
        no
        en
      }
    }
    restaurantImages {
      image {
        asset {
          url
        }
      }
      alt {
        no
        en
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
