<template>
  <Layout>
    <PageHeader :pageHeader="$page.eventPage.pageHeader" />
    <main class="page-content">
      <div class="body-content" v-if="$page.eventPage.tempbody">
        <block-content
          :blocks="$page.eventPage.tempbody._rawNo"
          v-if="$page.eventPage.tempbody._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="$page.eventPage.tempbody._rawEn"
          v-else-if="$page.eventPage.tempbody._rawEn && $context.locale == 'en'"
          class="block-content"
        />
      </div>
      <PageContent :content="$page.eventPage.pageContent.blocks" />
    </main>
  </Layout>
</template>

<page-query>
query {
  eventPage: sanityEventPage(id: "eventPage") {
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
      }
    }
    tempbody {
      _rawNo
      _rawEn
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";
import PageHeader from "~/components/PageHeader";
import PageContent from "~/components/PageContent";

export default {
  components: {
    BlockContent,
    PageHeader,
    PageContent,
  },
  metaInfo() {
    return {
      title: this.$page.eventPage.pageHeader.title[this.$context.locale],
    };
  },
};
</script>

<style lang="scss" scoped></style>
