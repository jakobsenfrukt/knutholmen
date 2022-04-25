<template>
  <Layout>
    <main class="page-content">
      <h1>{{ $page.roomPage.pageHeader.title[$context.locale] }}</h1>
      <p class="lead">
        {{ $page.roomPage.pageHeader.lead[$context.locale] }}
      </p>
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
import Button from "~/components/Button";
import RoomGrid from "~/components/RoomGrid";

export default {
  components: {
    BlockContent,
    Button,
    RoomGrid,
  },
  metaInfo: {
    title: "Rooms",
  },
};
</script>

<style lang="scss" scoped></style>
