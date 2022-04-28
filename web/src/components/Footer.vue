<template>
  <footer class="site-footer">
    <!--<div class="logo-wrapper">
      <g-link :to="$tp('/')" class="logo"><Logo /></g-link>
    </div>-->
    <ul class="contact-list">
      <li>
        <h2>{{ $t("headings.contact") }}</h2>
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
    <ul class="contact-list">
      <li>
        <h2>{{ $t("headings.address") }}</h2>
      </li>
      <li v-if="$static.contact.address">
        <block-content
          :blocks="$static.contact.address._rawNo"
          v-if="$static.contact.address._rawNo && $context.locale == 'no'"
        />
        <block-content
          :blocks="$static.contact.address._rawEn"
          v-else-if="$static.contact.address._rawEn && $context.locale == 'en'"
        />
      </li>
    </ul>
    <div class="giftcard">
      <h2>{{ $t("headings.giftcard") }}</h2>
      <Button type="giftcard" />
    </div>
    <ul class="footer-logos">
      <li><img src="/assets/images/footerlogos/dehistoriske.svg" /></li>
      <li><img src="/assets/images/footerlogos/logo-en.png" /></li>
      <li><img src="/assets/images/footerlogos/mf-logo.svg" /></li>
    </ul>
    <ul class="footer-logos footer-logos--visa">
      <li><img src="/assets/images/footerlogos/VISA__Verified_by.png" /></li>
      <li><img src="/assets/images/footerlogos/MasterCard.png" /></li>
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
import Button from "~/components/buttons/Button";
import BlockContent from "~/components/tools/BlockContent";

export default {
  components: {
    Logo,
    Button,
    BlockContent,
  },
};
</script>

<style lang="scss" scoped>
.site-footer {
  background: var(--color-blue-dark);
  color: var(--color-white);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: calc(var(--spacing-sitepadding) * 2);
  row-gap: var(--spacing-sitepadding);
  padding: var(--spacing-sitepadding) var(--spacing-sitepadding) 0;

  .logo-wrapper {
    grid-column: 1 / -1;
    margin-bottom: 3rem;
  }
  .logo {
    display: inline-block;
    width: 20rem;
  }
  a {
    color: inherit;
  }
  h2 {
    font-size: var(--font-size-l);
    color: currentColor;
  }
}
.contact-list {
  list-style: none;
  margin: 0 0 3rem;
  padding: 0;
}
.giftcard {
  grid-column: span 2;
  margin-bottom: 12rem;
}
.footer-logos {
  list-style: none;
  margin: 0;
  padding: 0;
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 2rem;

  li {
    height: 3rem;
    img {
      height: 100%;
      object-fit: contain;
      filter: grayscale(0.3);
    }
  }
}
.footer-logos--visa {
  background: #000;
  margin: 0 calc(var(--spacing-sitepadding) * -1);
  padding: calc(var(--spacing-sitepadding) / 4) var(--spacing-sitepadding);
  justify-content: flex-end;

  li {
    height: 1.2rem;
    img {
      max-height: 100%;
      opacity: 0.8;
    }
  }
}

@media (max-width: 800px) {
  .site-footer {
    grid-template-columns: 1fr;
  }
  .giftcard {
    grid-column: span 1;
  }
}
</style>
