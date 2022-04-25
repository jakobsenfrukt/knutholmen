<template>
  <section class="restaurant-section">
    <div class="section-intro">
      <g-link class="section-heading--link" :to="$tp('/restaurant')"
        ><span>{{ $t("menu.restaurant") }}</span></g-link
      >
      <h2 class="restaurant-heading">
        {{ $static.restaurantPage.pageHeader.heading[$context.locale] }}
      </h2>
      <p class="lead">
        {{ $static.restaurantPage.pageHeader.lead[$context.locale] }}
      </p>
      <Button :text="$t('links.restaurant')" :link="$tp('/restaurant')" />
    </div>
  </section>
</template>

<static-query>
query {
  restaurantPage: sanityRestaurantPage (id: "restaurantPage") {
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
}
</style>
