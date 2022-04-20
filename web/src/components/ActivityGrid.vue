<template>
  <section class="activity-grid">
    <div class="activity-intro">
      <g-link class="section-heading--link" :to="$tp('/activities')"
        ><span>{{ $t("menu.activities") }}</span></g-link
      >
      <h2 class="activity-heading">
        {{ $static.activityPage.title[$context.locale] }}
      </h2>
      <p class="lead">{{ $static.activityPage.lead[$context.locale] }}</p>
      <Button :text="$t('links.activities')" :link="$tp('/activities')" />
    </div>
    <ActivityItem
      v-for="activity in $static.activities.edges.slice(0, limit)"
      :key="activity.id"
      :activity="activity.node"
    />
    <ActivityItem
      v-for="activity in $static.activities.edges.slice(0, limit)"
      :key="activity.id"
      :activity="activity.node"
    />
  </section>
</template>

<static-query>
query {
  activityPage: sanityActivityPage(id: "activityPage") {
    title {
      no
      en
    }
    lead {
      no
      en
    }
  }
  activities: allSanityActivity(
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
import ActivityItem from "@/components/ActivityItem";
import Button from "@/components/Button";

export default {
  components: {
    ActivityItem,
    Button,
  },
  props: {
    limit: {
      type: Number,
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
.activity-heading {
  grid-column: 1 / -1;
}
@media (min-width: 800px) {
  .activity-grid {
  }
}
</style>
