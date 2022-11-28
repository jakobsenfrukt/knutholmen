<template>
  <Layout class="page">
    <PageHeader
      :title="$page.page.title[$context.locale]"
      :heading="$page.page.heading[$context.locale]"
      center
    />
    <main class="page-content">
      <PageContent
        v-if="$page.page.pageContent"
        :content="$page.page.pageContent.blocks"
      />
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
  page: sanityPage (id: $id) {
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
    heading {
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
}
</page-query>

<script>
import PageHeader from "~/components/PageHeaderSecondary";
import PageContent from "~/components/PageContent";
import BlockContent from "~/components/tools/BlockContent";

export default {
  components: {
    PageHeader,
    PageContent,
    BlockContent,
  },
  metaInfo() {
    return {
      title: this.$page.page.title[this.$context.locale],
      meta: [
        {
          name: "description",
          content: this.$page.page.lead
            ? this.$page.page.lead[this.$context.locale]
            : this.$page.general.seo.description[this.$context.locale],
        },
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.general.seo.ogimg.asset.url,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
