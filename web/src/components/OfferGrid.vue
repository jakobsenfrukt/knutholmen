<template>
  <section class="offers offer-grid">
    <div class="section-intro offer-intro">
      <g-link
        class="section-heading--link"
        :to="$tp(`${$t('slug.offers')}`)"
        v-if="showIntro"
        ><span>{{ $t("menu.offers") }}</span></g-link
      >
      <h2 class="offer-heading">
        <template v-if="heading">
          {{ heading }}
        </template>
        <template v-else>
          {{ $static.offerPage.pageHeader.heading[$context.locale] }}
        </template>
      </h2>
      <p
        class="lead"
        v-if="
          showIntro &&
            $static.offerPage.pageHeader.lead &&
            $static.offerPage.pageHeader.lead[$context.locale]
        "
      >
        {{ $static.offerPage.pageHeader.lead[$context.locale] }}
      </p>
    </div>
    <template v-if="items">
      <OfferItem
        v-for="offer in items.slice(0, limit)"
        :key="offer.id"
        :offer="offer"
      />
    </template>
    <template v-else-if="current">
      <OfferItem
        v-for="offer in shuffle($static.offers.edges).slice(0, limit)"
        :key="offer.id"
        :offer="offer.node"
      />
    </template>
    <template v-else>
      <OfferItem
        v-for="offer in $static.offers.edges.slice(0, limit)"
        :key="offer.id"
        :offer="offer.node"
      />
    </template>
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
.offer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-sitepadding);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}
</style>
