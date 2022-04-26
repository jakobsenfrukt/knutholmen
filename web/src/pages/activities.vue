<template>
  <Layout>
    <PageHeader
      :pageHeader="$page.activityPage.pageHeader"
      button="bookActivity"
    />
    <main class="page-content">
      <div class="body-content" v-if="$page.activityPage.tempbody">
        <block-content
          :blocks="$page.activityPage.tempbody._rawNo"
          v-if="$page.activityPage.tempbody._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="$page.activityPage.tempbody._rawEn"
          v-else-if="
            $page.activityPage.tempbody._rawEn && $context.locale == 'en'
          "
          class="block-content"
        />
      </div>
      <ActivityGrid />
    </main>
  </Layout>
</template>

<page-query>
query {
  activityPage: sanityActivityPage(id: "activityPage") {
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
    tempbody {
      _rawNo
      _rawEn
    }
  }
}
</page-query>

<script>
import BlockContent from "~/components/tools/BlockContent";
import PageHeader from "~/components/PageHeader";
import ActivityGrid from "~/components/ActivityGrid";

export default {
  components: {
    BlockContent,
    PageHeader,
    ActivityGrid,
  },
  metaInfo() {
    return {
      title: this.$page.activityPage.pageHeader.title[this.$context.locale],
    };
  },
};
</script>

<style lang="scss" scoped></style>
