<template>
  <ul class="main-menu">
    <li>
      <g-link
        class="nav__link"
        :to="$tp($t('slug.rooms'))"
        :title="$t('menu.rooms')"
        ><span>{{ $t("menu.rooms") }}</span></g-link
      >
    </li>
    <li>
      <g-link
        class="nav__link"
        :to="$tp($t('slug.activities'))"
        :title="$t('menu.activities')"
        ><span>{{ $t("menu.activities") }}</span></g-link
      >
    </li>
    <li>
      <g-link
        class="nav__link"
        :to="$tp($t('slug.restaurant'))"
        :title="$t('menu.restaurant')"
        ><span>{{ $t("menu.restaurant") }}</span></g-link
      >
    </li>
    <li>
      <g-link
        class="nav__link"
        :to="$tp($t('slug.meetings'))"
        :title="$t('menu.meetings')"
        ><span>{{ $t("menu.meetings") }}</span></g-link
      >
    </li>
    <li>
      <g-link
        class="nav__link"
        :to="$tp($t('slug.guestharbor'))"
        :title="$t('menu.guestharbor')"
        ><span>{{ $t("menu.guestharbor") }}</span></g-link
      >
    </li>
    <li>
      <g-link
        class="nav__link"
        :to="$tp($t('slug.about'))"
        :title="$t('menu.about')"
        ><span>{{ $t("menu.about") }}</span></g-link
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.main-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  li {
    display: block;
    z-index: 2;
  }
  &:before {
    content: " ";
    height: 1px;
    width: calc(100% - var(--spacing-sitepadding) * 2);
    display: block;
    background-color: var(--color-white);
    position: absolute;
    z-index: 1;
  }
}
.nav__link {
  display: block;
  color: inherit;
  text-decoration: none;
  position: relative;

  font-family: var(--font-sans);
  font-style: italic;
  background: var(--color-blue-dark);
  padding: 0 0.5rem;

  span {
    position: relative;
    z-index: 10;
  }

  &:before {
    display: block;
    content: attr(title);
    font-style: italic;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  &.active,
  &:hover {
    color: var(--color-active);
  }
}

@media (max-width: 1000px) {
  .main-menu {
    flex-direction: column;
  }
  .nav__link {
    font-size: var(--font-size-m);
  }
}
</style>
