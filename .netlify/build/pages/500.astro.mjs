/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_CkN0ONMX.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/Navbar_D10Hmklf.mjs';
import { A as AirplaneWing } from '../chunks/airplane-wing_CeAx1sRo.mjs';
import { $ as $$Header2 } from '../chunks/Header2_BhhK115M.mjs';
export { renderers } from '../renderers.mjs';

const $$500 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "500 Server Error | Pitcairn Aviation LLC", "description": "500 Server Error Page for Pitcairn Aviation LLC" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="flex justify-center px-5 py-32"> <div class="text-center flex flex-col gap-8"> <svg class="size-20 text-main-color mx-auto" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></path></svg> <h1 class="font-bold text-4xl">Oops, something went wrong.</h1> <p>
Try refreshing the page or come back later. We apologize for the
        inconvenience.
</p> <div class="flex flex-row justify-center"> <a href="/"> <div class="btn-primary">Homepage</div> </a> </div> </div> </section> `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header2", $$Header2, { "slot": "header", "image": AirplaneWing, "alt": "Airplane flying above Heritage Field Airport" }, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`500 <span class="text-main-color">Server Error</span> ` })}` })}` })}`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/500.astro", void 0);

const $$file = "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$500,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
