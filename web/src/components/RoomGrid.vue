<template>
  <section class="rooms grid room-grid" :class="{ expanded: expanded }">
    <div class="section-intro room-intro">
      <g-link
        class="section-heading--link"
        :to="$tp(`${$t('slug.rooms')}`)"
        v-if="showIntro"
        ><span>{{ $t("menu.rooms") }}</span></g-link
      >
      <h2 class="room-heading">
        <template v-if="heading">
          {{ heading }}
        </template>
        <template v-else-if="showIntro">
          {{ $static.roomPage.pageHeader.heading[$context.locale] }}
        </template>
      </h2>
      <p class="lead" v-if="showIntro">
        {{ $static.roomPage.pageHeader.lead[$context.locale] }}
      </p>
    </div>
    <template v-if="items">
      <RoomItem
        v-for="room in items.slice(0, limit)"
        :key="room.id"
        :room="room"
        :expanded="expanded"
        class="room"
      />
    </template>
    <template v-else-if="current">
      <RoomItem
        v-for="room in shuffle($static.rooms.edges).slice(0, limit)"
        :key="room.id"
        :room="room.node"
        :expanded="expanded"
        class="room"
      />
    </template>
    <template v-else>
      <RoomItem
        v-for="room in $static.rooms.edges.slice(0, limit)"
        :key="room.id"
        :room="room.node"
        :expanded="expanded"
        class="room"
      />
    </template>
    <div class="section-button" v-if="!hideButton">
      <Button :text="$t('links.rooms')" :link="$tp(`${$t('slug.rooms')}`)" />
    </div>
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
    sortBy: "_updatedAt", order: DESC
  ) {
    edges {
      node {
        _updatedAt
        _type
        id
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
      }
    }
  }
}
</static-query>

<script>
import RoomItem from "@/components/RoomItem";
import Button from "@/components/buttons/Button";

export default {
  components: {
    RoomItem,
    Button,
  },
  props: {
    items: {
      type: Array,
      default: undefined,
    },
    limit: {
      type: Number,
      default: undefined,
    },
    showIntro: {
      type: Boolean,
      default: false,
    },
    hideButton: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    heading: {
      type: String,
      default: undefined,
    },
    current: {
      type: String,
      default: undefined,
    },
  },
  methods: {
    shuffle(array) {
      return array
        .filter((item) => item.node.id != this.current)
        .sort(() => Math.random() - Math.random());
    },
  },
};
</script>

<style lang="scss" scoped>
.room-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-sitepadding);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}

.room-grid.expanded {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 0 var(--spacing-sitepadding);
  overflow: visible;

  .room {
    width: 100%;
  }
}
</style>
