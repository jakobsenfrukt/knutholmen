<template>
  <Layout>
    <header class="page-header">
      <div class="text">
        <!--<span class="page-title">{{
          $page.article.title
        }}</span>-->
        <h1 class="page-heading">
          {{ $page.article.title }}
        </h1>
        <p class="lead" v-if="$page.article.lead && $page.article.lead">
          {{ $page.article.lead }}
        </p>
      </div>
      <g-image
        v-if="$page.article.image"
        :src="
          $urlForImage($page.article.image.image, $page.metadata.sanityOptions)
            .width(1200)
            .auto('format')
            .url()
        "
        :alt="$page.article.image.alt"
      />
    </header>
    <main class="page-content">
      <div class="body-content" v-if="$page.article._rawBody">
        <block-content :blocks="$page.article._rawBody" class="block-content" />
      </div>
    </main>
    <articleGrid />
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
    body {
      _rawNo
      _rawEn
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";
import ArticleGrid from "~/components/ArticleGrid";

export default {
  components: {
    BlockContent,
    ArticleGrid,
  },
};
</script>
