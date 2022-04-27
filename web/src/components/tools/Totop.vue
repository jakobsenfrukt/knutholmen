<template>
  <div class="totop">
    <button @click="toTop()" class="totop-button" :class="{ inview: isInView }">
      &uarr;
    </button>
    <IntersectionObserver
      id="totop"
      class="observer"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserver>
  </div>
</template>

<script>
import IntersectionObserver from "@/components/tools/IntersectionObserver.vue";

export default {
  components: {
    IntersectionObserver,
  },
  data() {
    return {
      isInView: false,
    };
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    onEnterViewport(value) {
      this.isInView = value;
      if (value === false) {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.totop {
  padding: calc(var(--spacing-sitepadding) / 2);
  text-align: right;

  position: absolute;
  top: -0.2rem;
  right: 0;

  &-button {
    font-size: var(--font-size-l);
    font-family: inherit;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    color: var(--color-white);

    opacity: 0;
    transition: opacity 0.3s linear;

    &.inview {
      opacity: 1;
    }
  }
}
.observer {
  position: absolute;
  bottom: 0;
  right: 0;
  height: calc(100% - 160vh);
}
@media (max-width: 1000px) {
  .totop {
    display: none;
  }
}
</style>
