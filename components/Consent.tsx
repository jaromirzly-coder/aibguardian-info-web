"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

// Google Analytics 4 behind Consent Mode v2: the default (all denied) is set inline in
// app/layout.tsx; gtag.js is loaded only after the visitor clicks "Accept".
const STORAGE_KEY = `${SITE.short}-consent`;
const OPEN_EVENT = `${SITE.short}:open-consent`;

const AIBLAB_SITES = [
  "aibeva.com", "aiblab.info", "aibsn.org", "aibguardian.info", "aibgin.info",
  "aibfamily.cloud", "iamyouraib.online", "jayjspringpeace.online",
];

type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readChoice(): Choice | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice holds for this page view only.
  }
}

// window.gtag is defined by the inline Consent Mode script in app/layout.tsx.
function gtag(...args: unknown[]) {
  window.gtag?.(...args);
}

let gaLoaded = false;

function loadGa() {
  gtag("consent", "update", { analytics_storage: "granted" });
  if (gaLoaded) return;
  gaLoaded = true;
  gtag("js", new Date());
  gtag("config", SITE.gaId, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`;
  document.head.appendChild(s);
}

function revokeGa() {
  gtag("consent", "update", { analytics_storage: "denied" });
  // Remove any GA cookies set under an earlier "Accept".
  const host = window.location.hostname;
  document.cookie.split(";").map((c) => c.split("=")[0].trim()).filter((n) => n === "_ga" || n.startsWith("_ga_")).forEach((n) => {
    for (const domain of ["", `; domain=${host}`, `; domain=.${host.replace(/^www\./, "")}`]) {
      document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  });
}

function trackClick(e: MouseEvent) {
  if (readChoice() !== "granted" || !gaLoaded) return;
  const a = (e.target as Element | null)?.closest?.("a");
  const href = a?.getAttribute("href");
  if (!href) return;

  if (href.startsWith("mailto:")) {
    gtag("event", "email_click", { address: href.slice(7).split("?")[0] });
    return;
  }
  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return;
  }
  const host = url.hostname.replace(/^www\./, "");
  if (host === "dl.aibeva.com" || (host === "aibeva.com" && url.pathname.replace(/\/$/, "") === "/download")) {
    gtag("event", "download_click", { link_url: url.href });
  } else if (AIBLAB_SITES.includes(host) && host !== SITE.domain) {
    gtag("event", "outbound_click", { url: url.href });
  }
}

export function openConsent() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function Consent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const choice = readChoice();
    if (choice === "granted") loadGa();
    else if (choice === null) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    document.addEventListener("click", trackClick, true);
    return () => {
      window.removeEventListener(OPEN_EVENT, reopen);
      document.removeEventListener("click", trackClick, true);
    };
  }, []);

  const decide = (choice: Choice) => {
    saveChoice(choice);
    if (choice === "granted") loadGa();
    else revokeGa();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div role="dialog" aria-live="polite" aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="max-w-3xl mx-auto rounded-2xl border border-gold/60 bg-navy-900/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-5 sm:p-6">
        <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed">
          We use Google Analytics cookies to understand how this site is used — only if you agree. No ads, no tracking pixels.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="grid grid-cols-2 gap-3 sm:w-80">
            <button type="button" onClick={() => decide("granted")}
              className="px-5 py-2.5 rounded-xl border border-white/30 text-white text-sm font-bold hover:bg-white/[0.08] transition-colors">
              Accept
            </button>
            <button type="button" onClick={() => decide("denied")}
              className="px-5 py-2.5 rounded-xl border border-white/30 text-white text-sm font-bold hover:bg-white/[0.08] transition-colors">
              Reject
            </button>
          </div>
          <a href="/privacy-policy" className="text-sm text-slate-400 hover:text-white underline underline-offset-4 text-center sm:text-left sm:ml-2">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
