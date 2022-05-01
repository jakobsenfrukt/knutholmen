<template>
  <Layout class="offers">
    <header class="page-header">
      <div class="grid">
        <div class="text text-top">
          <span class="page-title">{{
            $page.offer.title[$context.locale]
          }}</span>
          <h1 class="page-heading">
            {{ $page.offer.heading[$context.locale] }}
          </h1>
          <div class="button-wrapper">
            <Button
              :text="$t('links.bookOffer')"
              :link="$page.offer.url[$context.locale]"
              blank
            />
          </div>
        </div>
        <div class="image">
          <g-image
            v-if="$page.offer.image"
            :src="
              $urlForImage(
                $page.offer.image.image,
                $page.metadata.sanityOptions
              )
                .width(1200)
                .auto('format')
                .url()
            "
            :alt="$page.offer.image.alt[$context.locale]"
          />
        </div>
        <div class="text text-bottom">
          <p class="lead" v-if="$page.offer.lead">
            {{ $page.offer.lead[$context.locale] }}
          </p>
        </div>
      </div>
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

      <OfferGrid
        :heading="$t('headings.moreOffers')"
        :limit="3"
        :current="$page.offer._id"
      />
    </main>
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
    _id
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
  margin: 0;
  background: linear-gradient(
    180deg,
    var(--color-blue-dark) 50%,
    var(--color-white) 50%
  );
  .grid {
    width: 100%;
    max-width: 70em;
    padding: 0 calc(var(--spacing-sitepadding) * 2);
    margin: 0 auto;
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
  margin: 3rem auto;
}
.page-title,
.page-heading {
  color: var(--color-white);
}
.page-title {
  display: block;
  margin: 3rem auto -1rem;
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
    margin-top: 0;
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
