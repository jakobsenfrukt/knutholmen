<template>
  <header class="page-header">
    <div class="illustration">
      <g-image
        v-if="pageHeader.image"
        :src="
          $urlForImage(pageHeader.image.image, $static.metadata.sanityOptions)
            .width(1200)
            .auto('format')
            .url()
        "
        :alt="pageHeader.image.alt[$context.locale]"
      />
    </div>
    <div class="text">
      <span class="page-title">{{ pageHeader.title[$context.locale] }}</span>
      <h1 class="page-heading">{{ pageHeader.heading[$context.locale] }}</h1>
      <p
        class="lead"
        v-if="pageHeader.lead && pageHeader.lead[$context.locale]"
      >
        {{ pageHeader.lead[$context.locale] }}
      </p>
      <div class="button-wrapper" v-if="button">
        <Button :type="button" />
      </div>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    sanityOptions {
      projectId
      dataset
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
    pageHeader: Object,
    button: String,
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  color: var(--color-text);
  align-items: center;
  gap: calc(var(--spacing-sitepadding) * 1.5);
  margin: 0 auto;
  .text {
    width: 100%;
    text-align: center;
    padding: 0 calc(var(--spacing-sitepadding) * 2);
  }
}
.page-heading {
  color: var(--color-highlight);
  margin: 3rem auto 2rem;
}
.lead {
  margin: 2rem auto 3rem;
}
.illustration {
  width: 100%;
  background: linear-gradient(
    180deg,
    var(--color-blue-dark) 50%,
    var(--color-white) 50%
  );

  img {
    display: block;
    width: 90%;
    max-width: 40rem;
    margin: 0 auto;
  }
}
.page-title {
  display: none;
}
.button-wrapper {
  margin-bottom: 3rem;
}
@media (max-width: 1000px) {
  .page-header .text {
    padding: 0 var(--spacing-sitepadding);
  }
  .page-title {
    display: block;
    margin-top: 2rem;
  }
  .page-heading,
  .lead {
    margin: 2rem auto;
  }
  .page-heading {
    margin-top: 1.5rem;
  }
  .lead {
    margin-bottom: 3rem;
  }
  .illustration {
    padding-top: var(--spacing-sitepadding);
  }
}
</style>
