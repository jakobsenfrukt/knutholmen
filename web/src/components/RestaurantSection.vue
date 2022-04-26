<template>
  <section class="restaurant-section">
    <div class="section-intro">
      <g-link
        class="section-heading--link"
        :to="$tp(`${$t('slug.restaurant')}`)"
        ><span>{{ $t("menu.restaurant") }}</span></g-link
      >
      <h2 class="restaurant-heading">
        {{ $static.restaurantPage.pageHeader.heading[$context.locale] }}
      </h2>
      <p class="lead">
        {{ $static.restaurantPage.pageHeader.lead[$context.locale] }}
      </p>
      <Button
        :text="$t('links.restaurant')"
        :link="$tp(`${$t('slug.restaurant')}`)"
      />
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
import Button from "@/components/buttons/Button";

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.restaurant-section {
  color: var(--color-blue-dark);

  h2 {
    color: var(--color-green-text);
  }

  &:before,
  &:after {
    content: " ";
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
    width: 12rem;
    height: 12rem;
    position: absolute;
  }
  &:after {
    background-image: url("/assets/images/illustrations/test/skisse-eple.png");
    top: -1rem;
    right: -2rem;
  }
}
</style>
