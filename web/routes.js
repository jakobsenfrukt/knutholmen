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
  ],
};
