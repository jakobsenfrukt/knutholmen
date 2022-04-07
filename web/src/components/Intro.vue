<template>
  <section class="intro">
    <g-image
      v-if="$page.frontpage.pageHeader.image"
      :src="
        $urlForImage(
          $page.frontpage.pageHeader.image,
          $page.metadata.sanityOptions
        )
          .width(1200)
          .auto('format')
          .url()
      "
      :alt="$page.frontpage.pageHeader.image.alt[$context.locale]"
    />
    <div class="intro-text">
      <h1>{{ $page.frontpage.pageHeader.heading[$context.locale] }}</h1>
      <p class="lead">{{ $page.frontpage.pageHeader.text[$context.locale] }}</p>
      <Button text="Bestill rom" />
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.intro {
  padding: 0;
  &-text {
    padding: var(--spacing-sitepadding);
  }
}
</style>
