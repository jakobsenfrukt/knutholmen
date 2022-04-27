<template>
  <article class="article-item offer">
    <img
      v-if="offer.image.image"
      :src="
        $urlForImage(offer.image.image, $static.metadata.sanityOptions)
          .width(600)
          .height(400)
          .auto('format')
          .url()
      "
      :alt="offer.image.alt"
      class="offer-image"
    />
    <div class="offer-text">
      <h3>
        <span>{{ offer.title[$context.locale] }}</span>
        {{ offer.heading[$context.locale] }}
      </h3>
      <p v-if="offer.lead && offer.lead[$context.locale]">
        {{ offer.lead[$context.locale] }}
      </p>
    </div>
    <!--<BlockContent :blocks="offer._rawBio" v-if="offer._rawBio" />-->
    <g-link
      class="offer-link"
      :to="
        $tp(`${$t('slug.offers')}/${$slugByLocale(offer, this.$i18n.locale)}`)
      "
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
      font-size: var(--font-size-l);
      span {
        display: block;
        font-family: var(--font-sans);
        font-size: var(--font-size-xs);
        text-transform: uppercase;
        margin-bottom: 0.8rem;
        color: var(--color-text);
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
