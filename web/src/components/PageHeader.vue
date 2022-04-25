<template>
  <header class="page-header">
    <div class="text">
      <h1>{{ pageHeader.title[$context.locale] }}</h1>
      <p class="lead">
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
  padding-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--spacing-sitepadding);
  min-height: 60vh;
  img {
    border-radius: var(--border-radius);
  }
}
</style>
