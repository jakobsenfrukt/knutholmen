<template>
  <Layout>
    <main class="page-content">
      <h1>{{ $page.room.title[$context.locale] }}</h1>
      <img
        v-if="$page.room.image"
        :src="
          $urlForImage($page.room.image, $page.metadata.sanityOptions)
            .width(600)
            .height(400)
            .auto('format')
            .url()
        "
        :alt="$page.room.image.alt[$context.locale]"
        class="room-image"
      />
      <div class="room-text">
        <p>
          {{ $page.room.lead[$context.locale] }}
        </p>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  room: sanityRoom (id: $id) {
    title {
      no
      en
    }
    slug {
      current
    }
    image {
      asset {
        url
      }
      alt {
        no
        en
      }
    }
    lead {
      no
      en
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";

export default {
  components: {
    BlockContent,
  },
};
</script>
