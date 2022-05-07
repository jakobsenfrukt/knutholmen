<template>
  <Layout class="offers">
    <PageHeader :pageHeader="$page.offerPage.pageHeader" />
    <main class="page-content">
      <OfferGrid hideButton />
    </main>
  </Layout>
</template>

<page-query>
query {
  offerPage: sanityOfferPage(id: "offerPage") {
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
    }
  }
  general: sanityGeneral(id: "general") {
    seo {
      ogimg {
        asset {
          url
        }
      }
      description {
        no
        en
      }
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";
import PageHeader from "~/components/PageHeader";
import OfferGrid from "~/components/OfferGrid";

export default {
  components: {
    BlockContent,
    PageHeader,
    OfferGrid,
  },
  metaInfo() {
    return {
      title: this.$page.offerPage.pageHeader.title[this.$context.locale],
      meta: [
        {
          name: "description",
          content: this.$page.offerPage.pageHeader.lead[this.$context.locale]
            ? this.$page.offerPage.pageHeader.lead[this.$context.locale]
            : this.$page.general.seo.description[this.$context.locale],
        },
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.offerPage.pageHeader.image
            ? this.$page.offerPage.pageHeader.image.image.asset.url
            : this.$page.general.seo.ogimg.asset.url,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
