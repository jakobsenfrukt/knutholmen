<template>
  <Layout>
    <header class="page-header">
      <div class="text">
        <!--<span class="page-title">{{
          $page.activity.title[$context.locale]
        }}</span>-->
        <h1 class="page-heading">
          {{ $page.activity.title[$context.locale] }}
        </h1>
        <p
          class="lead"
          v-if="$page.activity.lead && $page.activity.lead[$context.locale]"
        >
          {{ $page.activity.lead[$context.locale] }}
        </p>
      </div>
      <g-image
        v-if="$page.activity.image"
        :src="
          $urlForImage($page.activity.image.image, $page.metadata.sanityOptions)
            .width(1200)
            .auto('format')
            .url()
        "
        :alt="$page.activity.image.alt[$context.locale]"
      />
    </header>
    <main class="page-content">
      <div class="body-content" v-if="$page.activity.body">
        <block-content
          :blocks="$page.activity.body._rawNo"
          v-if="$page.activity.body._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="$page.activity.body._rawEn"
          v-else-if="$page.activity.body._rawEn && $context.locale == 'en'"
          class="block-content"
        />
      </div>
    </main>
    <ActivityGrid />
  </Layout>
</template>

<page-query>
query activity ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  activity: sanityActivity (id: $id) {
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
import PageHeader from "~/components/PageHeader";
import BlockContent from "~/components/tools/BlockContent";
import ActivityGrid from "~/components/ActivityGrid";

export default {
  components: {
    PageHeader,
    BlockContent,
    ActivityGrid,
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  color: var(--color-text);
  padding: var(--spacing-sitepadding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: calc(var(--spacing-sitepadding) * 1.5);
  min-height: 40vh;
  max-width: 70rem;
  margin: 0 auto;
  img {
    border-radius: var(--border-radius);
  }
}
.page-title {
  display: none;
}
@media (max-width: 1000px) {
  .page-header {
    grid-template-columns: 1fr;
    min-height: 0;
    text-align: center;

    img {
      order: 1;
    }
    .text {
      order: 2;
    }
    .lead {
      margin: 0 auto 2rem;
    }
  }
  .page-title {
    display: block;
  }
}
</style>
