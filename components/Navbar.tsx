"use client";
import { useState, useEffect } from "react";
import { SITE } from "@/lib/site";
import { aibeva, DOWNLOAD } from "@/lib/links";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-rule backdrop-blur-xl transition-colors duration-300 ${
      scrolled || open ? "bg-navy-950/90" : "bg-navy-950/80"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 h-16">
        <a href="/" className="flex items-center gap-2.5 min-w-0">
          <span className="w-8 h-8 shrink-0 rounded-[10px] border border-accent/60 flex items-center justify-center" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="#2fd6b8"/>
              <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#2fd6b8" strokeWidth="1" opacity="0.7"/>
              <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#2fd6b8" strokeWidth="1" opacity="0.7" transform="rotate(60 8 8)"/>
              <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#2fd6b8" strokeWidth="1" opacity="0.7" transform="rotate(120 8 8)"/>
            </svg>
          </span>
          <span className="font-display font-bold text-ink text-base sm:text-lg tracking-[0.04em] truncate">{SITE.name}</span>
        </a>

        <div className="hidden lg:flex items-center gap-6 text-[0.95rem]">
          {SITE.nav.map((l) => (
            <a key={l.label} href={l.href} className="text-soft hover:text-[#8fb6ff] transition-colors">
              {l.label}
            </a>
          ))}
          <a href={aibeva()} target="_blank" rel="noopener" className="text-soft hover:text-[#8fb6ff] transition-colors">
            AIBEVA ↗
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a href={DOWNLOAD} target="_blank" rel="noopener"
            className="hidden sm:inline-flex items-center bg-primary hover:bg-primary-hover text-white px-[18px] py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors">
            Download AIBEVA
          </a>
          <button className="lg:hidden p-2 text-soft hover:text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-900 border border-rule mx-3 mb-3 rounded-[18px] p-4 flex flex-col gap-1">
          {SITE.nav.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="px-4 py-2.5 text-[0.95rem] text-soft hover:text-ink hover:bg-white/[0.05] rounded-xl transition-colors">
              {l.label}
            </a>
          ))}
          <a href={aibeva()} target="_blank" rel="noopener" onClick={() => setOpen(false)}
            className="px-4 py-2.5 text-[0.95rem] text-soft hover:text-ink hover:bg-white/[0.05] rounded-xl transition-colors">
            AIBEVA ↗
          </a>
          <div className="border-t border-rule mt-2 pt-3">
            <a href={DOWNLOAD} target="_blank" rel="noopener" onClick={() => setOpen(false)}
              className="btn btn-primary w-full">
              Download AIBEVA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
