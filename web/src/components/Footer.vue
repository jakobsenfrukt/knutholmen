<template>
  <footer class="site-footer">
    <div class="footer-item footer-cta footer-cta--booking">
      <h2>
        <span>{{ $t("headings.bookStay") }}</span>
      </h2>
      <Booker class="booker" />
    </div>
    <div class="footer-item footer-info">
      <ul class="contact-list">
        <li>
          <h2>
            <span>{{ $t("headings.contact") }}</span>
          </h2>
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
          <h2>
            <span>{{ $t("headings.address") }}</span>
          </h2>
        </li>
        <li v-if="$static.contact.address">
          <block-content
            :blocks="$static.contact.address._rawNo"
            v-if="$static.contact.address._rawNo && $context.locale == 'no'"
          />
          <block-content
            :blocks="$static.contact.address._rawEn"
            v-else-if="
              $static.contact.address._rawEn && $context.locale == 'en'
            "
          />
        </li>
      </ul>
      <div class="giftcard">
        <h2>
          <span>{{ $t("headings.giftcard") }}</span>
        </h2>
        <Button type="giftcard" />
      </div>
      <!--<div class="feedback">
        <h3>Tilbakemeldingar</h3>
        <p>
          Vi set pris på alle tilbakemeldingar, og er svært takksame for at du
          legg igjen ei omtale på
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g3218398-d3247397-Reviews-Knutholmen-Kalvag_Bremanger_Municipality_Sogn_og_Fjordane_Western_Norway.html?m=19905"
            target="_blank"
            >TripAdvisor</a
          >.
        </p>
      </div>-->
      <ul class="footer-item footer-logos footer-logos--friends">
        <li>
          <a href="https://www.dehistoriske.no/"
            ><img src="/assets/images/footerlogos/dehistoriske.svg"/></a
          ><br />
          <a href="https://www.dehistoriske.no/gavekort">{{
            $t("links.giftcardExternal")
          }}</a>
        </li>
        <li>
          <a href="https://www.nordfjord.no/"
            ><img src="/assets/images/footerlogos/logo-en.png"
          /></a>
        </li>
        <li><img src="/assets/images/footerlogos/mf-logo.svg" /></li>
      </ul>
    </div>
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
import Booker from "~/components/Booker";
import BlockContent from "~/components/tools/BlockContent";

export default {
  components: {
    Logo,
    Button,
    Booker,
    BlockContent,
  },
};
</script>

<style lang="scss" scoped>
.site-footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: calc(var(--spacing-sitepadding) * 2);

  .footer-cta {
    grid-column: 1 / -1;
    text-align: center;
    padding: calc(var(--spacing-sitepadding) * 2) var(--spacing-sitepadding);
    background: var(--color-offwhite);
    //margin-bottom: -1rem;
    overflow: visible;
    position: relative;

    h2 {
      font-size: var(--font-size-s);
      font-style: italic;
      text-transform: uppercase;
      max-width: 20rem;
      margin: 0 auto 2rem;
      position: relative;
      &:before {
        content: " ";
        display: block;
        height: 1px;
        width: 100%;
        background-color: var(--color-text);
        opacity: 0.6;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
      }
      span {
        display: inline-block;
        position: relative;
        z-index: 10;
        background-color: var(--color-offwhite);
        padding: 0 1rem;
      }
    }
  }
  .footer-info {
    grid-column: 1 / -1;
    background: var(--color-blue-dark);
    color: var(--color-white);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: calc(var(--spacing-sitepadding) * 2);
    row-gap: var(--spacing-sitepadding);
    padding: calc(var(--spacing-sitepadding) * 2) var(--spacing-sitepadding) 0;
  }
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
  h1,
  h2,
  h3,
  h4 {
    color: currentColor;
  }
  h2 {
    font-size: var(--font-size-xl);
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

  li {
    img {
      height: 3rem;
      object-fit: contain;
      filter: grayscale(0.3);
    }
  }
  p {
    margin-bottom: 0;
  }
}
.footer-logos--friends {
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--spacing-sitepadding);
  margin-top: 6rem;
  li {
    font-size: var(--font-size-xs);
    img {
      height: 3rem;
      object-fit: contain;
    }
    &:last-of-type {
      grid-column: span 2;
      text-align: right;
    }
  }
}

@media (max-width: 1200px) {
  .site-footer,
  .site-footer .footer-info,
  .footer-logos--friends {
    grid-template-columns: 1fr 1fr;
  }
  .giftcard {
    margin-bottom: 3rem;
  }
  .footer-logos--friends {
    grid-template-columns: 1fr 1fr;
    li {
      &:first-of-type {
        grid-column: span 2;
        margin-bottom: 2rem;
      }
      &:last-of-type {
        grid-column: span 1;
        text-align: right;
      }
    }
  }
}

@media (max-width: 400px) {
  .site-footer,
  .site-footer .footer-info {
    grid-template-columns: 1fr;
  }
  .contact-list {
    margin-bottom: 2rem;
  }
  .giftcard {
    grid-column: span 1;
    margin-bottom: 3rem;
  }
}
</style>
