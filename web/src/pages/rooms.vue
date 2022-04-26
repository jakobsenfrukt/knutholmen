<template>
  <Layout>
    <PageHeader :pageHeader="$page.roomPage.pageHeader" />
    <main class="page-content">
      <Button
        :text="$t('links.bookRoom')"
        :link="$page.general.bookingUrl[$context.locale]"
        blank
      />
      <p>Her kjem du til ei eigen nettside for booking. Velkomen til havs!</p>
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
      <RoomGrid />
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
        asset {
          _id
          url
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
  general: sanityGeneral(id: "general") {
    bookingUrl {
      no
      en
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";
import PageHeader from "~/components/PageHeader";
import Button from "~/components/Button";
import RoomGrid from "~/components/RoomGrid";

export default {
  components: {
    BlockContent,
    PageHeader,
    Button,
    RoomGrid,
  },
  metaInfo: {
    title: "Rooms",
  },
};
</script>

<style lang="scss" scoped></style>
