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
      ><div class="link-text">
        <span>{{ $t("links.offerItem") }} &rarr;</span>
      </div></g-link
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
    width: 100%;
    object-fit: cover;
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
    overflow: hidden;
    z-index: 0;

    .link-text {
      display: block;
      position: absolute;
      opacity: 0;
      bottom: 0.5rem;
      left: 0;
      width: 100%;
      text-align: center;
      font-style: italic;
      background: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.8),
        white
      );
      min-height: 30%;

      span {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  }
  .offer-link .link-text,
  .offer-text h3 {
    transition: all 0.3s ease;
  }
  &:hover {
    .offer-link .link-text,
    .offer-text h3 {
      transition: all 0.3s ease;
    }
    .offer-link .link-text {
      opacity: 1;
      bottom: 1.5rem;
    }
    .offer-text h3 {
      //transform: translateY(-1rem);
    }
  }
}
</style>
