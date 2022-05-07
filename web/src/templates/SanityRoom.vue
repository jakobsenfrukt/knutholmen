<template>
  <Layout class="rooms">
    <PageHeader
      :title="$page.roomPage.pageHeader.title[$context.locale]"
      :heading="$page.room.title[$context.locale]"
      :image="$page.room.image"
      :lead="$page.room.lead[$context.locale]"
      button="bookRoom"
    />
    <main class="page-content">
      <PageContent
        v-if="$page.room.pageContent"
        :content="$page.room.pageContent.blocks"
      />
    </main>
    <RoomGrid
      :heading="$t('headings.moreRooms')"
      :limit="3"
      :current="$page.room._id"
    />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  room: sanityRoom (id: $id) {
    _id
    _type
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
  roomPage: sanityRoomPage(id: "roomPage") {
    pageHeader {
      title {
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
import PageHeader from "~/components/PageHeaderSecondary";
import PageContent from "~/components/PageContent";
import BlockContent from "~/components/tools/BlockContent";
import RoomGrid from "~/components/RoomGrid";

export default {
  components: {
    PageHeader,
    PageContent,
    BlockContent,
    RoomGrid,
  },
  metaInfo() {
    return {
      title: this.$page.room.title[this.$context.locale],
      meta: [
        {
          name: "description",
          content: this.$page.room.lead
            ? this.$page.room.lead[this.$context.locale]
            : this.$page.general.seo.description[this.$context.locale],
        },
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.room.image
            ? this.$page.room.image.image.asset.url
            : this.$page.general.seo.ogimg.asset.url,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
