<template>
  <div class="logo">
    <h1>Knutholmen</h1>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;

  h1 {
    margin: 0;
  }
}
</style>
