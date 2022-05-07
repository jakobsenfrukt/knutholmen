<template>
  <Layout>
    <PageHeader :pageHeader="$page.guestHarbor.pageHeader" />
    <main class="page-content">
      <PageContent :content="$page.guestHarbor.pageContent.blocks" />
    </main>
    <RoomGrid showIntro :limit="3" />
  </Layout>
</template>

<page-query>
query {
  guestHarbor: sanityGuestHarbor(id: "guestHarbor") {
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
import PageHeader from "~/components/PageHeader";
import PageContent from "~/components/PageContent";
import RoomGrid from "~/components/RoomGrid";

export default {
  components: {
    PageHeader,
    PageContent,
    RoomGrid,
  },
  metaInfo() {
    return {
      title: this.$page.guestHarbor.pageHeader.title[this.$context.locale],
      meta: [
        {
          name: "description",
          content: this.$page.guestHarbor.pageHeader.lead[this.$context.locale]
            ? this.$page.guestHarbor.pageHeader.lead[this.$context.locale]
            : this.$page.general.seo.description[this.$context.locale],
        },
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.guestHarbor.pageHeader.image.image
            ? this.$page.guestHarbor.pageHeader.image.image.asset.url
            : this.$page.general.seo.ogimg.asset.url,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
