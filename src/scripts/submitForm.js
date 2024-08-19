export default function initializeForm(
  ghlWebhookUrl,
  recaptchaSiteKey,
  redirectUrl,
) {
  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
  script.async = true;
  document.head.appendChild(script);

  async function submitForm(e) {
    e.preventDefault();

    try {
      const recaptchaToken = await grecaptcha.execute(recaptchaSiteKey, {
        action: "submit",
      });

      const recaptchaResponse = await fetch("/recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recaptcha: recaptchaToken }),
      });

      const gResponse = await recaptchaResponse.json();

      if (gResponse.success) {
        await submitToGHL();
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  }

  async function submitToGHL() {
    const formData = new FormData(form);

    const confirmEmailValue = formData.get("confirm-email");
    if (!confirmEmailValue) {
      form.action = ghlWebhookUrl;
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        window.location.href = redirectUrl;
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Network error occurred while submitting the form:", error);
    }
  }

  const form = document.getElementById("form");
  form.addEventListener("submit", submitForm);
}
