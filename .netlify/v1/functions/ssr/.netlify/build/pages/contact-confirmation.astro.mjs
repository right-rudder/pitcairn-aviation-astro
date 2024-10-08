/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../chunks/astro/server_CkN0ONMX.mjs';
import 'kleur/colors';
import 'html-escaper';
import { P as PHONE_NUMBER, $ as $$BaseLayout } from '../chunks/Navbar_D10Hmklf.mjs';
import { A as AirplaneWing } from '../chunks/airplane-wing_CeAx1sRo.mjs';
import { $ as $$Header2 } from '../chunks/Header2_BhhK115M.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactConfirmation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact Confirmation | Pitcairn Aviation LLC" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="flex justify-center"> <div class="text-center lg:w-3/5 md:w-4/5"> <h1 class="font-bold text-4xl py-10">Thank you for contacting us.</h1> <!--Container for check--> <div class="flex flex-row justify-center"> <!--circle of check--> <div class="bg-green-200 rounded-full py-3 px-4 mb-10"> <!--check itself--> <div class="text-green-700 text-5xl">✓</div> </div> </div> <p class="px-5">
Thank you for contacting Pitcairn Aviation. We are looking forward to
        working with you soon. We will review your message and get back with you
        within 1-5 business days. <br><br>
You can also give us a call at <a${addAttribute(`tel:${PHONE_NUMBER}`, "href")} class="hover:underline hover:text-main-color">${PHONE_NUMBER}</a>.
<!-- or email us at <a
          href=\`mailto:\${EMAIL_ADDRESS}\`
          class="hover:underline hover:text-main-color">{EMAIL_ADDRESS}</a
        > --> </p> <div class="pt-10 flex flex-row justify-center"> <a href="/"> <div class="btn-primary mb-10 w-52">HOME</div> </a> </div> </div> </section> `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header2", $$Header2, { "slot": "header", "image": AirplaneWing, "alt": "Airplane flying above Heritage Field Airport" }, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Contact <span class="text-main-color">Us</span> ` })}` })}` })}`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/contact-confirmation.astro", void 0);

const $$file = "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/contact-confirmation.astro";
const $$url = "/contact-confirmation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactConfirmation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
