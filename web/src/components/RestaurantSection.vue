<template>
  <section class="restaurant restaurant-section">
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
      <div class="button-wrapper">
        <Button type="bookTable" />
        <Button
          :text="$t('links.restaurant')"
          :link="$tp(`${$t('slug.restaurant')}`)"
        />
      </div>
    </div>
    <div class="grid">
      <g-image
        v-for="(image, index) in images.slice(0, limit)"
        :key="index"
        :src="
          $urlForImage(image.image, $static.metadata.sanityOptions)
            .width(600)
            .auto('format')
            .url()
        "
        :alt="image.alt[$context.locale]"
      />
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
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
  props: {
    images: {
      type: Array,
      default: undefined,
    },
    limit: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.restaurant-section {
  color: var(--color-blue-dark);
  padding-bottom: 0;

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
.section-intro {
  position: relative;
}
.grid {
  margin: -1.5rem calc(var(--spacing-sitepadding) * -1);
  img {
    display: block;
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
  }
}
.button-wrapper {
  width: 100%;
  z-index: 2;
}
</style>
