<template>
  <article class="article-item article">
    <img
      v-if="article.mainImages"
      :src="
        $urlForImage(article.mainImages, $static.metadata.sanityOptions)
          .width(600)
          .height(400)
          .auto('format')
          .url()
      "
      :alt="article.mainImages.alt"
      class="article-image"
    />
    <div class="article-text">
      <h3>
        {{ article.title }}
      </h3>
      <p>
        {{ article.lead }}
      </p>
    </div>
    <g-link class="article-link" :to="`/news/${article.slug.current}`"
      >Link</g-link
    >
  </article>
</template>

<static-query>
query {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
}
</static-query>

<script>
import BlockContent from "@/components/tools/BlockContent";

export default {
  components: {
    BlockContent,
  },
  props: {
    article: Object,
  },
};
</script>

<style lang="scss" scoped>
.article {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  &-image {
    display: block;
  }
  &-text {
    padding: calc(var(--spacing-sitepadding) * 0.75);
    color: var(--color-blue-dark);
    background: var(--color-white);

    h3 {
      margin: 0 0 0.8rem;
      font-family: var(--font-serif);
      font-size: var(--font-size-l);
      color: var(--color-yellow-dark);
      span {
        display: block;
        font-family: var(--font-sans);
        font-size: var(--font-size-xs);
        font-style: italic;
        text-transform: uppercase;
        margin-bottom: 0.8rem;
        color: var(--color-red-dark);
      }
    }
  }
  &-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
