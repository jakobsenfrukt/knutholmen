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
      console.log(this.$route)
      const translatedPaths = this.$route.meta?.translatedPaths
      if (translatedPaths) {
        this.$router.push({
          path: translatedPaths[this.currentLocale],
        });
      } else {
        this.$router.push({
          path: this.$tp(this.$route.path, this.currentLocale, true),
        });
      }

    },
  },
};
</script>

<style lang="scss" scoped>
.locale-switcher {
  display: flex;
}
.locale-button {
  outline: none;
  border: none;
  background: none;
  margin: 0;
  width: 2.6em;
  text-align: center;
  display: inline-block;
  font-family: inherit;
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  color: var(--color-text);
  border: 1px solid var(--color-text);
  cursor: pointer;
  &:hover {
    background: var(--color-highlight);
  }
  &.active {
    color: var(--color-background);
    background: var(--color-text);
  }
  &:first-of-type {
    padding: 0.2em 0.2em 0.2em 0.4em;
    border-top-left-radius: var(--border-radius-l);
    border-bottom-left-radius: var(--border-radius-l);
  }
  &:last-of-type {
    padding: 0.2em 0.4em 0.2em 0.2em;
    border-top-right-radius: var(--border-radius-l);
    border-bottom-right-radius: var(--border-radius-l);
  }
}
</style>
