<template>
  <section class="activities grid activity-grid">
    <div class="section-intro activity-intro">
      <g-link
        class="section-heading--link"
        :to="$tp(`${$t('slug.activities')}`)"
        v-if="showIntro"
        ><span>{{ $t("menu.activities") }}</span></g-link
      >
      <h2 class="activity-heading">
        <template v-if="heading">
          {{ heading }}
        </template>
        <template v-else-if="showIntro">
          {{ $static.activityPage.pageHeader.heading[$context.locale] }}
        </template>
      </h2>
      <p class="lead" v-if="showIntro">
        {{ $static.activityPage.pageHeader.lead[$context.locale] }}
      </p>
    </div>
    <template v-if="items">
      <ActivityItem
        v-for="activity in items.slice(0, limit)"
        :key="activity.id"
        :activity="activity"
      />
    </template>
    <template v-else-if="current">
      <ActivityItem
        v-for="activity in shuffle($static.activities.edges).slice(0, limit)"
        :key="activity.id"
        :activity="activity.node"
      />
    </template>
    <template v-else>
      <ActivityItem
        v-for="activity in $static.activities.edges.slice(0, limit)"
        :key="activity.id"
        :activity="activity.node"
      />
    </template>
    <div class="section-button" v-if="!hideButton">
      <Button
        :text="$t('links.activities')"
        :link="$tp(`${$t('slug.activities')}`)"
      />
    </div>
  </section>
</template>

<static-query>
query {
  activityPage: sanityActivityPage(id: "activityPage") {
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
  activities: allSanityActivity(
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
import ActivityItem from "@/components/ActivityItem";
import Button from "@/components/buttons/Button";

export default {
  components: {
    ActivityItem,
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
.activity-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-sitepadding);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}
</style>
