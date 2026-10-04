"use client";
import { openConsent } from "./Consent";

export default function CookieSettings({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openConsent} className={className}>
      Cookie settings
    </button>
  );
}
