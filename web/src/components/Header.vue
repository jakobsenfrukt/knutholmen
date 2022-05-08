<template>
  <header class="site-header" :class="{ inview: isInView }">
    <g-link class="logo" :to="$tp('/')"><Logo /></g-link>
    <nav class="nav nav-main">
      <MainMenu />
    </nav>
    <nav class="nav nav-cta">
      <ul>
        <li>
          <a
            :href="$static.general.bookRoom.url[$context.locale]"
            target="_blank"
            >{{ $static.general.bookRoom.buttonText[$context.locale] }}</a
          >
        </li>
        <li>
          <a
            :href="$static.general.giftcard.url[$context.locale]"
            target="_blank"
            >{{ $t("headings.giftcard") }}</a
          >
        </li>
      </ul>
    </nav>
    <LocaleSwitcher class="language language-main" />
    <div class="nav-mobile-wrapper" :class="{ open: showMenu }">
      <div role="button" @click="toggleMenu" class="menu-toggle">
        <span class="menu-toggle-text">{{ $t("menu.menu") }}</span
        ><MenuIcon class="menu-toggle-icon" :open="showMenu" />
      </div>
      <nav class="nav-mobile">
        <MainMenu />
        <nav class="nav nav-cta nav-cta-mobile">
          <ul>
            <li>
              <a
                :href="$static.general.bookRoom.url[$context.locale]"
                target="_blank"
                >{{ $static.general.bookRoom.buttonText[$context.locale] }}</a
              >
            </li>
            <li>
              <a
                :href="$static.general.giftcard.url[$context.locale]"
                target="_blank"
                >{{ $t("headings.giftcard") }}</a
              >
            </li>
          </ul>
        </nav>
        <LocaleSwitcher class="language" />
      </nav>
    </div>

    <IntersectionObserver
      id="observer"
      class="observer"
      @on-enter-viewport="onEnterViewport"
    ></IntersectionObserver>
  </header>
</template>

<static-query>
query {
  general: sanityGeneral(id: "general") {
    bookRoom {
      buttonText {
        no
        en
      }
      url {
        no
        en
      }
    }
    giftcard {
      buttonText {
        no
        en
      }
      url {
        no
        en
      }
    }
  }
}
</static-query>

<script>
import Logo from "@/components/Logo";
import LocaleSwitcher from "@/components/tools/LocaleSwitcher";
import ToggleTheme from "@/components/tools/ToggleTheme";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import MainMenu from "@/components/MainMenu";
import IntersectionObserver from "~/components/tools/IntersectionObserver";

export default {
  components: {
    Logo,
    LocaleSwitcher,
    ToggleTheme,
    IntersectionObserver,
    MenuIcon,
    MainMenu,
  },
  data() {
    return {
      isInView: false,
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
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
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  width: 100%;
  padding: var(--spacing-sitepadding);
  text-align: center;
  color: var(--color-white);
  background: var(--color-blue-dark);

  a {
    color: inherit;
    text-decoration: none;
  }
}
.logo {
  width: 20rem;
  margin: 0.5rem auto 1rem;
}
.nav-main {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.6rem 0;
  position: relative;
}
.nav-cta {
  position: absolute;
  top: calc(var(--spacing-sitepadding) * 0.75);
  left: var(--spacing-sitepadding);
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;

    li {
      display: inline-block;
      font-family: inherit;
      font-size: var(--font-size-xs);
      //text-transform: uppercase;
      color: currentColor;
      margin-right: 1.5rem;

      a {
        text-decoration: underline;
        text-underline-offset: 2px;

        &:hover {
          color: var(--color-yellow);
        }
      }
    }
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
  background: var(--color-blue-dark);
  color: var(--color-white);
  display: flex;
  justify-content: center;
  flex-direction: column;

  &-wrapper {
    &.open {
      height: 100vh;
    }
  }
}
.menu-toggle {
  position: absolute;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.25rem;
  min-width: 5rem;
  top: calc(var(--spacing-sitepadding) - 0.3rem);
  right: 0;
  padding: 0 calc(var(--spacing-sitepadding) * 0.75);
  z-index: 1001;
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

.language {
  position: absolute;
  top: var(--spacing-sitepadding);
  right: var(--spacing-sitepadding);
}

@media (max-width: 1000px) {
  .logo {
    margin: 0;
    max-width: 15rem;
    position: relative;
    z-index: 1002;
  }
  .nav {
    &-main,
    &-cta {
      display: none;
    }
    &-mobile {
      display: none;
      opacity: 0;
      transform: translateY(-100%);
    }
  }
  .nav-mobile-wrapper {
    display: block;
  }
  .open {
    color: var(--color-white);
    .nav-mobile {
      display: flex;
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
  .language {
    top: auto;
    bottom: var(--spacing-sitepadding);
    right: var(--spacing-sitepadding);

    &-main {
      display: none;
    }
  }
  .nav-cta-mobile {
    display: block;
    top: auto;
    bottom: var(--spacing-sitepadding);
    left: var(--spacing-sitepadding);

    li a {
      font-size: var(--font-size-s);
    }
  }
}

@media (max-width: 400px) {
  .menu-toggle-text {
    display: none;
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

.observer {
  position: absolute;
  top: 110vh;
  height: 100%;
}
</style>
