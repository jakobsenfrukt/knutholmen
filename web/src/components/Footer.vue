<template>
  <footer class="site-footer">
    <div class="logo-wrapper">
      <g-link :to="$tp('/')" class="logo"><Logo /></g-link>
    </div>
    <ul class="contact-list">
      <li v-if="$static.contact.address">
        <block-content
          :blocks="$static.contact.address._rawNo"
          v-if="$static.contact.address._rawNo && $context.locale == 'no'"
          class="block-content"
        />
        <block-content
          :blocks="$static.contact.address._rawEn"
          v-else-if="$static.contact.address._rawEn && $context.locale == 'en'"
          class="block-content"
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
      <li>&nbsp;</li>
      <li v-if="$static.contact.facebook">
        <a
          :href="`https://facebook.com/${$static.contact.facebook}`"
          target="_blank"
          >Facebook</a
        >
      </li>
      <li v-if="$static.contact.instagram">
        <a
          :href="`https://instagram.com/${$static.contact.instagram}`"
          target="_blank"
          >Instagram</a
        >
      </li>
    </ul>
    <ul class="">
      <li><img src="/assets/images/footerlogos/logo-en.png" /></li>
      <li><img src="/assets/images/footerlogos/dehistoriske.svg" /></li>
    </ul>
    <ul class="footer-logos">
      <li><img src="/assets/images/footerlogos/VISA__Verified_by.png" /></li>
      <li><img src="/assets/images/footerlogos/MasterCard.png" /></li>
      <li><img src="/assets/images/footerlogos/logo-en.png" /></li>
      <li><img src="/assets/images/footerlogos/dehistoriske.svg" /></li>
    </ul>
  </footer>
</template>

<static-query>
query {
  contact: sanityContact (id: "contact") {
    email
    phone
    facebook
    instagram
    address {
      _rawNo
      _rawEn
    }
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
  background: var(--color-blue-dark);
  color: var(--color-yellow);
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
.footer-logos {
  list-style: none;
  margin: 0;
  padding: 0;
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 2rem;
  background: white;

  li {
    height: 2rem;
    img {
      max-height: 100%;
      opacity: 0.8;
      filter: grayscale(0.3);
    }
  }
}

@media (max-width: 1000px) {
  .site-footer {
    grid-template-columns: 1fr;
  }
}
</style>
