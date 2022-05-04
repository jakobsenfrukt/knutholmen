<template>
  <Layout class="rooms">
    <PageHeader :pageHeader="$page.roomPage.pageHeader" button="bookRoom" />
    <main class="page-content">
      <PageContent :content="$page.roomPage.pageContent.blocks" />
      <RoomGrid expanded hideButton />
    </main>
    <ActivityGrid showIntro :limit="3" />
  </Layout>
</template>

<page-query>
query {
  roomPage: sanityRoomPage(id: "roomPage") {
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
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";
import PageHeader from "~/components/PageHeader";
import PageContent from "~/components/PageContent";
import RoomGrid from "~/components/RoomGrid";
import ActivityGrid from "~/components/ActivityGrid";

export default {
  components: {
    BlockContent,
    PageHeader,
    PageContent,
    RoomGrid,
    ActivityGrid,
  },
  metaInfo() {
    return {
      title: this.$page.roomPage.pageHeader.title[this.$context.locale],
    };
  },
};
</script>
