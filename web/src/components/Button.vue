<template>
  <div>
    <button class="button" v-if="action" @click="action">{{ text }}</button>
    <a class="button" v-else-if="link && blank" :href="link" target="_blank">{{
      text
    }}</a>
    <a class="button" v-else-if="link" :href="link">{{ text }}</a>
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
    blank: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  background: var(--color-text);
  color: var(--color-background);
  outline: none;
  border: none;
  font-family: inherit;
  font-size: var(--font-size-m);
  padding: 0.8rem 2rem;
  border-radius: var(--border-radius-l);
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition-hover);
  &:hover {
    background: var(--color-hover);
  }
}
</style>
