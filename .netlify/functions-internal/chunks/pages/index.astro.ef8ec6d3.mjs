import 'kleur/colors';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import mime from 'mime';
import 'node:stream';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, F as Fragment, s as spreadAttributes, u as unescapeHTML, e as renderSlot, f as renderHead } from '../astro.5f1cc39f.mjs';
/* empty css                         *//* empty css                         */import { i as isRemoteImage, a as isSSRService, p as parseAspectRatio, e as extname } from './endpoint.js.fa1a8680.mjs';
/* empty css                           */import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
/* empty css                           */
const homepageQuery = `
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
const focusAreasQuery = `
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
const headerQuery = `
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
const footerQuery = `
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
const siteDetailsQuery = `
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
const pagesQuery = `
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
const ourTeamQuery = `
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

async function singleGQL (postType, query) {
  try {
    const response = await fetch(`${"https://strapi.kmvs.org.in"}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"6c8ee150a46aec022fa6bfb34e1cce566eb5ba2e0381b5c0d469ee655c6aab191fc075c23b45f2aeda4482ce945a6a54b081bf3380302de0ccf1c04fe9490234e212a629f25262d03157bc4c8a05ad2964e40ed40639735f96a6688013722061adfd383d2b9245da811c20483e00c6b41c1021179f3ce77d507ae832a6ae61b0"}`,
      },
      body: JSON.stringify({
        query: query,
        variables: {},
      }),
    });
    const json = await response.json();
    return json.data[postType].data;
  } catch (error) {
    console.error(error);
  }
}

const $$Astro$k = createAstro("https://kmvs.org.in");
const $$MainNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$MainNav;
  const { logo } = Astro2.props;
  const headerData = await singleGQL("headerMenu", headerQuery);
  const {
    attributes: { submenus }
  } = headerData;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Main Navigation">
	<ul class="nav-list">
		${submenus.map((submenu, index) => {
    const hasMenuItems = submenu.menuItems.length > 0;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
						<li${addAttribute([{ "has-submenu": hasMenuItems }], "class:list")}>
							<button class="submenu-btn" aria-expanded="false">
								${submenu.title}
							</button>
							${hasMenuItems && renderTemplate`<ul class="submenu">
									${submenu.menuItems.map((menuItem) => renderTemplate`<li class="menu-item">
											<a${addAttribute(menuItem.link, "href")}>
												${menuItem.text}
											</a>
										</li>`)}
								</ul>`}
						</li>
						${index === 1 && logo && renderTemplate`<li class="h-logo">
								<a href="/">
									<img${addAttribute(logo, "src")} width="120" alt="Home Page" loading="eager">
								</a>
							</li>`}` })}`;
  })}
	</ul>
</nav>`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/src/components/global/MainNav.astro", void 0);

const $$Astro$j = createAstro("https://kmvs.org.in");
const $$AccessibilityMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$AccessibilityMenu;
  return renderTemplate`${maybeRenderHead()}<div id="AUI" class="astro-NUZH3FK4">
	<button class="AUItoggle astro-NUZH3FK4" aria-expanded="false" aria-label="Accessibility Menu Toggle">
		<div class="AUIicon astro-NUZH3FK4">
			<img src="/images/components/AUI-1.png" alt="" class="astro-NUZH3FK4">
			<img src="/images/components/AUI-2.png" alt="" class="astro-NUZH3FK4">
		</div>
	</button>
	<div class="AUImenu astro-NUZH3FK4" aria-label="Accessibility Menu">
		<p class="screen-reader-text astro-NUZH3FK4">Size & Contrast</p>
		<div class="AUIcontrols astro-NUZH3FK4">
			<ul class="textSizing astro-NUZH3FK4">
				<li class="astro-NUZH3FK4">
					<button class="sizeIncrease astro-NUZH3FK4" title="Font Size Increase" aria-label="Font Size Increase">
						<span aria-hidden="true" class="astro-NUZH3FK4">A+</span>
					</button>
				</li>
				<li class="astro-NUZH3FK4">
					<button class="sizeReset astro-NUZH3FK4" title="Normal Font Size" aria-label="Normal Font Size">
						<span aria-hidden="true" style="margin: 0 2px;" class="astro-NUZH3FK4">A</span>
					</button>
				</li>
				<li class="astro-NUZH3FK4">
					<button class="sizeDecrease astro-NUZH3FK4" title="Font Size Decrease" aria-label="Font Size Decrease">
						<span aria-hidden="true" class="astro-NUZH3FK4">A-</span>
					</button>
				</li>
			</ul>
			<ul class="highContrast astro-NUZH3FK4">
				<li class="astro-NUZH3FK4">
					<button class="darkTheme astro-NUZH3FK4" title="High Contrast" aria-label="High Contrast">
						<span aria-hidden="true" class="astro-NUZH3FK4">A</span>
					</button>
				</li>
				<li class="astro-NUZH3FK4">
					<button class="lightTheme astro-NUZH3FK4" title="Normal Contrast" aria-label="Normal Contrast">
						<span aria-hidden="true" class="astro-NUZH3FK4">A</span>
					</button>
				</li>
			</ul>
		</div>
	</div>
</div>`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/src/components/global/AccessibilityMenu.astro", void 0);

const $$Astro$i = createAstro("https://kmvs.org.in");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Header;
  const logo = "/images/logo.svg";
  return renderTemplate`${maybeRenderHead()}<header>
	<a class="skip-link screen-reader-text" href="#content" role="link" title="Skip to content">
		Skip to content
	</a>
	<div class="nav-wrapper desktop">
		${renderComponent($$result, "MainNav", $$MainNav, { "logo": logo })}
	</div>
	<div class="nav-wrapper mobile">
		<div class="h-logo">
			<a href="/">
				<img${addAttribute(logo, "src")} width="60" alt="Home Page" loading="eager">
			</a>
		</div>
		<button class="open-flyout"${addAttribute(`flyout`, "aria-controls")} aria-expanded="false" aria-label="open menu">
			<img src="/images/components/hamburger_1.png" alt="">
			<img src="/images/components/hamburger_2.png" alt="">
		</button>
		<div id="flyout" tabindex="-1">
			<button class="close-flyout" aria-label="close menu">✕</button>
			${renderComponent($$result, "MainNav", $$MainNav, {})}
			<img class="flyout_cranes" src="/images/decor/flyout_cranes_800w.png" alt="illustrated cranes" loading="lazy">
		</div>
	</div>
	${renderComponent($$result, "AccessibilityMenu", $$AccessibilityMenu, {})}
</header>`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/src/components/global/Header.astro", void 0);

const $$Astro$h = createAstro("https://kmvs.org.in");
const $$Performance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Performance;
  return renderTemplate`${maybeRenderHead()}<p class="js-perf astro-KAVXMZXF"></p>`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/src/components/global/Performance.astro", void 0);

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const $$Astro$g = createAstro("https://kmvs.org.in");
const $$Input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    type,
    id,
    label,
    options,
    wrap,
    required,
    invert,
    class: className
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([[
    "form-group",
    { "input-wrap": wrap, "invert": invert },
    type ? type : "text",
    className
  ], "astro-UFMH4I6A"], "class:list")}>
	<label${addAttribute(id, "for")} class="astro-UFMH4I6A">${label}</label>
	${type === "textarea" ? renderTemplate`<textarea${addAttribute(id, "name")}${addAttribute(id, "id")} cols="30" rows="5" class="astro-UFMH4I6A"></textarea>` : type === "select" && options ? renderTemplate`<select${addAttribute(id, "name")}${addAttribute(id, "id")}${addAttribute(required, "required")} class="astro-UFMH4I6A">
				<option value="" selected class="astro-UFMH4I6A">
					-- Select --
				</option>
				${options.map((option) => renderTemplate`<option${addAttribute(slugify(option), "value")} class="astro-UFMH4I6A">${option}</option>`)}
			</select>` : renderTemplate`<input${addAttribute(type || "text", "type")}${addAttribute(id, "name")}${addAttribute(id, "id")}${addAttribute(required, "required")} class="astro-UFMH4I6A">`}
</div>`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/src/components/global/Input.astro", void 0);

const $$Astro$f = createAstro("https://kmvs.org.in");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerData = await singleGQL("footerMenu", footerQuery);
  const {
    attributes: { submenus }
  } = footerData;
  const hasQuickLinks = submenus.length > 0 && submenus[0].menuItems.length > 0;
  const hasEndLinks = submenus.length > 1 && submenus[1].menuItems.length > 0;
  return renderTemplate`${maybeRenderHead()}<footer class="astro-TGC5TWW7">
	<section id="footer-top" class="astro-TGC5TWW7">
		<div class="container astro-TGC5TWW7">
			<div class="footer-menu astro-TGC5TWW7">
				${hasQuickLinks && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-TGC5TWW7" }, { "default": ($$result2) => renderTemplate`
							<p class="menu-title astro-TGC5TWW7">${submenus[0].title}</p>
							${submenus[0].menuItems.map((menuItem) => renderTemplate`<p class="menu-item astro-TGC5TWW7">
									<a${addAttribute(menuItem.link, "href")} class="astro-TGC5TWW7">${menuItem.text}</a>
								</p>`)}` })}`}
			</div>
			<div class="footer-nl astro-TGC5TWW7">
				<p class="nl-title astro-TGC5TWW7">Subscribe to our newsletter</p>
				<form action="POST" action="http://localhost:3000/" class="astro-TGC5TWW7">
					${renderComponent($$result, "Input", $$Input, { "id": "name", "label": "Name", "class": "invert astro-TGC5TWW7", "wrap": true, "required": true })}
					${renderComponent($$result, "Input", $$Input, { "type": "email", "id": "email", "label": "Email", "class": "invert astro-TGC5TWW7", "wrap": true, "required": true })}
					<input onclick="return confirm('By submitting this form, you consent to receiving our email newsletter periodically.')" type="submit" name="submit" value="Submit" class="astro-TGC5TWW7">
				</form>
			</div>
			<div class="footer-decor astro-TGC5TWW7">
				<img src="/images/decor/camel.png" alt="Illustrated Camel" height="279" width="300" class="astro-TGC5TWW7">
			</div>
		</div>
	</section>
	<section id="footer-bottom" class="astro-TGC5TWW7">
		<div class="container astro-TGC5TWW7">
			<p class="footer-end-links astro-TGC5TWW7">
				${hasEndLinks && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-TGC5TWW7" }, { "default": ($$result2) => renderTemplate`${submenus[1].menuItems.map(
    (menuItem, index, array) => {
      const isLastIndex = index === array.length - 1;
      return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "class": "astro-TGC5TWW7" }, { "default": ($$result3) => renderTemplate`
											<a${addAttribute(menuItem.link, "href")} class="astro-TGC5TWW7">
												${menuItem.text}
											</a>
											${!isLastIndex && renderTemplate`<span class="astro-TGC5TWW7"> | </span>`}` })}`;
    }
  )}` })}`}
			</p>
			${renderComponent($$result, "Performance", $$Performance, { "class": "astro-TGC5TWW7" })}
		</div>
	</section>
</footer>`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/src/components/global/Footer.astro", void 0);

const $$Astro$e = createAstro("https://kmvs.org.in");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}
${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}
${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}
${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}
${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}
${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$d = createAstro("https://kmvs.org.in");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}>
<meta property="og:type"${addAttribute(openGraph.basic.type, "content")}>
<meta property="og:image"${addAttribute(openGraph.basic.image, "content")}>
<meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$c = createAstro("https://kmvs.org.in");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>
${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}
${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}
${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}
${!(height === null) ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}
${!(alt === null) ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$b = createAstro("https://kmvs.org.in");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}
${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}
${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}
${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}
${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}
${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}
${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$a = createAstro("https://kmvs.org.in");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}
${props.extend.meta?.map(({ content, httpEquiv, name, property }) => renderTemplate`<meta${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(name, "name")}${addAttribute(property, "property")}>`)}`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$9 = createAstro("https://kmvs.org.in");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}
${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}
${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}
${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}
${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}
${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}
${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$8 = createAstro("https://kmvs.org.in");
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$7 = createAstro("https://kmvs.org.in");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || props.openGraph.basic.title == null || props.openGraph.basic.type == null || props.openGraph.basic.image == null) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is stongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}

${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}

<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>

${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}

<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>

${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}
${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}
${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}
${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}
${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/node_modules/astro-seo/src/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://kmvs.org.in");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, image, classes } = Astro2.props;
  const siteDetails = await singleGQL("siteDetail", siteDetailsQuery);
  const {
    attributes: { name, tagline }
  } = siteDetails;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="astro-37FXCHFA">\n	<head>\n		', '\n\n		<link rel="icon" href="/favicon.ico" sizes="48x48">\n		<link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml">\n		<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n		<link rel="manifest" href="/site.webmanifest">\n		<script type="application/ld+json">\n			{\n				"@context": "https://schema.org",\n				"@type": "NGO",\n				"name": "Kutch Mahila Vikas Sangathan",\n				"alternateName": "KMVS",\n				"description": "Organising, mobilising and conscientizing women of Kutch in addressing gender inequities.",\n				"nonprofitStatus": "Registered",\n				"areaServed": {\n					"@type": "AdministrativeArea",\n					"name": "Gujarat, India"\n				},\n				"url": "https://kmvs.netlify.app",\n				"logo": "https://kmvs.netlify.app/favicon.svg",\n				"email": "kmvskutch@gmail.com",\n				"telephone": "+91 2832 223311",\n				"keywords": "Rural, Women, India, Development, Collective",\n				"sameAs": [\n					"https://www.facebook.com/KutchKMVS/",\n					"https://twitter.com/kmvskutch",\n					"https://www.instagram.com/kmvs_1989/",\n					"https://in.linkedin.com/company/kmvs"\n				]\n			}\n		<\/script>\n		<script defer data-domain="kmvs.org.in" src="https://analytics.kmvs.org.in/js/script.js"><\/script>\n	', "</head>\n	<body", '>\n		<div class="wrapper astro-37FXCHFA">\n			', '\n			<main id="content" tabindex="-1" class="astro-37FXCHFA">\n				', "\n			</main>\n			", "\n		</div>\n		\n	</body>\n</html>"])), renderComponent($$result, "SEO", $$SEO, { "charset": "UTF-8", "title": title, "titleTemplate": `%s - ${name}`, "titleDefault": name, "description": tagline, "noindex": true, "nofollow": true, "openGraph": {
    basic: {
      title,
      type: "website",
      image: image || "/android-chrome-512x512.png"
    }
  }, "extend": {
    // extending the default link tags
    link: [],
    // extending the default meta tags
    meta: [
      {
        name: "viewport",
        content: "width=device-width"
      },
      {
        name: "keywords",
        content: "Rural, Women, India, Development, Collective"
      }
    ]
  }, "class": "astro-37FXCHFA" }), renderHead(), addAttribute("kmvs " + classes.join(" ") + " astro-37FXCHFA", "class"), renderComponent($$result, "Header", $$Header, { "class": "astro-37FXCHFA" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "class": "astro-37FXCHFA" }));
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/src/layouts/BaseLayout.astro", void 0);

function resolveSize(transform) {
  if (transform.width && transform.height) {
    return transform;
  }
  if (!transform.width && !transform.height) {
    throw new Error(`"width" and "height" cannot both be undefined`);
  }
  if (!transform.aspectRatio) {
    throw new Error(
      `"aspectRatio" must be included if only "${transform.width ? "width" : "height"}" is provided`
    );
  }
  let aspectRatio;
  if (typeof transform.aspectRatio === "number") {
    aspectRatio = transform.aspectRatio;
  } else {
    const [width, height] = transform.aspectRatio.split(":");
    aspectRatio = Number.parseInt(width) / Number.parseInt(height);
  }
  if (transform.width) {
    return {
      ...transform,
      width: transform.width,
      height: Math.round(transform.width / aspectRatio)
    };
  } else if (transform.height) {
    return {
      ...transform,
      width: Math.round(transform.height * aspectRatio),
      height: transform.height
    };
  }
  return transform;
}
async function resolveTransform(input) {
  if (typeof input.src === "string") {
    return resolveSize(input);
  }
  const metadata = "then" in input.src ? (await input.src).default : input.src;
  let { width, height, aspectRatio, background, format = metadata.format, ...rest } = input;
  if (!width && !height) {
    width = metadata.width;
    height = metadata.height;
  } else if (width) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    height = height || Math.round(width / ratio);
  } else if (height) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    width = width || Math.round(height * ratio);
  }
  return {
    ...rest,
    src: metadata.src,
    width,
    height,
    aspectRatio,
    format,
    background
  };
}
async function getImage(transform) {
  var _a, _b, _c;
  if (!transform.src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  let loader = (_a = globalThis.astroImage) == null ? void 0 : _a.loader;
  if (!loader) {
    const { default: mod } = await import('./endpoint.js.fa1a8680.mjs').then(n => n.s).catch(() => {
      throw new Error(
        "[@astrojs/image] Builtin image loader not found. (Did you remember to add the integration to your Astro config?)"
      );
    });
    loader = mod;
    globalThis.astroImage = globalThis.astroImage || {};
    globalThis.astroImage.loader = loader;
  }
  const resolved = await resolveTransform(transform);
  const attributes = await loader.getImageAttributes(resolved);
  const isDev = (_b = (Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://kmvs.org.in","ASSETS_PREFIX":undefined},{_:process.env._,SSR:true,}))) == null ? void 0 : _b.DEV;
  const isLocalImage = !isRemoteImage(resolved.src);
  const _loader = isDev && isLocalImage ? globalThis.astroImage.defaultLoader : loader;
  if (!_loader) {
    throw new Error("@astrojs/image: loader not found!");
  }
  const { searchParams } = isSSRService(_loader) ? _loader.serializeTransform(resolved) : globalThis.astroImage.defaultLoader.serializeTransform(resolved);
  const imgSrc = !isLocalImage && resolved.src.startsWith("//") ? `https:${resolved.src}` : resolved.src;
  let src;
  if (/^[\/\\]?@astroimage/.test(imgSrc)) {
    src = `${imgSrc}?${searchParams.toString()}`;
  } else {
    searchParams.set("href", imgSrc);
    src = `/_image?${searchParams.toString()}`;
  }
  if ((_c = globalThis.astroImage) == null ? void 0 : _c.addStaticImage) {
    src = globalThis.astroImage.addStaticImage(resolved);
  }
  return {
    ...attributes,
    src
  };
}

async function resolveAspectRatio({ src, aspectRatio }) {
  if (typeof src === "string") {
    return parseAspectRatio(aspectRatio);
  } else {
    const metadata = "then" in src ? (await src).default : src;
    return parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
  }
}
async function resolveFormats({ src, formats }) {
  const unique = new Set(formats);
  if (typeof src === "string") {
    unique.add(extname(src).replace(".", ""));
  } else {
    const metadata = "then" in src ? (await src).default : src;
    unique.add(extname(metadata.src).replace(".", ""));
  }
  return Array.from(unique).filter(Boolean);
}
async function getPicture(params) {
  const { src, alt, widths, fit, position, background } = params;
  if (!src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  if (!widths || !Array.isArray(widths)) {
    throw new Error("[@astrojs/image] at least one `width` is required. ex: `widths={[100]}`");
  }
  const aspectRatio = await resolveAspectRatio(params);
  if (!aspectRatio) {
    throw new Error("`aspectRatio` must be provided for remote images");
  }
  const allFormats = await resolveFormats(params);
  const lastFormat = allFormats[allFormats.length - 1];
  const maxWidth = Math.max(...widths);
  let image;
  async function getSource(format) {
    const imgs = await Promise.all(
      widths.map(async (width) => {
        var _a;
        const img = await getImage({
          src,
          alt,
          format,
          width,
          fit,
          position,
          background,
          aspectRatio
        });
        if (format === lastFormat && width === maxWidth) {
          image = img;
        }
        return `${(_a = img.src) == null ? void 0 : _a.replaceAll(" ", encodeURI)} ${width}w`;
      })
    );
    return {
      type: mime.getType(format) || format,
      srcset: imgs.join(",")
    };
  }
  const sources = await Promise.all(allFormats.map((format) => getSource(format)));
  return {
    sources,
    // @ts-expect-error image will always be defined
    image
  };
}

const $$Astro$5 = createAstro("https://kmvs.org.in");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Image;
  const { loading = "lazy", decoding = "async", ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    warnForMissingAlt();
  }
  const attrs = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${spreadAttributes(attrs)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}>`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/node_modules/@astrojs/image/components/Image.astro", void 0);

const $$Astro$4 = createAstro("https://kmvs.org.in");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Picture;
  const {
    src,
    alt,
    sizes,
    widths,
    aspectRatio,
    fit,
    background,
    position,
    formats = ["avif", "webp"],
    loading = "lazy",
    decoding = "async",
    ...attrs
  } = Astro2.props;
  if (alt === void 0 || alt === null) {
    warnForMissingAlt();
  }
  const { image, sources } = await getPicture({
    src,
    widths,
    formats,
    aspectRatio,
    fit,
    background,
    position,
    alt
  });
  delete image.width;
  delete image.height;
  return renderTemplate`${maybeRenderHead()}<picture>
	${sources.map((attrs2) => renderTemplate`<source${spreadAttributes(attrs2)}${addAttribute(sizes, "sizes")}>`)}
	<img${spreadAttributes(image)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}${spreadAttributes(attrs)}>
</picture>`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/node_modules/@astrojs/image/components/Picture.astro", void 0);

let altWarningShown = false;
function warnForMissingAlt() {
  if (altWarningShown === true) {
    return;
  }
  altWarningShown = true;
  console.warn(`
[@astrojs/image] "alt" text was not provided for an <Image> or <Picture> component.

A future release of @astrojs/image may throw a build error when "alt" text is missing.

The "alt" attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility. Set to an empty string (alt="") if the image is not a key part of the content (it's decoration or a tracking pixel).
`);
}

const $$Astro$3 = createAstro("https://kmvs.org.in");
const $$PlaceholderImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PlaceholderImage;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([["placeholder", className], "astro-V5OVTO52"], "class:list")}>
	<img src="/images/components/placeholder_1.png" alt="" role="presentation" class="astro-V5OVTO52">
</div>`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/src/components/PlaceholderImage.astro", void 0);

const $$Astro$2 = createAstro("https://kmvs.org.in");
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Title;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="title" class="astro-6IDPVE2O">
	<div class="container astro-6IDPVE2O">
		<div class="border-top astro-6IDPVE2O"></div>
		<h1 class="astro-6IDPVE2O">${title}</h1>
		<div class="border-bottom astro-6IDPVE2O"></div>
	</div>
</section>`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/src/components/global/Title.astro", void 0);

const $$Astro$1 = createAstro("https://kmvs.org.in");
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, image, classes } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "image": image, "classes": classes }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Title", $$Title, { "title": title })}
	${renderSlot($$result2, $$slots["default"])}
` })}`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/src/layouts/PageLayout.astro", void 0);

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

function sanitizeHTML(html) {
  return DOMPurify.sanitize(html);
}

const $$Astro = createAstro("https://kmvs.org.in");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const strapi_url = "https://strapi.kmvs.org.in";
  const ourTeamData = await singleGQL("ourTeams", ourTeamQuery);
  ourTeamData.sort((a, b) => a.attributes.name.localeCompare(b.attributes.name));
  let { staff, board } = ourTeamData.reduce(
    (accumulator, member) => {
      if (member.attributes.category === "Staff") {
        accumulator.staff.push(member);
      } else if (member.attributes.category === "Board") {
        accumulator.board.push(member);
      }
      return accumulator;
    },
    { staff: [], board: [] }
  );
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Our Team", "classes": ["our-team"], "class": "astro-UWVXLPT7" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<section id="staff" class="astro-UWVXLPT7">
		<div class="container astro-UWVXLPT7">
			<h2 class="astro-UWVXLPT7">Staff Members</h2>
			<div class="post-grid astro-UWVXLPT7">
				${staff.map((member) => {
    const {
      id,
      attributes: {
        name,
        profilePicture,
        role,
        project,
        about
      }
    } = member;
    return renderTemplate`<a class="post bordered astro-UWVXLPT7" href="#" aria-haspopup="dialog"${addAttribute(`modal_${id}`, "aria-controls")} aria-expanded="false"${addAttribute(`Details about ${name}`, "aria-label")}${addAttribute(id, "data-key")}>
								<div class="card astro-UWVXLPT7">
									${profilePicture.data ? renderTemplate`${renderComponent($$result2, "Picture", $$Picture, { "class": "featured-image astro-UWVXLPT7", "src": strapi_url + profilePicture.data.attributes.url, "alt": `Profile picture of ${name}`, "aspectRatio": 3 / 2, "widths": [500], "sizes": "100%", "formats": ["avif", "webp"] })}` : renderTemplate`${renderComponent($$result2, "PlaceholderImage", $$PlaceholderImage, { "class": "featured-image invert astro-UWVXLPT7" })}`}
									<div class="content astro-UWVXLPT7">
										<h3 class="astro-UWVXLPT7">${name}</h3>
										<hr class="astro-UWVXLPT7">
										<p class="w-500 astro-UWVXLPT7">
											${[project, role].filter(Boolean).join(" - ")}
										</p>
									</div>
									<p class="read-more astro-UWVXLPT7">
										Read More
										<img src="/images/decor/arrow.png" alt="" role="presentation" class="astro-UWVXLPT7">
									</p>
								</div>
							</a>`;
  })}
			</div>
			<div class="modals astro-UWVXLPT7">
				${staff.map((member) => {
    const {
      id,
      attributes: { name, about }
    } = member;
    return renderTemplate`<dialog${addAttribute(`modal_${id}`, "id")} class="modal astro-UWVXLPT7" role="dialog"${addAttribute(`modal_title_${id}`, "aria-labelledby")}>
								<h3${addAttribute(`modal_title_${id}`, "id")} class="astro-UWVXLPT7">${name}</h3>
								${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(sanitizeHTML(about))}` })}
								<button class="close-modal button astro-UWVXLPT7" aria-label="Close the modal" tabindex="0">
									Close
								</button>
							</dialog>`;
  })}
			</div>
		</div>
	</section>
` })}

`;
}, "/Users/rithvik/Athena/GitHub/KMVS/astro/src/pages/our-team/index.astro", void 0);

const $$file = "/Users/rithvik/Athena/GitHub/KMVS/astro/src/pages/our-team/index.astro";
const $$url = "/our-team";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Picture as $, $$PlaceholderImage as a, $$BaseLayout as b, $$Input as c, $$PageLayout as d, slugify as e, focusAreasQuery as f, homepageQuery as h, index as i, pagesQuery as p, singleGQL as s };
