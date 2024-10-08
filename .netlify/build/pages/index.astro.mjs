/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_CkN0ONMX.mjs';
import 'kleur/colors';
import 'html-escaper';
import { N as Navbar, $ as $$BaseLayout } from '../chunks/Navbar_D10Hmklf.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_4j2PhZoE.mjs';
import { a as $$Section1, F as Fleet, $ as $$Section2 } from '../chunks/fleet-at-pitcairn-aviation-fbo_BzyzlrKn.mjs';
import { $ as $$Intro, a as $$FuelPrices } from '../chunks/Intro_5TDIC5NU.mjs';
import { H as Hangar } from '../chunks/pitcairn-aviation-hangar-space_DvbJ5kXu.mjs';
export { renderers } from '../renderers.mjs';

const Airport = new Proxy({"src":"/_astro/heritage-field-airport.DRKLhkUN.webp","width":1300,"height":720,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/heritage-field-airport.webp";
							}
							
							return target[name];
						}
					});

const PitcairnFlightAcademyLogo = new Proxy({"src":"/_astro/pitcairn-flight-academy-logo.BcRc5mnJ.webp","width":402,"height":55,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/pitcairn-flight-academy-logo.webp";
							}
							
							return target[name];
						}
					});

const PennairLogo = new Proxy({"src":"/_astro/pennair-logo.uUsb-ygl.webp","width":250,"height":202,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/pennair-logo.webp";
							}
							
							return target[name];
						}
					});

const HeroImage = new Proxy({"src":"/_astro/pitcairn-aviation-fbo-front-office.CbDvmrjw.jpg","width":6000,"height":4000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/pitcairn-aviation-fbo-front-office.jpg";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="font-inter"> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/Navbar", "client:component-export": "default" })} <div class="relative isolate pt-14 overflow-hidden h-[101vh] text-white flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": HeroImage, "alt": "Pitcairn Aviation FBO Front Office", "class": "absolute top-0 h-full object-cover -z-50", "quality": 10 })} <div class="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/60 to-black/30 -z-40"></div> <div class="max-w-7xl flex w-full mx-auto"> <div class="max-w-2xl py-32 sm:py-48 lg:py-56 px-5 animate-fade-in"> <h1 class="text-3xl lg:text-6xl font-black tracking-tight leading-none sm:text-6xl uppercase">
You've <span class="text-main-color">arrived</span> </h1> <p class="mt-1 text-xl leading-8">
Exceptional aviation services await at Heritage Field Airport (KPTW)
</p> <a href="/contact-us#contact-us-form" class="inline-block mt-9 uppercase py-3 px-6 border text-center bg-white/30 font-bold rounded-md hover:bg-white/80 duration-300 hover:text-black">Visit Us Today</a> </div> </div> </div> </header>`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/Header.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Aviation services at Heritage Field Airport (KPTW) | Pitcairn Aviation LLC", "description": "Pitcairn Aviation offers premier fixed-base operator (FBO) services at Heritage Field Airport in Pottstown, PA. From fueling and maintenance to hangar rentals and concierge services, we provide top-tier aviation support. Discover why pilots choose Pitcairn Aviation for all their aviation needs.", "keywords": "Pitcairn Aviation, Heritage Field Airport, FBO services, fixed-base operator Pottstown, aviation services Pottstown, PA, fueling services, aircraft maintenance, hangar rentals, concierge services, aviation support" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Intro", $$Intro, { "title": "Your full service aviation partner", "description": [
    `Pitcairn Aviation LLC is the trusted fixed-base operator (FBO) at Heritage Field Airport (KPTW) in Pottstown, PA. Just a short 30-minute flight from Philadelphia, our full-service FBO offers a warm welcome and modern amenities for pilots and aircraft visiting the scenic southeastern Pennsylvania region.`,
    `From efficient fueling and ground handling to well-appointed lounges and hangars, we ensure your stopover is comfortable and hassle-free.`
  ], "cta": "Reach Out Today", "ctaLink": "/contact-us#contact-us-form" })} ${renderComponent($$result2, "Section1", $$Section1, { "image": Fleet, "alt": "Pitcairn Aviation fleet", "title": "The Pitcairn Promise", "subtitle": "Our Experienced Team is Here to Serve", "content": `From the moment you land, our team is ready to make your visit exceptional. In addition to swift fueling and marshaling, we offer a wide range of professional services including aircraft detailing, concierge arrangements, crew cars, and more. We aim to ensure your every need is met with efficiency and a smile.`, "cta": "Explore our services", "ctaLink": "/services" })} ${renderComponent($$result2, "Section2", $$Section2, { "image": Hangar, "alt": "Pitcairn Aviation hangar space", "title": "Hangar Rentals", "subtitle": "Looking for a hangar?", "content": `Pitcairn Aviation provides secure hangar facilities to protect your aircraft from the elements. Contact us today to learn about hangar accommodations and discuss the length of your rental.`, "cta": "Rent Hangar Space", "ctaLink": "/hangar-rental-form" })} ${renderComponent($$result2, "Section1", $$Section1, { "image": Airport, "alt": "Heritage Field Airport", "title": "Stop by and say hi", "subtitle": "Visit Heritage Field Airport", "content": `Experience the award-winning service that's made Pitcairn Aviation a
  trusted name in the region. Plan your visit to Heritage Field (KPTW) and
  discover our beautiful facility tucked into the rolling Pennsylvania
  countryside. Our central location and proximity to Philadelphia make us
  an ideal tech stop.`, "cta": "Plan Your Visit", "ctaLink": "/plan-your-visit" })} ${maybeRenderHead()}<section class="flex overflow-hidden relativebg-white -z-50"> <div class="flex py-16 flex-col max-w-7xl mx-auto h-full lg:items-center p-5 justify-center gap-10"> <div class="flex flex-col gap-2 text-center"> <h2 class="text-5xl uppercase text-main-color">
Other Companies at Heritage Field
</h2> <h3 class="text-base lg:text-lg">
Heritage Field Airport is also home to several specialized aviation
          businesses to meet all your needs:
</h3> </div> <div class="lg:text-black flex flex-col lg:flex-row items-center justify-center gap-10 my-10 fade-up delay-100 duration-700 translate-y-10 opacity-0"> <a href="https://pitcairnflightacademy.com/" target="_blank" class="h-auto w-1/2 lg:w-1/2 hover:scale-105 duration-300"> ${renderComponent($$result2, "Image", $$Image, { "src": PitcairnFlightAcademyLogo, "alt": "Pitcairn Flight Academy logo" })} </a> <span class="h-auto w-1/4 lg:w-1/5 hover:scale-105 duration-300"> ${renderComponent($$result2, "Image", $$Image, { "src": PennairLogo, "alt": "Pennair logo" })} </span> </div> <ul class="text-center"> <li> <strong>Pitcairn Flight Academy:</strong> Providing top-rated pilot training
          and certifications
</li> <li> <strong>PennAir Repair:</strong> Experts in aircraft maintenance and inspections
</li> <li> <strong>PennJet Charter Services:</strong> Luxury private charter and aircraft
          management
</li> </ul> </div> </section> ${renderComponent($$result2, "FuelPrices", $$FuelPrices, {})} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header" })}` })} `;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/index.astro", void 0);

const $$file = "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
