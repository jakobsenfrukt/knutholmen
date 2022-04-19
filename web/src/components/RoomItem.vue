<template>
  <article class="room">
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
        <!--{{ offer.lead[$context.locale] }}-->En kort tekst om dette
        romtilbudet.
      </p>
    </div>
    <!--<BlockContent :blocks="room._rawBio" v-if="room._rawBio" />-->
    <g-link class="room-link" :to="`/rooms/${room.slug.current}`">Link</g-link>
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
