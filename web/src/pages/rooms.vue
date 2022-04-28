<template>
  <Layout class="rooms">
    <PageHeader :pageHeader="$page.roomPage.pageHeader" button="bookRoom" />
    <main class="page-content">
      <div class="body-content" v-if="$page.roomPage.tempbody">
        <block-content
          :blocks="$page.roomPage.tempbody._rawNo"
          v-if="$page.roomPage.tempbody._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="$page.roomPage.tempbody._rawEn"
          v-else-if="$page.roomPage.tempbody._rawEn && $context.locale == 'en'"
          class="block-content"
        />
      </div>
      <RoomGrid expanded hideButton />
    </main>
  </Layout>
</template>

<page-query>
query {
  roomPage: sanityRoomPage(id: "roomPage") {
    pageHeader {
      title {
        no
        en
      }
      heading {
        no
        en
      }
      lead {
        no
        en
      }
      image {
        image {
          asset {
            _id
            url
          }
        }
        alt {
          no
          en
        }
      }
    }
    tempbody {
      _rawNo
      _rawEn
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";
import PageHeader from "~/components/PageHeader";
import RoomGrid from "~/components/RoomGrid";

export default {
  components: {
    BlockContent,
    PageHeader,
    RoomGrid,
  },
  metaInfo() {
    return {
      title: this.$page.roomPage.pageHeader.title[this.$context.locale],
    };
  },
};
</script>

<style lang="scss" scoped></style>
