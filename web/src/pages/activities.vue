<template>
  <Layout class="activities">
    <PageHeader
      :pageHeader="$page.activityPage.pageHeader"
      button="bookActivity"
    />
    <main class="page-content">
      <PageContent :content="$page.activityPage.pageContent.blocks" />
      <ActivityGrid hideButton />
    </main>
    <RoomGrid showIntro :limit="3" />
  </Layout>
</template>

<page-query>
query {
  activityPage: sanityActivityPage(id: "activityPage") {
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
import ActivityGrid from "~/components/ActivityGrid";
import RoomGrid from "~/components/RoomGrid";

export default {
  components: {
    BlockContent,
    PageHeader,
    PageContent,
    ActivityGrid,
    RoomGrid,
  },
  metaInfo() {
    return {
      title: this.$page.activityPage.pageHeader.title[this.$context.locale],
      meta: [
        {
          name: "description",
          content: this.$page.activityPage.pageHeader.lead[this.$context.locale]
            ? this.$page.activityPage.pageHeader.lead[this.$context.locale]
            : this.$page.general.seo.description[this.$context.locale],
        },
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.activityPage.pageHeader.image.image
            ? this.$page.activityPage.pageHeader.image.image.asset.url
            : this.$page.general.seo.ogimg.asset.url,
        },
      ],
    };
  },
};
</script>
