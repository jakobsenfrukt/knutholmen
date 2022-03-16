<template>
  <footer class="site-footer">
    <div class="logo-wrapper">
      <g-link :to="$tp('/')" class="logo"><Logo /></g-link>
    </div>
    <ul class="contact-list">
      <li v-if="$static.contact._rawAddress">
        <block-content
          :blocks="$static.contact._rawAddress"
          v-if="$static.contact._rawAddress"
        />
      </li>
      <li v-if="$static.contact.email">
        <a
          :href="`https://instagram.com/${$static.contact.email}`"
          target="_blank"
          >{{ $static.contact.email }}</a
        >
      </li>
      <li v-if="$static.contact.phone">
        <a :href="`phone:${$static.contact.phone}`" target="_blank">{{
          $static.contact.phone
        }}</a>
      </li>
      <li v-if="$static.contact.facebook">
        <a
          :href="`https://facebook.com/${$static.contact.facebook}`"
          target="_blank"
          >Facebook</a
        >
      </li>
    </ul>
  </footer>
</template>

<static-query>
query {
  contact: sanityContact (id: "contact") {
    email
    phone
    facebook
    _rawAddress
  }
}
</static-query>

<script>
import Logo from "~/components/Logo";
import BlockContent from "~/components/tools/BlockContent";

export default {
  components: {
    Logo,
    BlockContent,
  },
};
</script>

<style lang="scss" scoped>
.site-footer {
  background: var(--color-text);
  color: var(--color-background);
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(var(--spacing-sitepadding) * 2);
  padding: var(--spacing-sitepadding);

  .logo-wrapper {
    grid-column: 1 / -1;
  }
  .logo {
    display: inline-block;
  }
  a {
    color: inherit;
  }
}
.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (max-width: 1000px) {
  .site-footer {
    grid-template-columns: 1fr;
  }
}
</style>
