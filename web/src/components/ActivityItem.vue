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
      ><span>{{ $t("links.activityItem") }} &rarr;</span></g-link
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
    width: 100%;
    object-fit: cover;
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
    overflow: hidden;
    z-index: 0;

    span {
      display: block;
      position: absolute;
      opacity: 0;
      bottom: 0.5rem;
      left: 0;
      width: 100%;
      text-align: right;
      font-style: italic;
      padding: 0 calc(var(--spacing-sitepadding) * 0.75);
      color: var(--color-highlight);
    }
  }
  .activity-link span,
  .activity-text h3,
  .activity-text p {
    transition: all 0.3s ease;
  }
  &:hover {
    .activity-link span,
    .activity-text h3,
    .activity-text p {
      transition: all 0.3s ease;
    }
    .activity-link span {
      opacity: 1;
      bottom: 1.5rem;
    }
    .activity-text h3,
    .activity-text p {
      transform: translateY(-0.75rem);
    }
  }
}
</style>
