const otherPath = (locale, path) => {
  return {
    route: {
      meta: {
        translatedPaths: {
          [locale]: path,
        },
      },
    },
  };
};

module.exports = {
  no: [
    {
      path: "/",
      component: "./src/pages/index.vue",
    },
    {
      path: "/om",
      component: "./src/pages/about.vue",
      ...otherPath("en", "/en/about")
    },
    {
      path: "/rom",
      component: "./src/pages/rooms.vue",
      ...otherPath("en", "/en/rooms")
    },
    {
      path: "/pakker",
      component: "./src/pages/offers.vue",
      ...otherPath("en", "/en/offers")
    },
    {
      path: "/aktiviteter",
      component: "./src/pages/activities.vue",
      ...otherPath("en", "/en/activities")
    },
    {
      path: "/restaurant",
      component: "./src/pages/restaurant.vue",
      ...otherPath("en", "/en/restaurant")
    },
    {
      path: "/moter",
      component: "./src/pages/meetings.vue",
      ...otherPath("en", "/en/meetings")
    },
    {
      path: "/gjesteinfo",
      component: "./src/pages/guestinfo.vue",
      ...otherPath("en", "/en/guestinfo")
    },
  ],
  en: [
    {
      path: "/en",
      component: "./src/pages/index.vue",
    },
    {
      path: "/en/about",
      component: "./src/pages/about.vue",
      ...otherPath("no", "/om")
    },
    {
      path: "/en/rooms",
      component: "./src/pages/rooms.vue",
      ...otherPath("no", "/rom")
    },
    {
      path: "/en/offers",
      component: "./src/pages/offers.vue",
      ...otherPath("no", "/pakker")
    },
    {
      path: "/en/activities",
      component: "./src/pages/activities.vue",
      ...otherPath("no", "/aktiviteter")
    },
    {
      path: "/en/restaurant",
      component: "./src/pages/restaurant.vue",
      ...otherPath("no", "/restaurant")
    },
    {
      path: "/en/meetings",
      component: "./src/pages/meetings.vue",
      ...otherPath("no", "/moter")
    },
    {
      path: "/en/guestinfo",
      component: "./src/pages/guestinfo.vue",
      ...otherPath("no", "/gjesteinfo")
    },
  ],
};
