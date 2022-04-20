<template>
  <Layout>
    <main class="page-content">
      <h1>{{ $page.roomPage.title[$context.locale] }}</h1>
      <p class="lead">
        {{ $page.roomPage.lead[$context.locale] }}
      </p>
      <Button
        :text="$t('links.bookRoom')"
        :link="$page.roomPage.bookingUrl[$context.locale]"
        blank
      />
      <p>Her kjem du til ei eigen nettside for booking. Velkomen til havs!</p>
    </main>
  </Layout>
</template>

<page-query>
query {
  roomPage: sanityRoomPage(id: "roomPage") {
    title {
      no
      en
    }
    lead {
      no
      en
    }
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

export default {
  components: {
    BlockContent,
    Button,
  },
  metaInfo: {
    title: "Rooms",
  },
};
</script>

<style lang="scss" scoped></style>
