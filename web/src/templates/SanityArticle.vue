<template>
  <Layout class="news">
    <PageHeader
      :heading="$page.article.title"
      :image="$page.article.image"
      :lead="$page.article.lead"
    />
    <main class="page-content">
      <PageContent
        v-if="$page.article.pageContent"
        :content="$page.article.pageContent.blocks"
      />
      <ArticleGrid
        :heading="$t('headings.moreArticles')"
        :limit="3"
        :current="$page.article._id"
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
  article: sanityArticle (id: $id) {
    _id
    _type
    title
    slug {
      current
    }
    image {
      image {
        asset {
          url
        }
      }
      alt
    }
    lead
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
import PageHeader from "~/components/PageHeaderSecondary";
import ArticleGrid from "~/components/ArticleGrid";

export default {
  components: {
    BlockContent,
    PageHeader,
    ArticleGrid,
  },
};
</script>
