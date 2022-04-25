<template>
  <header class="site-header">
    <g-link class="logo" :to="$tp('/')"><Logo /></g-link>
    <nav class="nav nav-main">
      <ul>
        <li>
          <g-link class="nav__link" :to="$tp('/rooms')"
            ><span>{{ $t("menu.rooms") }}</span></g-link
          >
        </li>
        <li>
          <g-link class="nav__link" :to="$tp('/activities')"
            ><span>{{ $t("menu.activities") }}</span></g-link
          >
        </li>
        <li>
          <g-link class="nav__link" :to="$tp('/restaurant')"
            ><span>{{ $t("menu.restaurant") }}</span></g-link
          >
        </li>
        <li>
          <g-link class="nav__link" :to="$tp('/meetings')"
            ><span>{{ $t("menu.meetings") }}</span></g-link
          >
        </li>
        <li>
          <g-link class="nav__link" :to="$tp('/about')"
            ><span>{{ $t("menu.about") }}</span></g-link
          >
        </li>
        <li><LocaleSwitcher /></li>
        <!--<ToggleTheme />-->
      </ul>
    </nav>
    <div class="nav-mobile-wrapper" :class="{ open: showMenu }">
      <div role="button" @click="toggleMenu" class="menu-toggle">
        <span class="menu-toggle-text">{{ $t("menu.menu") }}</span
        ><MenuIcon class="menu-toggle-icon" :open="showMenu" />
      </div>
      <nav class="nav-mobile">
        <ul>
          <li>
            <g-link class="nav__link" :to="$tp('/rooms')"
              ><span>{{ $t("menu.rooms") }}</span></g-link
            >
          </li>
          <li>
            <g-link class="nav__link" :to="$tp('/activities')"
              ><span>{{ $t("menu.activities") }}</span></g-link
            >
          </li>
          <li>
            <g-link class="nav__link" :to="$tp('/restaurant')"
              ><span>{{ $t("menu.restaurant") }}</span></g-link
            >
          </li>
          <li>
            <g-link class="nav__link" :to="$tp('/meetings')"
              ><span>{{ $t("menu.meetings") }}</span></g-link
            >
          </li>
          <li>
            <g-link class="nav__link" :to="$tp('/about')"
              ><span>{{ $t("menu.about") }}</span></g-link
            >
          </li>
          <li><LocaleSwitcher /></li>
          <!--<ToggleTheme />-->
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/Logo";
import LocaleSwitcher from "@/components/tools/LocaleSwitcher";
import ToggleTheme from "@/components/tools/ToggleTheme";
import MenuIcon from "@/components/icons/MenuIcon.vue";

export default {
  components: {
    Logo,
    LocaleSwitcher,
    ToggleTheme,
    MenuIcon,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  width: 100%;
  padding: var(--spacing-sitepadding);
  background: var(--color-background);
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: inherit;
    text-decoration: none;
  }
}
.logo {
  grid-column: 1 / span 4;
}
.nav-main {
  grid-column: 5 / span 6;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      margin-left: 2rem;
    }
  }
}
.nav__link {
  display: block;
  color: inherit;
  text-decoration: none;
  position: relative;

  font-family: var(--font-sans);
  font-style: italic;
  text-transform: uppercase;

  span {
    position: relative;
    z-index: 10;
  }

  &.active--exact,
  &:hover {
    text-decoration: underline;
  }
}

.nav-mobile-wrapper {
  display: none;
}
.nav-mobile {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  background: var(--color-background);
  color: var(--color-text);
  display: flex;
  justify-content: center;
  flex-direction: column;
  ul {
    list-style: none;
    margin: 0;
    padding: var(--spacing-sitepadding);
  }

  .nav__link {
    margin-bottom: calc(var(--spacing-sitepadding) * 1.2);
    font-size: var(--font-size-xl);
    letter-spacing: var(--letter-spacing);
    cursor: pointer;

    &.active--exact,
    &:hover {
      &:before {
        display: none;
      }
    }
  }

  &-wrapper {
    &.open {
      height: 100vh;
    }
  }
}
.menu-toggle {
  position: fixed;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  min-width: 5rem;
  top: var(--spacing-sitepadding);
  right: 0.25rem;
  padding: 0 var(--spacing-sitepadding);
  z-index: 101;
  cursor: pointer;
  display: none;

  &-icon {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
  }
  &-text {
    display: block;
    font-family: var(--font-sans);
    font-style: italic;
    text-transform: uppercase;
    font-size: var(--font-size-m);
  }
}

@media (max-width: 1370px) {
  .nav {
    &-main {
      display: none;
    }
    &-mobile {
      display: flex;
      opacity: 0;
      transform: translateY(-100%);
    }
  }
  .nav-mobile-wrapper {
    display: block;
  }
  .open {
    color: var(--color-text);
    .nav-mobile {
      opacity: 1;
      transform: translateY(0);
      animation: menuEnter 0.3s linear forwards;

      &-link {
        animation: menuItemEnter 0.3s linear forwards;
      }
    }
  }
  .menu-toggle {
    display: flex;
  }
}

@keyframes menuEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes menuItemEnter {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
