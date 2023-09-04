<template>
  <Layout class="index">
    <Intro />
    <RoomGrid showIntro :items="$page.frontpage.selectedRooms" :limit="3" />
    <RestaurantSection :images="$page.frontpage.restaurantImages" />
    <ActivityGrid
      showIntro
      :items="$page.frontpage.selectedActivities"
      :limit="3"
    />
    <OfferGrid showIntro :items="$page.frontpage.selectedOffers" :limit="3" />
    <ArticleGrid showIntro :limit="3" />
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
    text {
      no
      en
    }
    image {
      image {
        asset {
          _id
          url
        }
      }
      alt {
        no
        en
      }
    }
    image2 {
      image {
        asset {
          _id
          url
        }
      }
      alt {
        no
        en
      }
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
      lead {
        no
        en
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
  general: sanityGeneral(id: "general") {
    seo {
      ogimg {
        asset {
          url
        }
      }
      description {
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
  metaInfo() {
    return {
      title: this.$page.frontpage.title[this.$context.locale],
      meta: [
        {
          name: "description",
          content: this.$page.frontpage.text
            ? this.$page.frontpage.text[this.$context.locale]
            : this.$page.general.seo.description[this.$context.locale],
        },
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.frontpage.image2.image.asset.url
            ? this.$page.frontpage.image2.image.asset.url
            : this.$page.general.seo.ogimg.asset.url,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
