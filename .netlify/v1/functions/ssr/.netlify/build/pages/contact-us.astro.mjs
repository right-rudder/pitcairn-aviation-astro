/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_CkN0ONMX.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/Navbar_D10Hmklf.mjs';
import { A as AirplaneWing } from '../chunks/airplane-wing_CeAx1sRo.mjs';
import { $ as $$Header2 } from '../chunks/Header2_BhhK115M.mjs';
import { $ as $$FormScript } from '../chunks/FormScript_B-YhlLAv.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact Us | Pitcairn Aviation LLC", "description": "Get in touch with Pitcairn Aviation at Heritage Field Airport. Contact us for information on our FBO services, hangar rentals, and aviation support in Pottstown, PA. Our team is ready to assist you with all your aviation needs.", "keywords": "contact Pitcairn Aviation, Heritage Field Airport, FBO services, hangar rentals, aviation support, Pottstown PA, fixed-base operator, aviation inquiries, get in touch" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative overflow-hidden"> <div class="lg:flex relative hidden lg:absolute lg:h-full lg:w-full bg-main-color lg:bg-main-color -z-50"> <div class="bg-main-color w-[calc(50%+65rem)] duration-700 ease-in-out h-full -left-24 slide absolute -skew-x-6 -z-10 pointer-events-auto"></div> <div class="bg-main-color w-[calc(50%+65rem)] duration-700 ease-in-out h-full -left-24 slide absolute skew-x-6 -z-10 pointer-events-auto"></div> <div class="bg-main-color lg:bg-white w-[calc(50%+3rem)] translate-x-[calc(100%-5rem)] h-full absolute -z-20 pointer-events-auto"></div> </div> <div class="flex py-16 flex-col w-full lg:flex-row max-w-7xl mx-auto lg:items-center lg:gap-72 bg-zinc-200 lg:bg-transparent p-5 justify-center gap-10" id="contact-us-form"> <h2 class="lg:flex-1 text-4xl lg:text-5xl text-black lg:text-white uppercase fade-in opacity-0 duration-700">
Please let us know how to best serve you and your aircraft!
</h2> <div class="lg:flex-1 h-full text-white lg:text-black flex flex-col gap-3 fade-left opacity-0 translate-x-10 duration-700 delay-500"> <form class="h-full" method="POST" id="form"> <div class="flex flex-col gap-5 justify-between h-full"> <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> <div class="sm:col-span-3"> <label for="first-name" class="block px-2 text-sm font-medium leading-6 text-gray-900">First name</label> <div class="mt-2"> <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-6" required> </div> </div> <div class="sm:col-span-3"> <label for="last-name" class="block px-2 text-sm font-medium leading-6 text-gray-900">Last name</label> <div class="mt-2"> <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-6" required> </div> </div> <div class="sm:col-span-4"> <label for="email" class="block px-2 text-sm font-medium leading-6 text-gray-900">Email address</label> <div class="mt-2"> <input id="email" name="email" type="email" autocomplete="email" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-6" required> </div> </div> <label class="hidden">
Don't fill this out if you're human:
<input name="confirm-email"> </label> <div class="sm:col-span-2"> <label for="phone" class="block px-2 text-sm font-medium leading-6 text-gray-900">Phone</label> <div class="mt-2"> <input id="phone" name="phone" type="tel" autocomplete="phone" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-color sm:text-sm sm:leading-6" required> </div> </div> </div> <hr class="border border-gray-900/10"> <fieldset> <legend class="text-sm font-semibold leading-6 text-gray-900">Services Interested:</legend> <div class="mt-2 space-y-1"> <div class="relative flex gap-x-3"> <div class="flex h-6 items-center"> <input id="fueling" value="Fueling" name="services-interested" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-main-color focus:ring-main-color"> </div> <div class="text-sm leading-6"> <label for="fueling" class="text-gray-900">Fueling</label> </div> </div> <div class="relative flex gap-x-3"> <div class="flex h-6 items-center"> <input id="rental-car" value="Rental Car" name="services-interested" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-main-color focus:ring-main-color"> </div> <div class="text-sm leading-6"> <label for="rental-car" class="text-gray-900">Rental Car
</label> </div> </div> <div class="relative flex gap-x-3"> <div class="flex h-6 items-center"> <input id="hangar-rental" value="Hangar Rental" name="services-interested" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-main-color focus:ring-main-color"> </div> <div class="text-sm leading-6"> <label for="hangar-rental" class="text-gray-900">Hangar Rental
</label> </div> </div> <div class="relative flex gap-x-3"> <div class="flex h-6 items-center"> <input id="accommodation" value="Accomodation" name="services-interested" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-main-color focus:ring-main-color"> </div> <div class="text-sm leading-6"> <label for="accommodation" class="text-gray-900">Hotel / Accommodation Assistance
</label> </div> </div> <div class="relative flex gap-x-3"> <div class="flex h-6 items-center"> <input id="business-services" value="Business Services" name="services-interested" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-main-color focus:ring-main-color"> </div> <div class="text-sm leading-6"> <label for="business-services" class="text-gray-900">Business Services
</label> </div> </div> </div> </fieldset> <hr class="border border-gray-900/10"> <fieldset> <div class="col-span-full"> <label for="how-can-we-help" class="block text-sm font-medium leading-6 text-gray-900">How can we help?
</label> <div class="mt-2"> <textarea id="how-can-we-help" name="how-can-we-help" rows="3" class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea> </div> </div> </fieldset> <button type="submit" class="btn-primary self-end">Submit</button> </div> </form> </div> </div> </section> `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header2", $$Header2, { "slot": "header", "image": AirplaneWing, "alt": "Airplane flying above Heritage Field Airport" }, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Contact <span class="text-main-color">Us</span> ` })}` })}` })} ${renderComponent($$result, "FormScript", $$FormScript, { "redirect": "/contact-confirmation" })} `;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/contact-us.astro", void 0);

const $$file = "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/contact-us.astro";
const $$url = "/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
