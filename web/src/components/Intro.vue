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
      <Button
        :text="$t('links.bookRoom')"
        :link="$static.general.bookingUrl[$context.locale]"
        blank
      />
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
  general: sanityGeneral(id: "general") {
    bookingUrl {
      no
      en
    }
  }
}
</static-query>

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
  background: var(--color-background);
  color: var(--color-text);
  padding-top: 0;
  gap: var(--spacing-sitepadding);
  min-height: 60vh;
  img {
    display: block;
    border-radius: var(--border-radius);
    max-width: 94%;
    margin: 0 auto;
  }
  &-text {
    text-align: center;
  }
  .lead {
    margin: var(--spacing-sitepadding) auto;
    max-width: 24em;
  }
}
</style>
