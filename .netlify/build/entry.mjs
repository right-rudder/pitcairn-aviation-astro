import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CXQeobQ2.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/500.astro.mjs');
const _page3 = () => import('./pages/about-us.astro.mjs');
const _page4 = () => import('./pages/contact-confirmation.astro.mjs');
const _page5 = () => import('./pages/contact-us.astro.mjs');
const _page6 = () => import('./pages/hangar-rental-form.astro.mjs');
const _page7 = () => import('./pages/plan-your-visit.astro.mjs');
const _page8 = () => import('./pages/privacy-policy.astro.mjs');
const _page9 = () => import('./pages/recaptcha.astro.mjs');
const _page10 = () => import('./pages/services.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/500.astro", _page2],
    ["src/pages/about-us.astro", _page3],
    ["src/pages/contact-confirmation.astro", _page4],
    ["src/pages/contact-us.astro", _page5],
    ["src/pages/hangar-rental-form.astro", _page6],
    ["src/pages/plan-your-visit.astro", _page7],
    ["src/pages/privacy-policy.astro", _page8],
    ["src/pages/recaptcha.js", _page9],
    ["src/pages/services.astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0f7415a1-58eb-45c1-bcf1-d4bde46403c9"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
