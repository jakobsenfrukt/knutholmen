<template>
  <section class="rooms room-grid" :class="{ expanded: expanded }">
    <div class="section-intro room-intro" v-if="showIntro">
      <g-link class="section-heading--link" :to="$tp(`${$t('slug.rooms')}`)"
        ><span>{{ $t("menu.rooms") }}</span></g-link
      >
      <h2 class="room-heading">
        <template v-if="heading">
          {{ heading }}
        </template>
        <template v-else>
          {{ $static.roomPage.pageHeader.heading[$context.locale] }}
        </template>
      </h2>
      <p class="lead">
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
    sortBy: "title", order: ASC
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
  },
  methods: {
    selectedItems() {
      if (this.items) {
        return this.items;
      } else {
        return this.$static.rooms.edges;
      }
      /*return this.$static.articles.edges.filter((article) => {
        return article.node.locale === this.$context.locale;
      });*/
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
  padding-top: 0;

  .room {
    width: 100%;
  }
}
</style>
