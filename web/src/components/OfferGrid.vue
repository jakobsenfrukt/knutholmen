<template>
  <section class="offer-grid">
    <div class="section-intro offer-intro" v-if="showIntro">
      <g-link class="section-heading--link" :to="$tp(`${$t('slug.offers')}`)"
        ><span>{{ $t("menu.offers") }}</span></g-link
      >
      <h2 class="offer-heading">
        {{ $static.offerPage.pageHeader.heading[$context.locale] }}
      </h2>
      <p
        class="lead"
        v-if="
          $static.offerPage.pageHeader.lead &&
            $static.offerPage.pageHeader.lead[$context.locale]
        "
      >
        {{ $static.offerPage.pageHeader.lead[$context.locale] }}
      </p>
    </div>
    <OfferItem
      v-for="offer in $static.offers.edges.slice(0, limit)"
      :key="offer.id"
      :offer="offer.node"
    />
    <div class="section-button" v-if="!hideButton">
      <Button :text="$t('links.offers')" :link="$tp(`${$t('slug.offers')}`)" />
    </div>
  </section>
</template>

<static-query>
query {
  offerPage: sanityOfferPage(id: "offerPage") {
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
  offers: allSanityOffer(
    sortBy: "title", order: DESC
  ) {
    edges {
      node {
        id
        title {
          no
          en
        }
        heading {
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
      }
    }
  }
}
</static-query>

<script>
import OfferItem from "@/components/OfferItem";
import Button from "@/components/buttons/Button";

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
    showIntro: {
      type: Boolean,
      default: false,
    },
    hideButton: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.offer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sitepadding);
  background: var(--color-red-light);
}
@media (min-width: 1200px) {
  .offer-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
