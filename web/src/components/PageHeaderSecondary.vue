<template>
  <header class="page-header" :class="{ hasButton: button }">
    <div class="grid">
      <div class="text text-top">
        <span class="page-title">{{ title }}</span>
        <h1 class="page-heading">{{ heading }}</h1>
        <div class="button-wrapper" v-if="button">
          <Button :type="button" />
        </div>
      </div>
      <div class="image">
        <g-image
          v-if="image"
          :src="
            $urlForImage(image.image, $static.metadata.sanityOptions)
              .width(1200)
              .auto('format')
              .url()
          "
          :alt="image.alt[$context.locale]"
        />
      </div>
      <div class="text text-bottom">
        <p class="lead" v-if="lead">
          {{ lead }}
        </p>
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
    image: Object,
    title: String,
    heading: String,
    lead: String,
    button: String,
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  margin: 0;
  background: linear-gradient(
    180deg,
    var(--color-blue-dark) 50%,
    var(--color-white) 50%
  );
  .grid {
    width: 100%;
    max-width: 70em;
    margin: 0 auto;
    padding: 0 calc(var(--spacing-sitepadding) * 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    color: var(--color-text);
    align-items: center;
    gap: calc(var(--spacing-sitepadding) * 1);
  }
  .text {
    width: 100%;
    position: relative;
  }
  .text-top {
    align-self: flex-end;
  }
  .text-bottom {
    align-self: flex-start;
  }
}
.page-heading,
.lead {
  margin: 1rem auto;
}
.lead {
  margin-bottom: 3rem;
}
.hasButton {
  .page-heading,
  .lead {
    margin: 3rem auto;
  }
}
.page-title,
.page-heading {
  color: var(--color-white);
}
.image {
  width: 100%;
  grid-row: span 2;
  img {
    display: block;
    width: 100%;
    max-width: 40rem;
    margin: 0 auto;
  }
}
.page-title {
  display: none;
}
.button-wrapper {
  width: 100%;
  position: absolute;
  bottom: -1.2rem;
  left: 0;
  z-index: 2;
}
@media (max-width: 1000px) {
  .page-header .grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    padding: 0;
    .text {
      text-align: center;
      padding: 0 calc(var(--spacing-sitepadding) * 2);
    }
    .text-top {
      order: 1;
    }
    .image {
      order: 2;
    }
    .text-bottom {
      order: 3;
    }
  }
  .page-title {
    display: block;
    margin-top: 3rem;
  }
  .page-heading {
    margin-top: 2rem;
  }
  .lead {
    margin-top: 1rem;
  }
  .button-wrapper {
    width: 100%;
    position: absolute;
    bottom: -1.6rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
}
</style>
