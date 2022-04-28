<template>
  <section class="intro">
    <div class="intro-top">
      <g-image
        v-if="$static.frontpage.image.image"
        :src="
          $urlForImage(
            $static.frontpage.image.image,
            $static.metadata.sanityOptions
          )
            .width(1200)
            .auto('format')
            .url()
        "
        :alt="$static.frontpage.image.alt[$context.locale]"
        class="illustration"
      />
      <div class="intro-text">
        <p class="lead">
          {{ $static.frontpage.text[$context.locale] }}
        </p>
      </div>

      <div class="booker-wrapper">
        <Button type="bookRoom" />
        <Booker />
      </div>
    </div>
    <div class="photo">
      <g-image
        v-if="$static.frontpage.image2.image"
        :src="
          $urlForImage(
            $static.frontpage.image2.image,
            $static.metadata.sanityOptions
          )
            .width(1600)
            .auto('format')
            .url()
        "
        :alt="$static.frontpage.image2.alt[$context.locale]"
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
  frontpage: sanityFrontpage(id: "frontpage") {
    text {
      no
      en
    }
    image {
      image {
        asset {
          _id
          url
        }
      }
      alt {
        no
        en
      }
    }
    image2 {
      image {
        asset {
          _id
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
</static-query>

<script>
import Button from "@/components/buttons/Button";
import Booker from "@/components/Booker";

export default {
  components: {
    Button,
    Booker,
  },
};
</script>

<style lang="scss">
.intro {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  gap: var(--spacing-sitepadding);
  overflow: visible;
  &-top {
    position: relative;
    padding-bottom: calc(var(--spacing-sitepadding) * 1.75);
  }
  .illustration {
    display: block;
    width: 90%;
    max-width: 40rem;
    margin: 0 auto;
  }
  .photo {
    display: block;
    margin: 0 calc(var(--spacing-sitepadding) * -1);
    img {
      display: block;
      width: 100%;
      max-height: 75vh;
      object-fit: cover;
    }
  }
  &-text {
    text-align: center;
  }
  .lead {
    margin: calc(var(--spacing-sitepadding) * 2) auto var(--spacing-sitepadding);
    max-width: 30em;
  }
}
.booker {
  &-wrapper {
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
}
@media (max-width: 1000px) {
  .intro {
    .illustration {
      padding: 3rem 0 0;
    }
  }
}
</style>
