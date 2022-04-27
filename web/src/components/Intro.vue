<template>
  <section class="intro">
    <g-image
      v-if="$static.frontpage.image.image"
      :src="
        $urlForImage(
          $static.frontpage.image.image,
          $static.metadata.sanityOptions
        )
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
  padding-top: 0 !important;
  gap: var(--spacing-sitepadding);
  img {
    display: block;
    border-radius: var(--border-radius);
    max-width: 60rem;
    margin: 0 auto;
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
