<template>
  <section class="intro">
    <g-image
      v-if="$static.frontpage.pageHeader.image"
      :src="
        $urlForImage(
          $static.frontpage.pageHeader.image,
          $static.metadata.sanityOptions
        )
          .width(1200)
          .height(600)
          .auto('format')
          .url()
      "
      :alt="$static.frontpage.pageHeader.image.alt[$context.locale]"
    />
    <div class="intro-text">
      <h1>{{ $static.frontpage.pageHeader.heading[$context.locale] }}</h1>
      <p class="lead">
        {{ $static.frontpage.pageHeader.text[$context.locale] }}
      </p>
      <Button
        :text="$t('links.bookRoom')"
        :link="$static.roomPage.bookingUrl[$context.locale]"
        blank
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
    pageHeader {
      heading {
        no
        en
      }
      text {
        no
        en
      }
      image {
        asset {
          _id
          url
        }
        alt {
          no
          en
        }
      }
    }
  }
  roomPage: sanityRoomPage(id: "roomPage") {
    bookingUrl {
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
.intro {
  padding-top: 0;
  img {
    border-radius: var(--border-radius);
  }
}
</style>
