<template>
  <header class="page-header">
    <div class="text">
      <span class="page-title">{{ pageHeader.title[$context.locale] }}</span>
      <h1 class="page-heading">{{ pageHeader.heading[$context.locale] }}</h1>
      <p class="lead" v-if="pageHeader.lead[$context.locale]">
        {{ pageHeader.lead[$context.locale] }}
      </p>
    </div>
    <g-image
      v-if="pageHeader.image"
      :src="
        $urlForImage(pageHeader.image, $static.metadata.sanityOptions)
          .width(1200)
          .auto('format')
          .url()
      "
      :alt="pageHeader.image.alt[$context.locale]"
    />
  </header>
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
export default {
  props: {
    pageHeader: Object,
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  background: var(--color-background);
  color: var(--color-text);
  padding: var(--spacing-sitepadding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--spacing-sitepadding);
  min-height: 60vh;
  img {
    border-radius: var(--border-radius);
  }
}
@media (max-width: 1000px) {
  .page-header {
    grid-template-columns: 1fr;
    min-height: 0;

    img {
      order: 1;
    }
    .text {
      order: 2;
    }
  }
}
</style>
