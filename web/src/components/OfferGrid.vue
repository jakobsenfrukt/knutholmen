<template>
  <section class="offer-grid">
    <div class="offer-intro">
      <g-link class="section-heading--link" :to="$tp('/offers')"
        ><span>{{ $t("menu.offers") }}</span></g-link
      >
      <h2 class="offer-heading">
        {{ $static.offerPage.title[$context.locale] }}
      </h2>
      <p class="lead">{{ $static.offerPage.lead[$context.locale] }}</p>
      <Button :text="$t('links.offers')" :link="$tp('/offers')" />
    </div>
    <OfferItem
      v-for="offer in $static.offers.edges.slice(0, limit)"
      :key="offer.id"
      :offer="offer.node"
    />
    <OfferItem
      v-for="offer in $static.offers.edges.slice(0, limit)"
      :key="offer.id"
      :offer="offer.node"
    />
  </section>
</template>

<static-query>
query {
  offerPage: sanityOfferPage(id: "offerPage") {
    title {
      no
      en
    }
    lead {
      no
      en
    }
  }
  offers: allSanityOffer(
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
import OfferItem from "@/components/OfferItem";
import Button from "@/components/Button";

export default {
  components: {
    OfferItem,
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
.offer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sitepadding);
}
.offer-intro {
  grid-column: 1 / span 2;
}
@media (min-width: 800px) {
  .offer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
