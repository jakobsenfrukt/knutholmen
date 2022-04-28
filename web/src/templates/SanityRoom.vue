<template>
  <Layout>
    <header class="page-header">
      <div class="text">
        <!--<g-link class="page-title" :to="$tp(`${$t('slug.rooms')}`)"
          ><span>&larr; &nbsp; {{ $t("menu.rooms") }}</span></g-link
        >-->
        <span class="page-title">{{
          $page.roomPage.pageHeader.title[$context.locale]
        }}</span>
        <h1 class="page-heading">
          {{ $page.room.title[$context.locale] }}
        </h1>
        <p
          class="lead"
          v-if="$page.room.lead && $page.room.lead[$context.locale]"
        >
          {{ $page.room.lead[$context.locale] }}
        </p>
      </div>
      <g-image
        v-if="$page.room.image"
        :src="
          $urlForImage($page.room.image.image, $page.metadata.sanityOptions)
            .width(1200)
            .auto('format')
            .url()
        "
        :alt="$page.room.image.alt[$context.locale]"
      />
    </header>
    <main class="page-content">
      <div class="body-content" v-if="$page.room.body">
        <block-content
          :blocks="$page.room.body._rawNo"
          v-if="$page.room.body._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="$page.room.body._rawEn"
          v-else-if="$page.room.body._rawEn && $context.locale == 'en'"
          class="block-content"
        />
      </div>
    </main>
    <RoomGrid :heading="$t('headings.rooms')" />
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
    _type
    title {
      no
      en
    }
    slug {
      no {
        current
      }
      en {
        current
      }
    }
    image {
      image {
        asset {
          url
        }
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
    body {
      _rawNo
      _rawEn
    }
  }
  roomPage: sanityRoomPage(id: "roomPage") {
    pageHeader {
      title {
        no
        en
      }
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";
import RoomGrid from "~/components/RoomGrid";

export default {
  components: {
    BlockContent,
    RoomGrid,
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  color: var(--color-text);
  padding: var(--spacing-sitepadding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: calc(var(--spacing-sitepadding) * 1.5);
  min-height: 40vh;
  max-width: 70rem;
  margin: 0 auto;
  img {
    border-radius: var(--border-radius);
  }
}
.page-title {
  display: block;
}
@media (max-width: 1000px) {
  .page-header {
    grid-template-columns: 1fr;
    min-height: 0;
    text-align: center;

    img {
      order: 1;
    }
    .text {
      order: 2;
    }
    .lead {
      margin: 0 auto 2rem;
    }
  }
  .page-title {
    display: block;
  }
}
</style>
