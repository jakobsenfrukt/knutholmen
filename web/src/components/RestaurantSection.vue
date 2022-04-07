<template>
  <section class="restaurant-section">
    <g-link class="nav__link" :to="$tp('/restaurant')"
      ><span>{{ $t("menu.restaurant") }}</span></g-link
    >
    <h2 class="restaurant-heading">
      {{ $static.restaurantPage.title[$context.locale] }}
    </h2>
  </section>
</template>

<static-query>
query {
  restaurantPage: sanityRestaurantPage (id: "restaurantPage") {
    title {
      no
      en
    }
  }
}
</static-query>

<style lang="scss" scoped>
.restaurant-section {
  background: gold;
}
</style>
