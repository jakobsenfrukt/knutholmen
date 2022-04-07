<template>
  <article class="offer">
    <img
      v-if="offer.image"
      :src="
        $urlForImage(offer.image, $static.metadata.sanityOptions)
          .width(1200)
          .auto('format')
          .url()
      "
      :alt="offer.image.alt"
      class="offer-image"
    />
    <div class="offer-text">
      <h3>{{ offer.title[$context.locale] }}</h3>
      <p>
        <!--{{ offer.lead[$context.locale] }}-->En kort tekst om denne pakken og
        hva som er inkludert.
      </p>
    </div>
    <!--<BlockContent :blocks="offer._rawBio" v-if="offer._rawBio" />-->
    <g-link class="offer-link" :to="`/offers/${offer.slug.current}`"
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
    offer: Object,
  },
};
</script>

<style lang="scss" scoped>
.offer {
  position: relative;
  border: 1px solid var(--color-text);
  border-radius: var(--border-radius);
  overflow: hidden;
  &-text {
    padding: 1rem;

    h3 {
      margin: 0 0 0.5rem;
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
