<template>
  <section class="intro">
    <g-image
      v-if="$static.frontpage.image"
      :src="
        $urlForImage($static.frontpage.image, $static.metadata.sanityOptions)
          .width(1200)
          .auto('format')
          .url()
      "
      :alt="$static.frontpage.image.alt[$context.locale]"
    />
    <div class="intro-text">
      <p class="lead">
        {{ $static.frontpage.text[$context.locale] }}
      </p>
      <Button type="bookRoom" />
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  frontpage: sanityFrontpage(id: "frontpage") {
    text {
      no
      en
    }
    image {
      asset {
        _id
        url
      }
      alt {
        no
        en
      }
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
};
</script>

<style lang="scss">
.intro {
  background: var(--color-background);
  color: var(--color-text);
  padding-top: 0;
  gap: var(--spacing-sitepadding);
  min-height: 60vh;
  img {
    display: block;
    border-radius: var(--border-radius);
    max-width: 86%;
    margin: -1rem auto;
  }
  &-text {
    text-align: center;
  }
  .lead {
    margin: calc(var(--spacing-sitepadding) * 2) auto var(--spacing-sitepadding);
    max-width: 24em;
  }
}
</style>
