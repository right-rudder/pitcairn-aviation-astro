/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_CkN0ONMX.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/Navbar_D10Hmklf.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_4j2PhZoE.mjs';
import { $ as $$Intro, a as $$FuelPrices } from '../chunks/Intro_5TDIC5NU.mjs';
import { $ as $$Header2 } from '../chunks/Header2_BhhK115M.mjs';
import { $ as $$VisitUs } from '../chunks/VisitUs_qPbk5VZy.mjs';
export { renderers } from '../renderers.mjs';

const FBOServices = new Proxy({"src":"/_astro/pitcairn-fbo-aviation-services.vus43KWJ.jpg","width":5923,"height":2396,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/pitcairn-fbo-aviation-services.jpg";
							}
							
							return target[name];
						}
					});

const PitcairnTeam = new Proxy({"src":"/_astro/pitcairn-team.C0SwLHDM.webp","width":750,"height":750,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/pitcairn-team.webp";
							}
							
							return target[name];
						}
					});

const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Us | Pitcairn Aviation LLC", "description": "Learn about Pitcairn Aviation, the leading FBO at Heritage Field Airport in Pottstown, PA. Discover our commitment to exceptional aviation services, experienced team, and state-of-the-art facilities. Join us for a premier aviation experience.", "keywords": "about Pitcairn Aviation, Heritage Field Airport, FBO Pottstown, aviation services, experienced aviation team, state-of-the-art facilities, fixed-base operator, Pottstown PA" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Intro", $$Intro, { "title": "Our story, location, and FAA information", "description": [
    `Located at Heritage Field Airport (KPTW) near Pottstown, Pennsylvania, Pitcairn Aviation LLC is a full-service fixed-base operator dedicated to providing exceptional services and amenities to pilots and aircraft owners.`
  ] })} ${maybeRenderHead()}<section class="bg-zinc-200 py-10 lg:py-20"> <div class="max-w-7xl mx-auto flex flex-col gap-20 px-5"> <div class="text-center max-w-5xl flex flex-col gap-5 mx-auto"> <h2 class="text-main-color font-semibold text-4xl uppercase">
About the FBO
</h2> <p class="text-xl">
At Pitcairn Aviation LLC, our mission is to create a welcoming and
          vibrant aviation community at Heritage Field Airport. We offer a wide
          range of services to support both local and transient aircraft
          operations, including fuel sales, aircraft maintenance, hangar
          rentals, and concierge services for pilots and passengers.
</p> </div> <div class="bg-white px-5 py-20 md:p-20 flex flex-col lg:flex-row gap-10 lg:mr-40"> <div class="flex-1 flex flex-col gap-10"> <h3 class="text-3xl uppercase font-semibold fade-up translate-y-10 opacity-0 duration-300">
Welcome to Pitcairn Aviation LLC.
</h3> <div class="flex flex-col gap-5"> <p class="fade-up translate-y-10 opacity-0 duration-300 delay-100">
Our team of experienced aviation professionals is dedicated to
              providing exceptional customer service and ensuring a seamless
              experience for all who visit our FBO. From the moment you land at
              Heritage Field Airport, you'll be greeted with a warm welcome and
              assisted with any needs you may have.
</p> <p class="fade-up translate-y-10 opacity-0 duration-300 delay-100">
Pitcairn Aviation LLC is committed to the continuous improvement
              and development of Heritage Field Airport. We have plans to
              construct additional commercial hangars and enhance the airport's
              infrastructure, making it an even more attractive destination for
              aviators and aviation enthusiasts alike.
</p> <p class="fade-up translate-y-10 opacity-0 duration-300 delay-100">
With a deep appreciation for the rich history of aviation and a
              passion for paving the way for future generations of pilots,
              Pitcairn Aviation LLC invites you to experience the exceptional
              services and amenities we have to offer. Whether you're a local
              pilot, an aircraft owner, or simply an aviation enthusiast, our
              FBO is your gateway to the skies and the heart of the aviation
              community at Heritage Field Airport.
</p> </div> </div> <div class="flex-1 fade-up translate-y-10 opacity-0 duration-300 delay-300"> ${renderComponent($$result2, "Image", $$Image, { "src": PitcairnTeam, "alt": "Pitcairn Team", "class": "lg:scale-150 lg:translate-x-32 lg:translate-y-44 shadow-lg shadow-gray-600" })} </div> </div> </div> </section> <section class="flex overflow-hidden relativebg-white -z-50"> <div class="flex py-16 flex-col max-w-7xl mx-auto h-full lg:items-center p-5 justify-center gap-10"> <div class="flex flex-col gap-2 text-center"> <h2 class="text-5xl uppercase text-main-color">PILOT INFORMATION</h2> <h3 class="text-base lg:text-lg">
Please visit one of the following aeronautical information websites
          and the most recently published Chart Supplement.
</h3> </div> <div class="lg:text-black flex flex-col lg:flex-row items-center justify-center gap-10 my-5 fade-up delay-100 duration-700 translate-y-10 opacity-0"> <a href="https://skyvector.com/airport/PTW/Heritage-Field-Airport" class="px-10 py-3 bg-main-blue text-white uppercase text-lg font-semibold rounded-lg shadow-lg hover:bg-light-blue duration-300" target="_blank">SkyVector</a> <a href="https://www.airnav.com/airport/KPTW" class="px-10 py-3 bg-main-green text-white uppercase text-lg font-semibold rounded-lg shadow-lg hover:bg-light-green duration-300" target="_blank">AirNav</a> </div> </div> </section> ${renderComponent($$result2, "VisitUs", $$VisitUs, {})} ${renderComponent($$result2, "FuelPrices", $$FuelPrices, {})} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header2", $$Header2, { "slot": "header", "image": FBOServices, "alt": "Pitcairn FBO Aviation Services" }, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Get to Know <span class="text-main-color">Pitcairn FBO</span> ` })}` })}` })} `;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/about-us.astro", void 0);

const $$file = "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/about-us.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AboutUs,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
