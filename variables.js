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
            title
            featuredImage {
              data {
                attributes {
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
            seoTagline
          }
        }
      }
    }
`;
export const contactDetailsQuery = `
    query {
      siteDetail {
        data {
          attributes {
            socials {
              type
              link
            }
            contactDetails {
              type
              detail
            }
          }
        }
      }
    }
`;
export const pagesQuery = `
    query {
      pages {
        data {
          id
          attributes {
            title
            sections {
              title
              content
            }
            timeline {
              year
              title
              description
              button {
                label
                link
              }
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }  
    }
`;
export const ourTeamQuery = `
    query {
      ourTeams {
        data {
          id
          attributes {
            name
            category
            profilePicture {
              data {
                attributes {
                  url
                }
              }
            }
            role
            project
            about
          }
        }
      }
    }
`;
export const programmesCollectionQuery = `
    query {
      programmes {
        data {
          id
          attributes {
            name
            featuredImage {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            excerpt
            focusAreas {
              data {
                id
                attributes {
                  title
                }
              }
            }
          }
        }
      }
    }
`;
export const focusAreasListQuery = `
    query {
        focusAreas {
            data {
                id
                attributes {
                    title
                }
            }
        }
    }
`;
export const programmesQuery = `
    query {
      programmes {
        data {
          id
          attributes {
            name
            featuredImage {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            gallery {
              data {
                attributes {
                  url
                  alternativeText
                  caption
                }
              }
            }
            description
            sections {
              title
              content
            }
            focusAreas {
              data {
                attributes {
                  title
                }
              }
            }
            resources {
              data {
                attributes {
                  name
                  featuredImage {
                    data {
                      attributes {
                        url 
                        alternativeText
                      }
                    }
                  }
                  excerpt
                }
              }
            }
            
          }
        }
      }
    }
`;
