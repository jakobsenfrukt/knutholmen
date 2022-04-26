<template>
  <section class="activity-grid">
    <div class="section-intro activity-intro" v-if="showIntro">
      <g-link class="section-heading--link" :to="$tp('/activities')"
        ><span>{{ $t("menu.activities") }}</span></g-link
      >
      <h2 class="activity-heading">
        {{ $static.activityPage.pageHeader.heading[$context.locale] }}
      </h2>
      <p class="lead">
        {{ $static.activityPage.pageHeader.lead[$context.locale] }}
      </p>
    </div>
    <ActivityItem
      v-for="activity in $static.activities.edges.slice(0, limit)"
      :key="activity.id"
      :activity="activity.node"
    />
    <div class="section-button">
      <Button :text="$t('links.activities')" :link="$tp('/activities')" />
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
    showIntro: {
      type: Boolean,
      default: false,
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
  color: var(--color-red);
}
@media (min-width: 800px) {
  .activity-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
