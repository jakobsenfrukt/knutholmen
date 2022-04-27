<template>
  <Layout>
    <header class="page-header">
      <div class="text">
        <span class="page-title">{{ $page.offer.title[$context.locale] }}</span>
        <h1 class="page-heading">{{ $page.offer.heading[$context.locale] }}</h1>
        <p
          class="lead"
          v-if="$page.offer.lead && $page.offer.lead[$context.locale]"
        >
          {{ $page.offer.lead[$context.locale] }}
        </p>
        <Button
          :text="$t('links.bookOffer')"
          :link="$page.offer.url[$context.locale]"
          blank
        />
      </div>
      <g-image
        v-if="$page.offer.image"
        :src="
          $urlForImage($page.offer.image.image, $page.metadata.sanityOptions)
            .width(1200)
            .auto('format')
            .url()
        "
        :alt="$page.offer.image.alt[$context.locale]"
      />
    </header>
    <main class="page-content">
      <div class="body-content" v-if="$page.offer.body">
        <block-content
          :blocks="$page.offer.body._rawNo"
          v-if="$page.offer.body._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="$page.offer.body._rawEn"
          v-else-if="$page.offer.body._rawEn && $context.locale == 'en'"
          class="block-content"
        />
      </div>
    </main>
    <OfferGrid />
  </Layout>
</template>

<page-query>
query offer ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  offer: sanityOffer (id: $id) {
    title {
      no
      en
    }
    heading {
      no
      en
    }
    url {
      no
      en
    }
    slug {
      no {
        current
      }
      en {
        current
      }
    }
    image {
      image {
        asset {
          url
        }
      }
      alt {
        no
        en
      }
    }
    lead {
      no
      en
    }
    body {
      _rawNo
      _rawEn
    }
  }
}
</page-query>

<script>
import PageHeader from "~/components/PageHeader";
import Button from "~/components/buttons/Button";
import BlockContent from "~/components/tools/BlockContent";
import OfferGrid from "~/components/OfferGrid";

export default {
  components: {
    PageHeader,
    Button,
    BlockContent,
    OfferGrid,
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  color: var(--color-text);
  padding: var(--spacing-sitepadding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: calc(var(--spacing-sitepadding) * 1.5);
  min-height: 40vh;
  max-width: 70rem;
  margin: 0 auto;
  img {
    border-radius: var(--border-radius);
  }
}
.page-title {
  display: none;
}
@media (max-width: 1000px) {
  .page-header {
    grid-template-columns: 1fr;
    min-height: 0;
    text-align: center;

    img {
      order: 1;
    }
    .text {
      order: 2;
    }
    .lead {
      margin: 0 auto 2rem;
    }
  }
  .page-title {
    display: block;
  }
}
</style>
