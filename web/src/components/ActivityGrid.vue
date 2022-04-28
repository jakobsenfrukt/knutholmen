<template>
  <section class="activities activity-grid">
    <div class="section-intro activity-intro" v-if="showIntro">
      <g-link
        class="section-heading--link"
        :to="$tp(`${$t('slug.activities')}`)"
        ><span>{{ $t("menu.activities") }}</span></g-link
      >
      <h2 class="activity-heading">
        <template v-if="heading">
          {{ heading }}
        </template>
        <template v-else>
          {{ $static.activityPage.pageHeader.heading[$context.locale] }}
        </template>
      </h2>
      <p class="lead">
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
  },
};
</script>

<style lang="scss" scoped>
.activity-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sitepadding);
}
@media (min-width: 800px) {
  .activity-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
