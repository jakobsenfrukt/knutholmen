const slugByLocale = (page, locale) => page.slug[locale].current;

const pathToPage = (page, locale) => {
  const slug = page.slug.current ?? slugByLocale(page, locale);
  const type = {
    no: {
      room: "rom",
      offer: "pakker",
      activity: "aktiviteter",
      article: "aktuelt",
    },
    en: {
      room: "rooms",
      offer: "offers",
      activity: "activities",
      article: "news",
    },
  }[locale][page._type];
  return `/${type}/${slug}`;
};

module.exports = { pathToPage, slugByLocale };
