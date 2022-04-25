const slugByLocale = (page, locale) => page.slug2[locale].current;

const pathToPage = (page, locale) => {
  const slug = slugByLocale(page, locale);
  const type = {
    no: {
      room: "rom",
      offer: "aktiviteter",
    },
    en: {
      room: "rooms",
      offer: "activities",
    },
  }[locale][page._type];
  return `/${type}/${slug}`;
};

module.exports = { pathToPage, slugByLocale };
