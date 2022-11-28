// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const clientConfig = require("./client-config");

const { pathToPage } = require("./src/utils/localizedUrl");

const moment = require("moment");

module.exports = function(api) {
  api.loadSource((store) => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    store.addMetadata("sanityOptions", clientConfig.sanity);
  });

  api.createSchema(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type SanityDocument implements Node @infer {
        id: ID!
      }
    `);
  });

  api.createPages(async ({ createPage, graphql }) => {
    const response = await graphql(`
      query {
        rooms: allSanityRoom {
          edges {
            node {
              _type
              id
              slug {
                no {
                  current
                }
                en {
                  current
                }
              }
            }
          }
        }
        offers: allSanityOffer {
          edges {
            node {
              _type
              id
              slug {
                no {
                  current
                }
                en {
                  current
                }
              }
            }
          }
        }
        activities: allSanityActivity {
          edges {
            node {
              _type
              id
              slug {
                no {
                  current
                }
                en {
                  current
                }
              }
            }
          }
        }
        pages: allSanityPage{
          edges {
            node {
              _type
              id
              slug {
                no {
                  current
                }
                en {
                  current
                }
              }
            }
          }
        }
        articles: allSanityArticle {
          edges {
            node {
              _type
              id
              slug {
                current
              }
              locale
              publishedAt
            }
          }
        }
      }
    `);

    if (response.errors) {
      throw response.errors[0];
    }

    const createPageWithLocale = ({
      page,
      locale,
      path,
      translatedPaths,
      component,
    }) => {
      createPage({
        path: path,
        component: component,
        context: {
          id: page.id,
          locale: locale,
        },
        route: {
          meta: {
            locale: locale,
            pageType: page._type,
            translatedPaths: translatedPaths,
          },
        },
      });
    };

    const makePath = ({ page, locale, slug }) => {
      const typeAndSlug = pathToPage(page, locale);
      if (locale === "no") {
        return typeAndSlug;
      }
      return `/${locale}${typeAndSlug}`;
    };

    const handlePageWithLocalizedSlugs = (page, component) => {
      const slugEn = page.slug.en.current;
      const slugNo = page.slug.no.current;
      Object.entries(page.slug).forEach(([locale, slug]) => {
        createPageWithLocale({
          page: page,
          locale: locale,
          path: makePath({ page, locale, slug: slug.current }),
          translatedPaths: {
            no: makePath({ page, locale: "no", slug: slugNo }),
            en: makePath({ page, locale: "en", slug: slugEn }),
          },
          component: component,
        });
      });
    };

    const handleEdges = ({ edges, component }) => {
      edges
        .map((edge) => edge.node)
        .filter((node) => node.slug)
        .forEach((page) => handlePageWithLocalizedSlugs(page, component));
    };

    // Rooms
    handleEdges({
      edges: response.data.rooms.edges,
      component: "./src/templates/SanityRoom.vue",
    });

    // Offers
    handleEdges({
      edges: response.data.offers.edges,
      component: "./src/templates/SanityOffer.vue",
    });

    // Activities
    handleEdges({
      edges: response.data.activities.edges,
      component: "./src/templates/SanityActivity.vue",
    });

    // Pages
    handleEdges({
      edges: response.data.pages.edges,
      component: "./src/templates/SanityPage.vue",
    });

    // Articles
    const articles = response.data.articles.edges;
    const today = moment()
      .startOf("day")
      .toDate();
    articles
      .map((edge) => edge.node)
      .filter((node) => node.slug?.current)
      .filter((node) => {
        if (!node.publishedAt) {
          return false;
        }
        const publishDate = moment(node.publishedAt)
          .startOf("day")
          .toDate();
        return publishDate <= today;
      })
      .forEach((page) =>
        createPageWithLocale({
          page: page,
          locale: page.locale,
          path: makePath({
            page,
            locale: page.locale,
            slug: page.slug.current,
          }),
          component: "./src/templates/SanityArticle.vue",
        })
      );
  });
};
