<template>
  <header class="page-header">
    <div class="text">
      <span class="page-title">{{ pageHeader.title[$context.locale] }}</span>
      <h1 class="page-heading">{{ pageHeader.heading[$context.locale] }}</h1>
      <p
        class="lead"
        v-if="pageHeader.lead && pageHeader.lead[$context.locale]"
      >
        {{ pageHeader.lead[$context.locale] }}
      </p>
      <Button v-if="button" :type="button" />
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
import Button from "@/components/buttons/Button";

export default {
  components: {
    Button,
  },
  props: {
    pageHeader: Object,
    button: String,
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
  }
  .page-title {
    display: block;
  }
}
</style>
