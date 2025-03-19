<template>
  <section id="book" class="restaurant-booking">
    <!--a :href="$static.general.bookTable.url[$context.locale]" class="section-heading--link">
      <span>{{ $static.general.bookTable.buttonText[$context.locale] }}</span>
    </a-->
    <iframe src="https://knutholmen.munu.shop/bookingswidget" height="1000" width="360" :title="$static.general.bookTable.buttonText[$context.locale]"></iframe>
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
  general: sanityGeneral(id: "general") {
    bookTable {
      buttonText {
        no
        en
      }
      url {
        no
        en
      }
      info {
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
  }
};
</script>

<style lang="scss" scoped>
.restaurant-booking {
  background-color: var(--color-blue-dark);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  iframe {
    border: none;
  }
}
.section-heading--link {
  span {
    color: var(--color-white);
    background-color: var(--color-blue-dark);
  }
  &:before {
    background-color: var(--color-white) !important;
  }
}
</style>
