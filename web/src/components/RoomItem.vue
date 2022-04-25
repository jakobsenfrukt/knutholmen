<template>
  <article class="article-item room">
    <img
      v-if="room.image"
      :src="
        $urlForImage(room.image, $static.metadata.sanityOptions)
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
      <p>
        {{ room.lead[$context.locale] }}
      </p>
    </div>
    <!--<BlockContent :blocks="room._rawBio" v-if="room._rawBio" />-->
    <g-link class="room-link" :to="$tp(`${$t('slug.rooms')}/${$slugByLocale(room, this.$i18n.locale)}`)">Link</g-link>
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
  },
};
</script>

<style lang="scss" scoped>
.room {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  &-image {
    height: 100%;
    object-fit: cover;
  }
  &-text {
    padding: 2rem;

    h3 {
      margin: 0 0 1rem;
      font-family: var(--font-serif);
      font-size: var(--font-size-xxl);
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
