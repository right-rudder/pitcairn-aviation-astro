import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro } from './astro/server_CkN0ONMX.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$FuelPrices = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(
    "https://www.iflightplanner.com/API/FuelPrices/PricesForLocation.aspx?ID=FyERFc2d"
  );
  const data = await response.json();
  const [price1, price2, price3] = data.prices;
  const reportDate = data.reportDate;
  const fullServeJetAUnitPrice = price1.unitPrice;
  const selfServe100LLUnitPrice = price2.unitPrice;
  const fullServe100LLUnitPrice = price3.unitPrice;
  const stats = [
    {
      type: "Self Service",
      value: `$${selfServe100LLUnitPrice}`,
      name: "100 LL",
      color: "green"
    },
    {
      type: "Full Service",
      value: `$${fullServe100LLUnitPrice}`,
      name: "100 LL",
      color: "green"
    },
    {
      type: "Full Service",
      value: `$${fullServeJetAUnitPrice}`,
      name: "Jet A",
      color: "blue"
    }
  ];
  function formatReportDate(timestamp) {
    const date = new Date(timestamp * 1e3);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds} UTC`;
    return formattedDateTime;
  }
  const formattedDate = formatReportDate(reportDate);
  return renderTemplate`${maybeRenderHead()}<section class="bg-main-black py-10 px-5" id="fuel-prices"> <div class="max-w-7xl mx-auto flex flex-col gap-2"> <h2 class="text-white text-4xl uppercase">Fuel Prices</h2> <h3 class="text-white text-lg">
We prioritize keeping our fuel prices competitive for your convenience.
</h3> <div class="mx-auto grid gap-2 md:grid-cols-3 w-full"> ${stats.map((stat) => renderTemplate`<dl${addAttribute(`fade-up delay-100 duration-700 translate-y-10 opacity-0 flex relative overflow-hidden flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-gradient-to-b from-light-${stat.color} to-main-${stat.color} rounded-xl px-4 py-10 sm:px-6 xl:px-8`, "class")}> <dt class="text-white/5 absolute -bottom-3 -right-2 text-8xl font-extrabold whitespace-nowrap"> ${stat.name} </dt> <dt class="text-white/80 absolute bottom-2 right-3 text-3xl font-extrabold flex items-baseline gap-2"> ${stat.name} </dt> <dd class="text-sm font-medium leading-6 text-gray-200"> ${stat.type} </dd> <dd class="w-full flex-none text-5xl font-medium leading-10 tracking-tight text-white"> ${stat.value} </dd> </dl>`)} </div> <p class="text-gray-500 self-end text-sm">Updated as of ${formattedDate}</p> </div> </section>`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/FuelPrices.astro", void 0);

const $$Astro = createAstro("https://pitcairnaviation.com/");
const $$Intro = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Intro;
  const { title, description, cta, ctaLink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden"> <div class="lg:flex relative hidden lg:h-96 bg-main-color lg:bg-main-color -z-50"> <div class="bg-main-color w-[calc(50%+65rem)] duration-700 ease-in-out h-full -left-24 absolute -skew-x-12 -z-10 slide"></div> <div class="bg-main-color w-[calc(50%+65rem)] duration-700 ease-in-out h-full -left-24 absolute skew-x-12 -z-10 slide"></div> <div class="bg-main-color lg:bg-white w-[calc(50%+3rem)] translate-x-[calc(100%-5rem)] h-full absolute -z-20"></div> </div> <div class="flex py-16 flex-col lg:flex-row max-w-7xl mx-auto h-full lg:items-center lg:gap-72 p-5 justify-center gap-10 lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 w-full bg-main-color lg:bg-transparent"> <h2 class="lg:flex-1 text-4xl lg:text-5xl text-white uppercase fade-in opacity-0 duration-700"> ${title} </h2> <div class="lg:flex-1 flex flex-col items-start gap-5 fade-left opacity-0 translate-x-10 duration-700 delay-500"> <div class="text-white lg:text-black flex flex-col gap-3"> ${description.map((paragraph) => renderTemplate`<p>${paragraph}</p>`)} </div> ${cta && renderTemplate`<a${addAttribute(ctaLink, "href")} class="btn-primary-responsive"> ${cta} </a>`} </div> </div> </section>`;
}, "/Users/raminka/Developer/right-rudder/pitcairn-aviation-astro/src/components/Intro.astro", void 0);

export { $$Intro as $, $$FuelPrices as a };
