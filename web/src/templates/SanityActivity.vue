<template>
  <Layout class="activities">
    <PageHeader
      :title="$page.activityPage.pageHeader.title[$context.locale]"
      :heading="$page.activity.title[$context.locale]"
      :image="$page.activity.image"
      :lead="$page.activity.lead[$context.locale]"
      button="bookActivity"
    />
    <main class="page-content">
      <div class="body-content" v-if="$page.activity.body">
        <block-content
          :blocks="$page.activity.body._rawNo"
          v-if="$page.activity.body._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="$page.activity.body._rawEn"
          v-else-if="$page.activity.body._rawEn && $context.locale == 'en'"
          class="block-content"
        />
      </div>
    </main>
    <ActivityGrid
      :heading="$t('headings.moreActivities')"
      :limit="3"
      :current="$page.activity._id"
    />
    <OfferGrid showIntro :limit="3" />
  </Layout>
</template>

<page-query>
query activity ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  activity: sanityActivity (id: $id) {
    _id
    title {
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
  activityPage: sanityActivityPage(id: "activityPage") {
    pageHeader {
      title {
        no
        en
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
import PageHeader from "~/components/PageHeaderSecondary";
import BlockContent from "~/components/tools/BlockContent";
import ActivityGrid from "~/components/ActivityGrid";
import OfferGrid from "~/components/OfferGrid";

export default {
  components: {
    PageHeader,
    BlockContent,
    ActivityGrid,
    OfferGrid,
  },
  metaInfo() {
    return {
      title: this.$page.activity.title[this.$context.locale],
      meta: [
        {
          name: "description",
          content: this.$page.activity.lead
            ? this.$page.activity.lead[this.$context.locale]
            : this.$page.general.seo.description[this.$context.locale],
        },
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.activity.image
            ? this.$page.activity.image.image.asset.url
            : this.$page.general.seo.ogimg.asset.url,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
