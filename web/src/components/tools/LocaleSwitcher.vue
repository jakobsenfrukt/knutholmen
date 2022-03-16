<template>
  <div class="locale-switcher">
    <!--<select v-model="currentLocale" @change="localeChanged">
      <option v-for="locale in availableLocales" :key="locale" :value="locale">{{ locale }}</option>
    </select>-->
    <button
      v-for="locale in availableLocales"
      :key="locale"
      @click="changeLocale(locale)"
      class="locale-button"
      :class="currentLocale === locale ? 'active' : ''"
    >
      {{ locale }}
    </button>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data: function() {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales,
    };
  },
  methods: {
    /*localeChanged() {
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLocale, true),
      });
    },*/
    changeLocale(locale) {
      this.currentLocale = locale;
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLocale, true),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.locale-switcher {
  display: flex;
  gap: 1em;
}
.locale-button {
  outline: none;
  border: none;
  background: none;
  padding: 0;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  color: var(--color-text);
  cursor: pointer;
  &:hover {
    color: var(--color-highlight);
  }
  &.active {
    color: var(--color-highlight);
  }
}
</style>
