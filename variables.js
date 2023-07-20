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
export const siteDetailsQuery = `
    query {
      siteDetail {
        data {
          attributes {
            name
            tagline
          }
        }
      }
    }
`;
