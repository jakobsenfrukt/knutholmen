<template>
  <Layout class="rooms">
    <PageHeader
      :title="$page.roomPage.pageHeader.title[$context.locale]"
      :heading="$page.room.title[$context.locale]"
      :image="$page.room.image"
      :lead="$page.room.lead[$context.locale]"
      button="bookRoom"
    />
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
import PageHeader from "~/components/PageHeaderSecondary";
import BlockContent from "~/components/tools/BlockContent";
import RoomGrid from "~/components/RoomGrid";

export default {
  components: {
    PageHeader,
    BlockContent,
    RoomGrid,
  },
};
</script>

<style lang="scss" scoped></style>
