import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from './astro/server_CkN0ONMX.mjs';
import 'kleur/colors';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_4j2PhZoE.mjs';

const $$Astro$1 = createAstro("https://pitcairnaviation.com/");
const $$Section2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section2;
  const { image, alt, title, subtitle, content, id, cta, ctaLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16"${addAttribute(id, "id")}> <div class="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row gap-10"> <div class="flex-1"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": alt })} </div> <div class="flex-1 flex flex-col gap-3 pt-3 items-start"> <h2 class="text-main-color text-sm font-bold uppercase fade-in duration-500 opacity-0 delay-100"> ${title} </h2> <p class="text-2xl font-semibold fade-in duration-500 opacity-0 delay-200"> ${subtitle} </p> <p class="text-lg fade-in duration-500 opacity-0 delay-300"> ${content} </p> ${cta && renderTemplate`<a${addAttribute(ctaLink, "href")} class="btn-primary fade-in duration-500 opacity-0"> ${cta} </a>`} </div> </div> </section>`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/Section2.astro", void 0);

const $$Astro = createAstro("https://pitcairnaviation.com/");
const $$Section1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section1;
  const { image, alt, title, subtitle, content, id, cta, ctaLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="h-[35rem] relative overflow-hidden font-inter flex justify-start items-center align-middle"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "absolute -top-[50%] -z-50 object-cover min-h-[55rem] w-full", "alt": alt })} <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 -z-10"></div> <div class="text-white px-6 lg:pl-24"> <h2 class="text-main-color brightness-125 text-base font-bold leading-none uppercase fade-in duration-500 opacity-0 delay-100"> ${title} </h2> <p class="text-4xl font-bold font-paragraph max-w-md fade-in duration-500 opacity-0 delay-200"> ${subtitle} </p> <p class="max-w-md mt-4 mb-12 text-lg fade-in duration-500 opacity-0 delay-300"> ${content} </p> ${cta && renderTemplate`<a${addAttribute(ctaLink, "href")} class="btn-primary fade-in duration-500 opacity-0"> ${cta} </a>`} </div> </section>`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/Section1.astro", void 0);

const Fleet = new Proxy({"src":"/_astro/fleet-at-pitcairn-aviation-fbo.zk21PqyW.jpg","width":1934,"height":1218,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/assets/fleet-at-pitcairn-aviation-fbo.jpg";
							}
							
							return target[name];
						}
					});

export { $$Section2 as $, Fleet as F, $$Section1 as a };
