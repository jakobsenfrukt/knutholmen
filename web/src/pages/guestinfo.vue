<template>
  <Layout class="guestinfo">
    <PageHeader :pageHeader="$page.guestinfo.pageHeader" />
    <main class="page-content guestinfo-content">
      <PageContent :content="$page.guestinfo.pageContent.blocks" />
    </main>
  </Layout>
</template>

<page-query>
query {
  guestinfo: sanityGuestinfo(id: "guestinfo") {
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

export default {
  components: {
    BlockContent,
    PageHeader,
    PageContent,
  },
  metaInfo() {
    return {
      title: this.$page.guestinfo.pageHeader.title[this.$context.locale],
      meta: [
        {
          name: "description",
          content: this.$page.guestinfo.pageHeader.lead
            ? this.$page.guestinfo.pageHeader.lead[this.$context.locale]
            : this.$page.general.seo.description[this.$context.locale],
        },
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.guestinfo.pageHeader.image
            ? this.$page.guestinfo.pageHeader.image.image.asset.url
            : this.$page.general.seo.ogimg.asset.url,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.guestinfo .footer-cta {
  display: none;
}
</style>
