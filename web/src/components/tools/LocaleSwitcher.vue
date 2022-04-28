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
      <span>{{ locale }}</span>
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
      const translatedPaths = this.$route.meta?.translatedPaths;
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
  padding: 0;
  text-align: center;
  display: inline-block;
  font-family: inherit;
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  color: currentColor;
  cursor: pointer;
  &:hover,
  &.active {
    span {
      color: var(--color-yellow);
    }
  }
  &:first-of-type {
    &:after {
      content: "/";
      display: inline-block;
      margin: 0 0.5rem;
    }
  }
  &:last-of-type {
  }
}
</style>
