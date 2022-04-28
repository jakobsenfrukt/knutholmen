<template>
  <div class="layout">
    <Header />
    <MiniHeader />

    <transition name="fade" appear>
      <main class="site-main">
        <slot />
      </main>
    </transition>

    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "@/components/Header";
import MiniHeader from "~/components/MiniHeader.vue";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    MiniHeader,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.site-main {
  min-height: 60vh;
}
/*
.fade-enter-active {
  transition: opacity 0.6s;
}

.fade-enter {
  opacity: 0;
}
*/
</style>
