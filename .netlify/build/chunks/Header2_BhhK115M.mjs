import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, f as renderSlot } from './astro/server_CkN0ONMX.mjs';
import 'kleur/colors';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_4j2PhZoE.mjs';
import { N as Navbar } from './Navbar_D10Hmklf.mjs';

const $$Astro = createAstro("https://pitcairnaviation.com/");
const $$Header2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header2;
  const { image, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/Navbar", "client:component-export": "default" })} <div class="relative isolate pt-14 overflow-hidden h-[28rem] text-white flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": alt, "class": "absolute top-0 h-full object-cover -z-50" })} <div class="absolute inset-0 bg-black/50 bg-gradient-to-t from-black -z-40 to-40%"></div> <div class="max-w-7xl flex w-full mx-auto h-full items-end py-14"> <div class="max-w-5xl px-5"> <h1 class="text-5xl font-black sm:text-6xl uppercase animate-fade-in"> ${renderSlot($$result, $$slots["title"])} </h1> </div> </div> </div> </header>`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/Header2.astro", void 0);

export { $$Header2 as $ };
