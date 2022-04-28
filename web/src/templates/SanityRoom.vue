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
      <RoomGrid :heading="$t('headings.rooms')" :limit="3" />
    </main>
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
};
</script>

<style lang="scss" scoped></style>
