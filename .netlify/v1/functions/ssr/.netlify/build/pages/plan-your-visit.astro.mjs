/* empty css                                    */
import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, F as Fragment } from '../chunks/astro/server_CkN0ONMX.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/Navbar_D10Hmklf.mjs';
import { V as VisitPitcairn } from '../chunks/visit-pitcairn-aviation-in-pottstown-pa_Ffmjs1lB.mjs';
import { $ as $$Intro, a as $$FuelPrices } from '../chunks/Intro_5TDIC5NU.mjs';
import { $ as $$Header2 } from '../chunks/Header2_BhhK115M.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_4j2PhZoE.mjs';
/* empty css                                           */
import { R as RentalCar } from '../chunks/car-rental-company-logos_D5dRPrqE.mjs';
import { H as Hangar } from '../chunks/pitcairn-aviation-hangar-space_DvbJ5kXu.mjs';
import { $ as $$VisitUs } from '../chunks/VisitUs_qPbk5VZy.mjs';
export { renderers } from '../renderers.mjs';

const CrewCar = new Proxy({"src":"/_astro/crew-car.CAr52VNU.png","width":743,"height":519,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/crew-car.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://pitcairnaviation.com/");
const $$DemoCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DemoCard;
  const { title, stepNumber, description, image, alt, cta, ctaLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`demo-card demo-card--step${stepNumber} even:bg-main-green odd:bg-main-blue group opacity-0 duration-700 delay-100 ${stepNumber % 2 == 0 ? "translate-x-10 fade-left" : "-translate-x-10 fade-right"}`, "class")} data-astro-cid-xffym2tf> <div class="head group-even:after:border-main-green group-odd:after:border-main-blue" data-astro-cid-xffym2tf> <h2 class="p-7 text-3xl font-semibold text-white" data-astro-cid-xffym2tf>${title}</h2> </div> <div class="body" data-astro-cid-xffym2tf> ${description.map((paragraph) => renderTemplate`<p data-astro-cid-xffym2tf>${paragraph}</p>`)} ${cta && renderTemplate`<a${addAttribute(ctaLink, "href")} class="block px-4 py-2 my-4 text-black text-center font-medium uppercase border border-main-blue duration-300 hover:text-white bg-white hover:bg-main-blue" data-astro-cid-xffym2tf> ${cta} </a>`} ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": alt, "class": "w-[1000px] h-[250px] object-cover", "data-astro-cid-xffym2tf": true })} </div> </div> `;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/DemoCard.astro", void 0);

const HotelsNearby = new Proxy({"src":"/_astro/hotels-logos.DD-dErOo.webp","width":1500,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/hotels-logos.webp";
							}
							
							return target[name];
						}
					});

const BusinessSpaces = new Proxy({"src":"/_astro/pitcairn-aviation-office-space.DoCdQ9GX.jpg","width":6000,"height":4000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/pitcairn-aviation-office-space.jpg";
							}
							
							return target[name];
						}
					});

const $$PlanYourVisit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Plan Your Visit | Pitcairn Aviation LLC", "description": "Plan your visit to Pitcairn Aviation at Heritage Field Airport. Find essential information on airport facilities, ground transportation, nearby accommodations, and local attractions in Pottstown, PA. Experience seamless travel planning with us.", "keywords": "plan your visit, Pitcairn Aviation, Heritage Field Airport, airport facilities, ground transportation, accommodations Pottstown, local attractions, Pottstown PA, travel planning, aviation services", "data-astro-cid-6w3uezxl": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Intro", $$Intro, { "title": "What to expect when visiting Pitcairn Aviation LLC\u2019s FBO", "description": [
    `Our visitors use the FBO for multiple purposes\u2013allow us to be as flexible as you need us. Explore how Pitcairn Aviation\u2019s FBO can best serve you and your needs upon arrival from crew cars to fueling stations. We welcome any and all requests!`
  ], "data-astro-cid-6w3uezxl": true })} ${maybeRenderHead()}<section id="timeline" class="bg-zinc-200 font-normal" data-astro-cid-6w3uezxl> <h1 class="text-5xl uppercase text-main-color text-center mb-5 px-5" data-astro-cid-6w3uezxl>
The Pitcairn Experience
</h1> <p class="text-center text-lg mb-5 px-5" data-astro-cid-6w3uezxl>
Leverage any combination of our unique services and FBO amenities
</p> <div class="demo-card-wrapper" data-astro-cid-6w3uezxl> ${renderComponent($$result2, "DemoCard", $$DemoCard, { "title": "The Crew Car", "stepNumber": 1, "image": CrewCar, "alt": "Pitcairn aviation staff with crew car", "description": [
    `After landing, our friendly line staff will greet you and offer the use of
      one of our courtesy crew cars\u2013perfect for running into town for a bite to
      eat or taking care of any local errands during your stay.`
  ], "data-astro-cid-6w3uezxl": true })} ${renderComponent($$result2, "DemoCard", $$DemoCard, { "title": "Rental Car Options", "stepNumber": 2, "image": RentalCar, "alt": "Car rental company logos", "description": [
    `For longer visits, rental cars offer great flexibility. Enterprise Rent-A-Car has a conveniently located rental counter right on the field. We can also arrange delivery of rental vehicles from Avis and Hertz.`,
    `After hours? No problem\u2013simply submit a request through our "Contact Us" form for car rental drop-off and pick-up.`
  ], "data-astro-cid-6w3uezxl": true })} ${renderComponent($$result2, "DemoCard", $$DemoCard, { "title": "Hangar Rentals", "stepNumber": 3, "image": Hangar, "alt": "Pitcairn Aviation hangar space", "description": [
    `Protect your aircraft with our hangar facilities. We offer rental options to meet your storage needs. Our staff will ensure your plane is safely secured in one of our spacious hangars. Tie-down spaces are also available.`
  ], "cta": "Hangar Rental Request", "ctaLink": "/hangar-rental-form", "data-astro-cid-6w3uezxl": true })} ${renderComponent($$result2, "DemoCard", $$DemoCard, { "title": "Hotels Nearby", "stepNumber": 4, "image": HotelsNearby, "alt": "Hotels nearby logos", "description": [
    `After a long flight, relax at one of the nearby hotels just a short drive from the airfield. We are conveniently located near Hampton Inn, Holiday Inn Express, and other hotel brands. Our line staff can assist with reserving a room and arranging transportation.`
  ], "data-astro-cid-6w3uezxl": true })} ${renderComponent($$result2, "DemoCard", $$DemoCard, { "title": "Business Spaces", "stepNumber": 5, "image": BusinessSpaces, "alt": "Pitcairn Aviation office space", "description": [
    `If you need to work on-site, take advantage of our business amenities including conference rooms, workstations, and comfortable lounges. High-speed WiFi and refreshments are complimentary to make your stay more productive and even more comfortable.`
  ], "data-astro-cid-6w3uezxl": true })} </div> <a href="/contact-us" class="btn-primary mx-auto w-fit block mt-10" data-astro-cid-6w3uezxl>Contact Us for More</a> </section> ${renderComponent($$result2, "VisitUs", $$VisitUs, { "data-astro-cid-6w3uezxl": true })} ${renderComponent($$result2, "FuelPrices", $$FuelPrices, { "data-astro-cid-6w3uezxl": true })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header2", $$Header2, { "slot": "header", "image": VisitPitcairn, "alt": "Visit Pitcairn Aviation in Pottstown PA", "data-astro-cid-6w3uezxl": true }, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Plan a Visit to <span class="text-main-color" data-astro-cid-6w3uezxl>KPTW</span> ` })}` })}` })}  `;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/plan-your-visit.astro", void 0);

const $$file = "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/plan-your-visit.astro";
const $$url = "/plan-your-visit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PlanYourVisit,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
