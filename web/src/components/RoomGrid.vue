<template>
  <section class="rooms room-grid" :class="{ expanded: expanded }">
    <div class="section-intro room-intro" v-if="showIntro">
      <g-link class="section-heading--link" :to="$tp(`${$t('slug.rooms')}`)"
        ><span>{{ $t("menu.rooms") }}</span></g-link
      >
      <h2 class="room-heading">
        {{ $static.roomPage.pageHeader.heading[$context.locale] }}
      </h2>
      <p class="lead">
        {{ $static.roomPage.pageHeader.lead[$context.locale] }}
      </p>
    </div>
    <RoomItem
      v-for="room in $static.rooms.edges.slice(0, limit)"
      :key="room.id"
      :room="room.node"
      :expanded="expanded"
      class="room"
    />
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
    sortBy: "title", order: DESC
  ) {
    edges {
      node {
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
  },
};
</script>

<style lang="scss" scoped>
.room-grid {
  display: flex;
  gap: var(--spacing-sitepadding);
  flex-wrap: wrap;
  justify-content: center;
}
.room-intro {
  width: 100%;
}
.room-heading {
  color: var(--color-yellow-dark);
}
.room {
  width: calc(34% - var(--spacing-sitepadding));
}
.section-button {
  width: 100%;
}

.room-grid.expanded {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 70rem;
  margin: 0 auto;

  .room {
    width: 100%;
  }
}
</style>
