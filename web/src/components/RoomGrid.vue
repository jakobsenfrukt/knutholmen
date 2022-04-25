<template>
  <section class="room-grid">
    <div class="section-intro room-intro" v-if="showIntro">
      <g-link class="section-heading--link" :to="$tp('/rooms')"
        ><span>{{ $t("menu.rooms") }}</span></g-link
      >
      <h2 class="room-heading">
        {{ $static.roomPage.pageHeader.heading[$context.locale] }}
      </h2>
      <p class="lead">
        {{ $static.roomPage.pageHeader.lead[$context.locale] }}
      </p>
      <Button :text="$t('links.rooms')" :link="$tp('/rooms')" />
    </div>
    <RoomItem
      v-for="room in $static.rooms.edges.slice(0, limit)"
      :key="room.id"
      :room="room.node"
    />
    <RoomItem
      v-for="room in $static.rooms.edges.slice(0, limit)"
      :key="room.id"
      :room="room.node"
    />
    <RoomItem
      v-for="room in $static.rooms.edges.slice(0, limit)"
      :key="room.id"
      :room="room.node"
    />
    <RoomItem
      v-for="room in $static.rooms.edges.slice(0, limit)"
      :key="room.id"
      :room="room.node"
    />
  </section>
</template>

<static-query>
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
  rooms: allSanityRoom(
    filter: {slug: {current: {ne: null}}},
    sortBy: "title", order: DESC
  ) {
    edges {
      node {
        id
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
      }
    }
  }
}
</static-query>

<script>
import RoomItem from "@/components/RoomItem";
import Button from "@/components/Button";

export default {
  components: {
    RoomItem,
    Button,
  },
  props: {
    limit: {
      type: Number,
      default: undefined,
    },
    showIntro: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.room-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sitepadding);
}
@media (min-width: 800px) {
  .room-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
