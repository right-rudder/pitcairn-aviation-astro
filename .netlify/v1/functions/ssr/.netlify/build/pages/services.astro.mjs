/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_CkN0ONMX.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/Navbar_D10Hmklf.mjs';
import { $ as $$Intro, a as $$FuelPrices } from '../chunks/Intro_5TDIC5NU.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { BsFuelPumpFill, BsFillBoxSeamFill } from 'react-icons/bs';
import { MdEmojiTransportation, MdOutlineSecurity } from 'react-icons/md';
import { GiSofa } from 'react-icons/gi';
import { ImPower } from 'react-icons/im';
import { $ as $$Header2 } from '../chunks/Header2_BhhK115M.mjs';
import { H as Hangar } from '../chunks/pitcairn-aviation-hangar-space_DvbJ5kXu.mjs';
import { $ as $$Section2, a as $$Section1, F as Fleet } from '../chunks/fleet-at-pitcairn-aviation-fbo_BzyzlrKn.mjs';
import { R as RentalCar } from '../chunks/car-rental-company-logos_D5dRPrqE.mjs';
export { renderers } from '../renderers.mjs';

const ServiceCard = ({ service }) => {
  const iconMap = {
    "Hassle-Free Refueling": BsFuelPumpFill,
    "Safe Storage Solutions": BsFillBoxSeamFill,
    "Convenient Transportation": MdEmojiTransportation,
    "Modern Amenities": GiSofa,
    "Attentive Ground Support": ImPower,
    "Peace of Mind": MdOutlineSecurity
  };
  const Icon = iconMap[service.title];
  const { title, subtitle, id } = service;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: `#${id}`,
      className: "relative overflow-hidden cursor-pointer p-5 bg-white border-l-8 border-main-color rounded-xl group",
      children: [
        /* @__PURE__ */ jsx("div", { className: "bg-main-color opacity-30 group-hover:opacity-90 absolute h-full w-full top-0 duration-300 right-full group-hover:right-0 z-10" }),
        /* @__PURE__ */ jsx("h2", { className: "relative font-medium text-2xl z-20 group-hover:text-white duration-100", children: title }),
        /* @__PURE__ */ jsx("p", { className: "relative text-gray-500 text-base z-20 group-hover:text-gray-100 duration-200", children: subtitle }),
        /* @__PURE__ */ jsx(Icon, { className: "absolute right-2 text-main-color/20 size-24 -bottom-1 group-hover:text-white/20 z-20 duration-100" })
      ]
    }
  );
};

const AddingFuel = new Proxy({"src":"/_astro/adding-fuel.BDoh9FDI.png","width":786,"height":524,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/adding-fuel.png";
							}
							
							return target[name];
						}
					});

const AirportLounge = new Proxy({"src":"/_astro/heritage-field-airport-outside-pitcairn-fbo.E2Am8T3W.jpg","width":1944,"height":1142,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/heritage-field-airport-outside-pitcairn-fbo.jpg";
							}
							
							return target[name];
						}
					});

const JetTowing = new Proxy({"src":"/_astro/airplane-on-heritage-field-runway.pViMoL5R.jpg","width":738,"height":498,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/airplane-on-heritage-field-runway.jpg";
							}
							
							return target[name];
						}
					});

const HeroImage = new Proxy({"src":"/_astro/aviation-services-at-pitcairn-aviation-heritage-field-airport.DlxglAn0.jpg","width":1926,"height":510,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/aviation-services-at-pitcairn-aviation-heritage-field-airport.jpg";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Hassle-Free Refueling",
      subtitle: "Reliable Phillips 66 AvGas pumps",
      id: "hassle-free-refueling"
    },
    {
      title: "Safe Storage Solutions",
      subtitle: "Tiedowns and heated hangar rentals",
      id: "safe-storage-solutions"
    },
    {
      title: "Convenient Transportation",
      subtitle: "Crew car and rental car access",
      id: "convenient-transportation"
    },
    {
      title: "Modern Amenities",
      subtitle: "Conference rooms, lounges, and businesses",
      id: "modern-amenities"
    },
    {
      title: "Attentive Ground Support",
      subtitle: "GPU services and jump-starts",
      id: "attentive-ground-support"
    },
    {
      title: "Peace of Mind",
      subtitle: "Secured airfield access and parking",
      id: "peace-of-mind"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "FBO Services | Pitcairn Aviation LLC", "description": "Explore the comprehensive FBO services offered by Pitcairn Aviation at Heritage Field Airport. Our services include aircraft fueling, maintenance, hangar rentals, ground support, and more. Experience exceptional aviation support in Pottstown, PA.", "keywords": "FBO services, Pitcairn Aviation, Heritage Field Airport, aircraft fueling, aircraft maintenance, hangar rentals, ground support, aviation services Pottstown, PA, fixed-base operator" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Intro", $$Intro, { "title": "Your one-stop solution at pitcairn aviation", "description": [
    `At Pitcairn Aviation LLC, we go above and beyond to provide a full
          suite of services that cater to the diverse needs of pilots and
          aircraft owners.`,
    `From self-serve fueling options to secure hangars and ground support,
          our commitment to exceptional service ensures a seamless and enjoyable
          experience every time you visit.`
  ] })} ${maybeRenderHead()}<section class="bg-zinc-200 py-10"> <div class="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5"> ${services.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", ServiceCard, { "service": service, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/ServiceCard", "client:component-export": "default" })}`)} </div> </section> ${renderComponent($$result2, "Section2", $$Section2, { "id": "hassle-free-refueling", "image": AddingFuel, "alt": "Pitcairn aviation staff adding fuel to an aircraft", "title": "Hassle-Free Refueling", "subtitle": "Reliable Phillips 66 AvGas pumps", "content": `Our self-serve AvGas pumps make refueling simple and hassle-free.
  Enjoy the convenience of topping up your tanks 24/7 with our reliable
  Phillips 66 fuel. We offer both 100LL AvGas and Jet A options to meet
  your aircraft's needs. Our pumps accept all major credit cards for
  your convenience.`, "cta": "View Fuel Prices", "ctaLink": "#fuel-prices" })} ${renderComponent($$result2, "Section1", $$Section1, { "id": "safe-storage-solutions", "image": Hangar, "alt": "Pitcairn Aviation hangar space", "title": "Safe Storage Solutions", "subtitle": "Tiedowns and hangar rentals", "content": `Protect your aircraft with our secure tiedown spaces and hangar facilities. Variable-term and overnight hangar rental options are available. Our professional line staff will ensure your aircraft is safely tucked away.`, "cta": "Rent Hangar Space", "ctaLink": "/hangar-rental-form" })} ${renderComponent($$result2, "Section2", $$Section2, { "id": "convenient-transportation", "image": RentalCar, "alt": "Car rental company logos", "title": "Convenient Transportation", "subtitle": "Crew car and rental car access", "content": `Enhance your visit with access to our courtesy crew cars or rental car services to explore the area. Our crew cars are complimentary for pilots refueling with us. For longer stays, take advantage of our partnership with Enterprise, Hertz, and Avis for rental cars delivered right to our FBO.`, "cta": "Request Transport", "ctaLink": "/contact-us#contact-us-form" })} ${renderComponent($$result2, "Section1", $$Section1, { "id": "modern-amenities", "image": AirportLounge, "alt": "Heritage Field Airport outside Pitcairn FBO", "title": "Modern Amenities", "subtitle": "Conference rooms, lounges, and businesses", "content": `While at our FBO, take advantage of our comfortable lounges with TV, workspaces, and conference rooms. Stay productive with access to Wi-Fi, printing, and refreshments. Other aviation businesses on the field include Pitcairn Flight Academy, PennAir Repair, and PennJet Charter Services for additional services.`, "cta": "Use Our Conference Rooms", "ctaLink": "/contact-us#contact-us-form" })} ${renderComponent($$result2, "Section2", $$Section2, { "id": "attentive-ground-support", "image": JetTowing, "alt": "Airplane on Heritage Field runway", "title": "Attentive Ground Support", "subtitle": "GPU services and jump-starts", "content": `You can count on our line staff for prompt ground power unit hookups to get you powered on. We also offer battery jump-start services and aircraft towing/repositioning handled by our experienced team members.` })} ${renderComponent($$result2, "Section1", $$Section1, { "id": "peace-of-mind", "image": Fleet, "alt": "Pitcairn Aviation fleet", "title": "Peace of Mind", "subtitle": "Secured airfield access and parking", "content": `We make security a top priority with controlled gate access requiring a secure code. Our ramp and parking areas are monitored 24/7 by surveillance cameras for added peace of mind during your stay.` })} ${renderComponent($$result2, "FuelPrices", $$FuelPrices, {})} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header2", $$Header2, { "slot": "header", "image": HeroImage, "alt": "Aviation services at Pitcairn Aviation Heritage Field Airport" }, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Our Aviation <span class="text-main-color">Services</span> ` })}` })}` })} `;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/services.astro", void 0);

const $$file = "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
