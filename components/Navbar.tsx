"use client";
import { useState } from "react";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Verdicts", href: "#verdicts" },
  { label: "Architecture", href: "#architecture" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1f3d]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-1">
          <span className="text-xl font-extrabold text-white">AIB</span>
          <span className="text-xl font-extrabold text-red-400">guardian</span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-white/70">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://aibgin.info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            Schools →
          </a>
          <a
            href="https://aibfamily.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-500 transition-colors"
          >
            For Families →
          </a>
        </div>

        <button className="md:hidden p-2 text-white/70" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f1f3d] border-t border-white/10 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-white/70">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <div className="flex gap-3 mt-2">
            <a href="https://aibgin.info" className="flex-1 border border-white/20 text-white text-center py-2 rounded-lg">Schools</a>
            <a href="https://aibfamily.cloud" className="flex-1 bg-red-600 text-white text-center py-2 rounded-lg">Families</a>
          </div>
        </div>
      )}
    </nav>
  );
}
