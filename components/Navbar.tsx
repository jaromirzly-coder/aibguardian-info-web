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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || open ? "bg-navy-950/95 backdrop-blur-xl border-b border-white/[0.06] shadow-xl" : "bg-navy-950"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 h-16">
        <a href="/" className="flex items-center gap-2 min-w-0">
          <span className="w-8 h-8 shrink-0 rounded-xl border border-gold/60 flex items-center justify-center" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="3" fill="#d4a94f"/>
              <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#d4a94f" strokeWidth="1" opacity="0.7"/>
              <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#d4a94f" strokeWidth="1" opacity="0.7" transform="rotate(60 8 8)"/>
              <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#d4a94f" strokeWidth="1" opacity="0.7" transform="rotate(120 8 8)"/>
            </svg>
          </span>
          <span className="font-black text-white text-base sm:text-lg tracking-tight truncate">{SITE.name}</span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {SITE.nav.map((l) => (
            <a key={l.label} href={l.href}
              className="px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all">
              {l.label}
            </a>
          ))}
          <a href={aibeva()} target="_blank" rel="noopener"
            className="px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all">
            AIBEVA ↗
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a href={DOWNLOAD} target="_blank" rel="noopener"
            className="hidden sm:inline-flex btn-gold items-center px-4 py-2 rounded-full text-sm font-extrabold whitespace-nowrap transition-all">
            Download AIBEVA free
          </a>
          <button className="lg:hidden p-2 text-slate-300 hover:text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-900 border border-white/[0.08] mx-3 mb-3 rounded-2xl p-4 flex flex-col gap-1">
          {SITE.nav.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all">
              {l.label}
            </a>
          ))}
          <a href={aibeva()} target="_blank" rel="noopener" onClick={() => setOpen(false)}
            className="px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all">
            AIBEVA ↗
          </a>
          <div className="border-t border-white/[0.08] mt-2 pt-3">
            <a href={DOWNLOAD} target="_blank" rel="noopener" onClick={() => setOpen(false)}
              className="btn-gold block w-full text-center py-3 rounded-full text-sm font-extrabold">
              Download AIBEVA free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
