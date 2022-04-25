<template>
  <Layout>
    <main class="page-content">
      <PageHeader :pageHeader="$page.roomPage.pageHeader" />
      <Button
        :text="$t('links.bookRoom')"
        :link="$page.general.bookingUrl[$context.locale]"
        blank
      />
      <p>Her kjem du til ei eigen nettside for booking. Velkomen til havs!</p>
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
