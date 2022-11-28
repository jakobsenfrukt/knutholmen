const slugByLocale = (page, locale) => page.slug[locale].current;

const pathToPage = (page, locale) => {
  const slug = page.slug.current ?? slugByLocale(page, locale);
  const type = {
    no: {
      room: "rom",
      offer: "pakkar",
      activity: "aktivitetar",
      article: "aktuelt",
      page: "info"
    },
    en: {
      room: "rooms",
      offer: "offers",
      activity: "activities",
      article: "news",
      page: "info"
    },
  }[locale][page._type];
  return `/${type}/${slug}`;
};

module.exports = { pathToPage, slugByLocale };
