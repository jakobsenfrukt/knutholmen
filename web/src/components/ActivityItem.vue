<template>
  <article class="article-item activity">
    <img
      v-if="activity.image.image"
      :src="
        $urlForImage(activity.image.image, $static.metadata.sanityOptions)
          .width(600)
          .height(400)
          .auto('format')
          .url()
      "
      :alt="activity.image.alt"
      class="activity-image"
    />
    <div class="activity-text">
      <h3>{{ activity.title[$context.locale] }}</h3>
      <p>
        {{ activity.lead[$context.locale] }}
      </p>
    </div>
    <!--<BlockContent :blocks="activity._rawBio" v-if="activity._rawBio" />-->
    <g-link
      class="activity-link"
      :to="
        $tp(
          `${$t('slug.activities')}/${$slugByLocale(
            activity,
            this.$i18n.locale
          )}`
        )
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
    activity: Object,
  },
};
</script>

<style lang="scss" scoped>
.activity {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  background: var(--color-white);
  &-image {
    display: block;
  }
  &-text {
    padding: calc(var(--spacing-sitepadding) * 0.75);

    h3 {
      margin: 0.5rem 0 1rem;
      font-weight: 300;
      font-size: var(--font-size-l);
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
