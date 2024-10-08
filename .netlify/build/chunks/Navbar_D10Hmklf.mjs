import { d as createAstro, c as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, a as renderComponent, g as renderHead, f as renderSlot } from './astro/server_CkN0ONMX.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                            */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://pitcairnaviation.com/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title,
    description,
    keywords,
    image = "/src/assets/heritage-field-airport.webp"
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/pitcairn-aviation-logo.ico"><meta name="generator"', '><link rel="sitemap" href="/sitemap-index.xml"><!-- Google tag (gtag.js) --><script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-L64WY2QD0J"><\/script><script type="text/partytown">\n  window.dataLayer = window.dataLayer || [];\n  function gtag() {\n    dataLayer.push(arguments);\n  }\n  gtag("js", new Date());\n\n  gtag("config", "G-L64WY2QD0J");\n<\/script><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="keywords"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><script type="application/ld+json">\n  {\n    "@context": "http://schema.org",\n    "@type": "LocalBusiness",\n    "name": "Pitcairn Aviation LLC",\n    "description": "Pitcairn Aviation offers premier fixed-base operator (FBO) services at Heritage Field Airport in Pottstown, PA. From fueling and maintenance to hangar rentals and concierge services, we provide top-tier aviation support. Discover why pilots choose Pitcairn Aviation for all their aviation needs.",\n    "keywords": "Pitcairn Aviation, Heritage Field Airport, FBO services, fixed-base operator Pottstown, aviation services Pottstown, PA, fueling services, aircraft maintenance, hangar rentals, concierge services, aviation support",\n    "image": "https://pitcairnaviation.com/_astro/pitcairn-aviation-fbo-front-office.CbDvmrjw_ZEVJNe.webp",\n    "logo": "https://pitcairnaviation.com/_astro/pitcairn-aviation-fbo-front-office.CbDvmrjw_ZEVJNe.webp",\n    "telephone": "(610) 500-3023",\n    "email": "info@pitcairnaviation.com",\n    "address": {\n      "@type": "PostalAddress",\n      "streetAddress": "3310 W Ridge Pike",\n      "addressLocality": "Pottstown",\n      "addressRegion": "PA",\n      "addressCountry": "US",\n      "postalCode": "19464"\n    },\n    "currenciesAccepted": "USD",\n    "paymentAccepted": "Cash, Credit Card, Visa, Mastercard, American Express, Discover, Checks",\n    "areaServed": {\n      "@type": "GeoCircle",\n      "geoMidpoint": {\n        "@type": "GeoCoordinates",\n        "latitude": 40.2390420143688,\n        "longitude": -75.55689644232788\n      },\n      "geoRadius": 9000\n    },\n    "aggregateRating": {\n      "@type": "AggregateRating",\n      "ratingValue": "5",\n      "reviewCount": "14"\n    },\n    "url": "https://pitcairnaviation.com/",\n    "priceRange": "$",\n    "geo": {\n      "@type": "GeoCoordinates",\n      "latitude": 40.2390420143688,\n      "longitude": -75.55689644232788\n    },\n    "openingHoursSpecification": [\n      {\n        "@type": "OpeningHoursSpecification",\n        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],\n        "opens": "8:00",\n        "closes": "18:00"\n      },\n      {\n        "@type": "OpeningHoursSpecification",\n        "dayOfWeek": ["Saturday", "Sunday"],\n        "opens": "9:00",\n        "closes": "17:00"\n      }\n    ],\n    "hasMap": "https://maps.app.goo.gl/o8kEUH6ZQqRiNu3G8",\n    "photo": [\n      {\n        "@type": "ImageObject",\n        "url": "https://pitcairnaviation.com/_astro/pitcairn-aviation-fbo-front-office.CbDvmrjw_ZEVJNe.webp",\n        "description": "Pitcairn Aviation FBO Front Office"\n      }\n    ],\n    "makesOffer": {\n      "@type": "Offer",\n      "itemOffered": {\n        "@type": "Service",\n        "serviceType": "Aviation Services"\n      },\n      "priceCurrency": "USD",\n      "price": "Varies"\n    },\n    "identifier": [\n      {\n        "@type": "PropertyValue",\n        "name": "IATA Code",\n        "value": "PTW"\n      },\n      {\n        "@type": "PropertyValue",\n        "name": "ICAO Code",\n        "value": "KPTW"\n      },\n      {\n        "@type": "PropertyValue",\n        "name": "Airport Code",\n        "value": "KPTW"\n      }\n    ]\n  }\n<\/script>'])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"));
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/BaseHead.astro", void 0);

const $$SocialMedia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center md:items-end"> <p class="mb-3 text-lg font-bold">Social Media</p> <div class="flex gap-3"> <a href="https://www.facebook.com/people/Pitcairn-Flight-Academy/100090594675356/" target="_blank" rel="noopener" class="text-white hover:scale-125 duration-300"> <span class="sr-only">Facebook</span> <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path> </svg> </a> <!-- <a
      href="/"
      target="_blank"
      rel="noopener"
      class="text-white hover:scale-125 duration-300"
    >
      <span class="sr-only">Instagram</span>
      <svg
        class="size-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clip-rule="evenodd"></path>
      </svg>
    </a>
    <a
      href="/"
      target="_blank"
      rel="noopener"
      class="text-white hover:scale-125 duration-300"
    >
      <span class="sr-only">LinkedIn</span>
      <svg
        class="size-6"
        fill="currentColor"
        viewBox="0 0 50 50"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
          clip-rule="evenodd"></path>
      </svg>
    </a> --> </div> </div>`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/SocialMedia.astro", void 0);

const SITE_TITLE = "Pitcairn Aviation";
const SITE_DESCRIPTION = "Pitcairn Aviation offers premier fixed-base operator (FBO) services at Heritage Field Airport in Pottstown, PA. From fueling and maintenance to hangar rentals and concierge services, we provide top-tier aviation support. Discover why pilots choose Pitcairn Aviation for all their aviation needs.";
const SITE_KEYWORDS = "Pitcairn Aviation, Heritage Field Airport, FBO services, fixed-base operator Pottstown, aviation services Pottstown, PA, fueling services, aircraft maintenance, hangar rentals, concierge services, aviation support";
const PHONE_NUMBER = "(610) 500-3023";

const $$Astro$1 = createAstro("https://pitcairnaviation.com/");
const $$ContactInformation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactInformation;
  const { classes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}> <div class="flex gap-3"> <svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <div class="flex flex-col"> <p>3310 W Ridge Pike</p> <p>Pottstown, PA 19464</p> </div> </div> <div class="flex gap-3"> <svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.2109 8.84009C18.0578 8.09677 17.6931 7.41362 17.1609 6.87256C16.6288 6.33149 15.9516 5.95549 15.2109 5.79004" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 7.51001C21.6283 6.19924 20.928 5.00529 19.9655 4.04102C19.003 3.07674 17.8101 2.37408 16.5 2" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <a${addAttribute(`tel:${PHONE_NUMBER}`, "href")}>${PHONE_NUMBER}</a> </div> <!-- <div class="flex gap-3">
    <svg
      class="size-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
        fill="#FFFFFF"></path>
    </svg>
    <a href=\`mailto:\${EMAIL_ADDRESS}\`>{EMAIL_ADDRESS}</a>
  </div> --> </div>`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/ContactInformation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-main-black text-white"> <div class="max-w-7xl mx-auto p-5 text-center md:text-left"> <div class="py-12 flex w-full flex-col md:flex-row justify-between items-center md:items-start gap-10"> <a href="/"> <!-- <Image
          src={PitcairnLogo}
          alt="A starry night sky."
          class="h-20 w-auto"
        /> --> <h1 class="text-white text-2xl font-bold uppercase leading-none text-center"> <span class="text-5xl block leading-none">Pitcairn</span> <span class="text-main-color">Aviation LLC</span> </h1> </a> <div class="flex flex-col gap-3"> <a href="/" class="text-lg font-bold hover:text-gray-300 duration-100">Pitcairn Aviation LLC</a> <a href="/services" class="hover:text-gray-300 duration-100">Services</a> <a href="/about-us" class="hover:text-gray-300 duration-100">About Us</a> <a href="/plan-your-visit" class="hover:text-gray-300 duration-100">Plan Your Visit</a> <a href="/contact-us" class="hover:text-gray-300 duration-100">Contact Us</a> </div> <div class="flex flex-col gap-3"> <p class="text-lg font-bold">Contact</p> ${renderComponent($$result, "ContactInformation", $$ContactInformation, { "classes": "flex flex-col gap-3" })} </div> ${renderComponent($$result, "SocialMedia", $$SocialMedia, {})} </div> <hr class="border"> <div class="py-2 flex gap-3 flex-col md:flex-row text-sm justify-between"> <div class="flex gap-3 flex-col md:flex-row"> <p>
&copy; ${today.getFullYear()} Pitcairn Aviation LLC. All rights reserved.
</p> <a href="/privacy-policy" class="text-white font-medium hover:underline duration-300">Privacy Policy</a> </div> <p class="">
Powered by <a href="https://rightruddermarketing.com/" target="_blank" class="text-white font-medium hover:underline duration-300">More Right Rudder</a> </p> </div> </div> </footer>`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://pitcairnaviation.com/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, keywords } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title || SITE_TITLE, "description": description || SITE_DESCRIPTION, "keywords": keywords || SITE_KEYWORDS })}${renderHead()}</head> <body class="font-inter"> ${renderSlot($$result, $$slots["header"])} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/layouts/BaseLayout.astro", void 0);

new Proxy({"src":"/_astro/pitcairn-logo.Bxqrh0pZ.webp","width":679,"height":255,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/pitcairn-logo.webp";
							}
							
							return target[name];
						}
					});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxs("header", { className: "absolute inset-x-0 top-0 z-50", children: [
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: "flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto",
        "aria-label": "Global",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ jsxs("a", { href: "/", className: "-m-1.5 p-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Pitcairn Aviation" }),
            /* @__PURE__ */ jsxs("h1", { className: "text-white font-bold uppercase leading-none text-center drop-shadow-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "text-3xl block leading-none", children: "Pitcairn" }),
              /* @__PURE__ */ jsx("span", { className: "text-main-color", children: "Aviation LLC" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex lg:hidden", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",
              onClick: toggleMenu,
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "white",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      }
                    )
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden font-bold uppercase lg:flex lg:gap-x-12", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/services",
                className: "text-base tracking-tight hover:text-main-color text-white duration-100",
                children: "Services"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/plan-your-visit",
                className: "text-base tracking-tight hover:text-main-color text-white duration-100",
                children: "Plan Your Visit"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/about-us",
                className: "text-base tracking-tight hover:text-main-color text-white duration-100",
                children: "About Us"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/contact-us",
                className: "text-base tracking-tight hover:text-main-color text-white duration-100",
                children: "Contact Us"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `lg:hidden`,
        role: "dialog",
        "aria-modal": "true",
        id: "mobile-menu",
        "aria-labelledby": "mobile-menu",
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: `${isOpen ? "translate-x-0" : "translate-x-full"} duration-300 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-main-color px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("a", { href: "/", className: "-m-1.5 p-1.5", children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Pitcairn Aviation" }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-white font-bold uppercase leading-none text-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-3xl block leading-none", children: "Pitcairn" }),
                    /* @__PURE__ */ jsx("span", { children: "Aviation LLC" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: "-m-2.5 rounded-md p-2.5",
                    onClick: toggleMenu,
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" }),
                      /* @__PURE__ */ jsx(
                        "svg",
                        {
                          className: "h-6 w-6",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "white",
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M6 18L18 6M6 6l12 12"
                            }
                          )
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ jsx("div", { className: "-my-6 divide-y divide-gray-500/10", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2 py-6 font-bold uppercase", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/services",
                    className: "-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-main-color",
                    children: "Services"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/about-us",
                    className: "-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-main-color",
                    children: "About Us"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/plan-your-visit",
                    className: "-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-main-color",
                    children: "Plan Your Visit"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/contact-us",
                    className: "-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-gray-50 hover:text-main-color",
                    children: "Contact Us"
                  }
                )
              ] }) }) })
            ]
          }
        )
      }
    )
  ] });
};

export { $$BaseLayout as $, Navbar as N, PHONE_NUMBER as P, $$ContactInformation as a };
