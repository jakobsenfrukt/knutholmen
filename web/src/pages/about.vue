<template>
  <Layout>
    <PageHeader :pageHeader="$page.about.pageHeader" />
    <main class="page-content about-content">
      <div class="body-content" v-if="$page.about.tempbody">
        <block-content
          :blocks="$page.about.tempbody._rawNo"
          v-if="$page.about.tempbody._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="$page.about.tempbody._rawEn"
          v-else-if="$page.about.tempbody._rawEn && $context.locale == 'en'"
          class="block-content"
        />
      </div>
    </main>
  </Layout>
</template>

<page-query>
query {
  about: sanityAbout(id: "about") {
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
  metaInfo: {
    title: "About",
  },
};
</script>

<style lang="scss" scoped></style>
