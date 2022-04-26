<template>
  <Layout>
    <PageHeader :pageHeader="$page.guestinfo.pageHeader" />
    <main class="page-content guestinfo-content">
      <div class="body-content" v-if="$page.guestinfo.tempbody">
        <block-content
          :blocks="$page.guestinfo.tempbody._rawNo"
          v-if="$page.guestinfo.tempbody._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="$page.guestinfo.tempbody._rawEn"
          v-else-if="$page.guestinfo.tempbody._rawEn && $context.locale == 'en'"
          class="block-content"
        />
      </div>
    </main>
  </Layout>
</template>

<page-query>
query {
  guestinfo: sanityGuestinfo(id: "guestinfo") {
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

export default {
  components: {
    BlockContent,
    PageHeader,
  },
  metaInfo() {
    return {
      title: this.$page.guestinfo.pageHeader.title[this.$context.locale],
    };
  },
};
</script>

<style lang="scss" scoped></style>
