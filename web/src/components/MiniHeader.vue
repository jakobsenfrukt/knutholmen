<template>
  <header class="site-header-wrapper">
    <div class="site-header mini" :class="{ inview: isInView }">
      <g-link class="logo" :to="$tp('/')"><Logo icon/></g-link>
      <nav class="nav nav-main">
        <MainMenu />
      </nav>
      <Totop />

      <div class="nav-mobile-wrapper" :class="{ open: showMenu }">
        <div class="menu-toggle-wrapper">
          <div role="button" @click="toggleMenu" class="menu-toggle">
            <span class="menu-toggle-text">{{ $t("menu.menu") }}</span
            ><MenuIcon class="menu-toggle-icon" :open="showMenu" />
          </div>
        </div>
        <nav class="nav-mobile">
          <MainMenu />
          <LocaleSwitcher class="language" />
        </nav>
      </div>
    </div>

    <IntersectionObserver
      id="observer"
      class="observer"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserver>
  </header>
</template>

<script>
import Logo from "@/components/Logo.vue";
import MainMenu from "@/components/MainMenu.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import IntersectionObserver from "~/components/tools/IntersectionObserver";
import LocaleSwitcher from "~/components/tools/LocaleSwitcher";
import Totop from "~/components/tools/Totop";

export default {
  components: {
    Logo,
    MainMenu,
    MenuIcon,
    IntersectionObserver,
    LocaleSwitcher,
    Totop,
  },
  data() {
    return {
      isInView: false,
      showMenu: false,
    };
  },
  methods: {
    toAnchor(anchor) {
      document.querySelector(anchor).scrollIntoView({
        behavior: "smooth",
      });
      // close menu if on mobile
      this.showMenu = false;
    },
    onEnterViewport(value) {
      this.isInView = value;
      this.showMenu = false;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
      /*if (this.showMenu) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }*/
    },
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(var(--spacing-sitepadding) / 2);
  position: fixed;
  z-index: 1000;
  width: 100%;
  color: var(--color-background);
  background: var(--color-text);
  transform: translateY(-100%);
  opacity: 0;
  transition: color 0.5s linear, background-color 0.5s linear,
    transform 0.3s ease, opacity 0.3s ease;
  //animation: fadeDown 1s ease forwards;

  &.inview {
    transform: translateY(0);
    opacity: 1;
    transition: color 0.5s linear, background-color 0.5s linear,
      transform 0.5s ease, opacity 0.5s ease;
  }

  &-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: 100;
  }
}

.logo {
  width: 1.5rem;
  position: absolute;
  top: calc(var(--spacing-sitepadding) / 4);
  left: calc(var(--spacing-sitepadding) / 4);
  z-index: 1000;
}

.observer {
  position: absolute;
  top: 110vh;
  height: 100%;
}

.nav {
  position: relative;
  z-index: 10;
  &-main {
    display: flex;
    align-items: center;
    padding: 0 2rem;
  }
}

@media (max-width: 1000px) {
  .nav {
    padding: 1rem 2rem;
    &-main {
      .nav-link {
        display: none;
      }
    }
  }
}

.nav-mobile {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  background: var(--color-text);
  color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  display: none;

  &-wrapper {
    height: 2rem;
    &.open {
      height: 100vh;
    }
  }
}
.menu-toggle {
  position: fixed;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  min-width: 5rem;
  top: calc(var(--spacing-sitepadding) / 2);
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

@media (max-width: 1000px) {
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
  .open {
    color: var(--color-background);
    .nav-mobile {
      opacity: 1;
      transform: translateY(0);
      animation: menuEnter 0.3s linear forwards;

      &__link {
        animation: menuItemEnter 0.3s linear forwards;
      }
    }
  }
  .menu-toggle {
    display: flex;
  }
  .language {
    position: absolute;
    top: auto;
    bottom: calc(var(--spacing-sitepadding) * 2);
    right: var(--spacing-sitepadding);
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
