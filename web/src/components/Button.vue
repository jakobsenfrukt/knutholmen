<template>
  <div>
    <button class="button" v-if="action">{{ text }}</button>
    <a class="button" v-else-if="link">{{ text }}</a>
    <button class="button" v-else>{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Klikk her",
    },
    action: {
      type: Function,
      default: undefined,
    },
    link: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  background: var(--color-text);
  color: var(--color-background);
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  border-radius: var(--border-radius-l);
}
</style>
