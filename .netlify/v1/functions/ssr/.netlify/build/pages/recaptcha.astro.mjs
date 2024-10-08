export { renderers } from '../renderers.mjs';

const RECAPTCHA_SECRET_KEY = undefined                                    ;
const prerender = false;
async function POST({ request }) {
  const data = await request.json();
  const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";
  const requestHeaders = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const requestBody = new URLSearchParams({
    secret: RECAPTCHA_SECRET_KEY,
    response: data.recaptcha
  });
  const response = await fetch(recaptchaURL, {
    method: "POST",
    headers: requestHeaders,
    body: requestBody.toString()
  });
  const responseData = await response.json();
  return new Response(JSON.stringify(responseData), { status: 200 });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
