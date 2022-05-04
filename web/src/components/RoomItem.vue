<template>
  <article class="article-item room" :class="{ expanded: expanded }">
    <img
      v-if="room.image.image"
      :src="
        $urlForImage(room.image.image, $static.metadata.sanityOptions)
          .width(600)
          .height(400)
          .auto('format')
          .url()
      "
      :alt="room.image.alt"
      class="room-image"
    />
    <div class="room-text">
      <h3>{{ room.title[$context.locale] }}</h3>
      <p class="room-lead">
        {{ room.lead[$context.locale] }}
      </p>
    </div>
    <!--<BlockContent :blocks="room._rawBio" v-if="room._rawBio" />-->
    <g-link
      class="room-link"
      :to="$tp(`${$t('slug.rooms')}/${$slugByLocale(room, this.$i18n.locale)}`)"
      ><span>{{ $t("links.roomItem") }} &rarr;</span></g-link
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
    room: Object,
    expanded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.room {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  background: var(--color-white);
  &-image {
    width: 100%;
    object-fit: cover;
  }
  &-text {
    padding: var(--spacing-sitepadding);
    text-align: center;

    h3 {
      margin: 0 0 0.5rem;
      font-size: var(--font-size-l);
      color: var(--color-yellow-dark);
    }
  }
  &-lead {
    display: none;
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
      text-align: center;
      font-style: italic;
    }
  }
  .room-link span,
  .room-text h3,
  .room-lead {
    transition: all 0.3s ease;
  }
  &:hover {
    .room-link span,
    .room-text h3,
    .room-lead {
      transition: all 0.3s ease;
    }
    .room-link span {
      opacity: 1;
      bottom: 1.5rem;
    }
    .room-text h3,
    .room-lead {
      transform: translateY(-1rem);
    }
  }
}

.room.expanded {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .room-image {
    height: 100%;
  }

  .room-text {
    text-align: left;

    h3 {
      font-size: var(--font-size-xl);
    }
    .room-lead {
      display: block;
    }
  }
  .room-link span {
    left: 50%;
    width: 50%;
    text-align: right;
    padding-right: var(--spacing-sitepadding);
    color: var(--color-highlight);
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    align-items: flex-start;
    .room-image {
      height: auto;
    }
  }
}
</style>
