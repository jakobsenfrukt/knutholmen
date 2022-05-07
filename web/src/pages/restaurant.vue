<template>
  <Layout class="restaurant">
    <PageHeader
      :pageHeader="$page.restaurantPage.pageHeader"
      button="bookTable"
    />
    <main class="page-content">
      <PageContent :content="$page.restaurantPage.pageContent.blocks" />
    </main>
    <OfferGrid showIntro :limit="3" />
    <RoomGrid showIntro :limit="3" />
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
    }
    pageContent {
      blocks {
        ... on SanityLocaleBody {
          _type
          _rawNo
          _rawEn
        }
        ... on SanityTextAndImage {
          _type
          text {
            _rawNo
            _rawEn
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
            caption {
              no
              en
            }
          }
        }
        ... on SanityLocaleFigureCaptioned {
          _type
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
          caption {
            no
            en
          }
        }
        ... on SanityImageColumns {
          _type
          images {
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
            caption {
              no
              en
            }
          }
        }
        ... on SanitySectionWithHeading {
          _type
          title {
            no
            en
          }
          heading {
            no
            en
          }
          text {
            _rawNo
            _rawEn
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
            caption {
              no
              en
            }
          }
        }
        ... on SanityImageGallery {
          _type
          images {
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
            caption {
              no
              en
            }
          }
        }
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
import BlockContent from "~/components/tools/BlockContent";
import PageHeader from "~/components/PageHeader";
import PageContent from "~/components/PageContent";
import Button from "~/components/buttons/Button";
import OfferGrid from "~/components/OfferGrid";
import RoomGrid from "~/components/RoomGrid";

export default {
  components: {
    PageHeader,
    BlockContent,
    Button,
    PageContent,
    OfferGrid,
    RoomGrid,
  },
  metaInfo() {
    return {
      title: this.$page.restaurantPage.pageHeader.title[this.$context.locale],
      meta: [
        {
          name: "description",
          content: this.$page.restaurantPage.pageHeader.lead[
            this.$context.locale
          ]
            ? this.$page.restaurantPage.pageHeader.lead[this.$context.locale]
            : this.$page.general.seo.description[this.$context.locale],
        },
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.restaurantPage.pageHeader.image.image.asset.url
            ? this.$page.restaurantPage.pageHeader.image.image.asset.url
            : this.$page.general.seo.ogimg.asset.url,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
