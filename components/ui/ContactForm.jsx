"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import Icon from "./Icon";

// Web3Forms works from a fully static site (GitHub Pages): the browser posts straight to their API.
// Setup steps are in the README ("Contact form").
const API_URL = "https://api.web3forms.com/submit";
const CAPTCHA_SCRIPT = "https://web3forms.com/client/script.js";

const field =
  "w-full rounded-[14px] border border-line bg-black/20 p-3.5 text-[14px] text-fg outline-none transition-colors duration-300 placeholder:text-muted focus:border-accent xl:p-[18px] xl:text-[15px]";

const ContactForm = ({ gridFields, subjectField, messageField, submit, fromName, status }) => {
  const [state, setState] = useState({ phase: "idle", message: "" });
  const sending = state.phase === "sending";

  // Load the hCaptcha helper from Web3Forms once.
  useEffect(() => {
    if (document.querySelector(`script[src="${CAPTCHA_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = CAPTCHA_SCRIPT;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const fail = (message) => setState({ phase: "error", message });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (see README, Contact form).");
      return fail(status.error);
    }

    // The captcha field only exists once the widget has loaded.
    const captcha = form.querySelector("textarea[name='h-captcha-response']");
    if (captcha && !captcha.value) return fail(status.captcha);

    setState({ phase: "sending", message: status.sending });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(new FormData(form)),
          access_key: accessKey,
          from_name: fromName,
        }),
      });

      if (!response.ok) {
        const details = await response.json().catch(() => null);
        console.error("Web3Forms rejected the message:", response.status, details);
        return fail(status.error);
      }

      form.reset();
      window.hcaptcha?.reset();
      setState({ phase: "success", message: status.success });
    } catch (error) {
      console.error("Web3Forms request failed:", error);
      fail(status.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:mb-[25px] xl:gap-[25px]">
        {gridFields.map((f) => (
          <input
            key={f.name}
            type={f.type}
            name={f.name}
            placeholder={f.placeholder}
            className={field}
            required
          />
        ))}
      </div>

      <input
        type={subjectField.type}
        name={subjectField.name}
        placeholder={subjectField.placeholder}
        className={`${field} mb-5 xl:mb-[25px]`}
        required
      />

      <textarea
        name={messageField.name}
        placeholder={messageField.placeholder}
        className={`${field} mb-7 block h-36 resize-none xl:mb-[35px] xl:h-[180px]`}
        required
      ></textarea>

      {/* hCaptcha widget, filled in by the Web3Forms script. Scaled down on narrow phones so it fits. */}
      <div className="mb-7 flex justify-center scale-[0.8] min-[370px]:scale-90 min-[420px]:scale-100">
        <div className="h-captcha" data-captcha="true" data-theme="dark"></div>
      </div>

      <div className="text-center">
        <Button type="submit" disabled={sending}>
          {sending ? status.sending : submit.label} <Icon name={submit.icon} />
        </Button>

        {state.message && !sending && (
          <p
            role={state.phase === "error" ? "alert" : "status"}
            className={`mt-5 text-[14px] ${
              state.phase === "error" ? "text-red-400" : "text-accent"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
