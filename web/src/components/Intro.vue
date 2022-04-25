<template>
  <section class="intro">
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
