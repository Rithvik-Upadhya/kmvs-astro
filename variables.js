export const sw = 500;
export const mw = 900;
export const lw = 1300;
export const sbp = 499;
export const mbp = 899;
export const lbp = 1299;
export const strapi_url = import.meta.env.STRAPI_URL;
export const homepageQuery = `
    query {
      homepage {
        data {
          attributes {
            tagline
            metrics {
              metric
              description
            }
            featured {
              title
              subtitle
              description
              link
              image {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
            }
            timeline {
              year
              title
              description
              image {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
              button {
                label
                link
              }
            }
          }
        }
      }
    }
`;
export const focusAreasQuery = `
    query {
      focusAreas {
        data {
          id
          attributes {
            name
            featuredImage {
              data {
                attributes {
                  name
                  alternativeText
                  url
                }
              }
            }
            excerpt
            description
          }
        }
      }
    }
`;
export const headerQuery = `
    query {
      headerMenu {
        data {
          attributes {
            submenus {
              title
              menuItems {
                text
                link
              }
            }
          }
        }
      }
    }
`;
export const footerQuery = `
    query {
      footerMenu {
        data {
          attributes {
            submenus {
              title
              menuItems {
                text
                link
              }
            }
          }
        }
      }
    }
`;
