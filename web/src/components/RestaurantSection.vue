<template>
  <section class="restaurant-section">
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
