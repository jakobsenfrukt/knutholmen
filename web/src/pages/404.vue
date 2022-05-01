<template>
  <Layout>
    <section class="page-content">
      <h1>{{ $t("error.heading") }}</h1>
      <p class="lead">
        {{ $t("error.body") }}
      </p>
      <p>
        &rarr; <a href="/">{{ $t("error.link") }}</a>
      </p>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "404",
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  max-width: 50rem;
  margin: 2rem auto;
}
h1,
p,
.lead {
  margin: 1rem 0 2rem;
}
</style>
