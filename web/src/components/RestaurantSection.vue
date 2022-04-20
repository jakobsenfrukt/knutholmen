<template>
  <section class="restaurant-section">
    <g-link class="section-heading--link" :to="$tp('/restaurant')"
      ><span>{{ $t("menu.restaurant") }}</span></g-link
    >
    <h2 class="restaurant-heading">
      {{ $static.restaurantPage.title[$context.locale] }}
    </h2>
    <p class="lead">{{ $static.restaurantPage.lead[$context.locale] }}</p>
    <Button :text="$t('links.restaurant')" :link="$tp('/restaurant')" />
  </section>
</template>

<static-query>
query {
  restaurantPage: sanityRestaurantPage (id: "restaurantPage") {
    title {
      no
      en
    }
    lead {
      no
      en
    }
  }
}
</static-query>

<script>
import Button from "@/components/Button";

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.restaurant-section {
  background: var(--color-yellow);
}
</style>
