<template>
  <section class="offer-grid">
    <div class="offer-intro">
      <h2 class="offer-heading">Pakker</h2>
      <p class="lead">En tekst som introduserer pakkene</p>
      <Button text="Se alle pakker" />
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
.offer-heading {
  grid-column: 1 / -1;
}
@media (min-width: 800px) {
  .offer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
