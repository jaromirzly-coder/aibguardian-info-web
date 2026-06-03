const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v5c0 4.85 3.25 9.39 8 10.5C16.75 20.39 20 15.85 20 11V6l-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Proprietary Safety Architecture",
    body: "AIBguardian is not an off-the-shelf filter. It is a purpose-built, three-layer AI safety middleware engineered specifically to protect children from harmful AI responses.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="11" cy="11" rx="5" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <circle cx="11" cy="11" r="2.5" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    title: "Fail-Closed by Design",
    body: "If any component of the audit pipeline encounters an error — network failure, model timeout, parsing error — the response is automatically blocked. Safety is never degraded. There is no fallback to pass.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="16" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "Cryptographic Identity",
    body: "Every AI agent interacting through AIBguardian carries a verified AIBSN identity key. Unregistered or anonymous AI agents are rejected before a single word is exchanged.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 5h16M3 10h16M3 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17.5 16h1M18 15.5v1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: "5Z Immutable Audit Trail",
    body: "Every AI interaction is logged across five zones: Who, What, When, Why, What-next. The record is immutable, timestamped, and stored in EU data infrastructure with a 5-year retention policy.",
  },
];

export default function WhatIs() {
  return (
    <section id="what-is" className="py-28 bg-guard-950 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px section-line" />

      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-red/[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            {/* Patents badge */}
            <div className="inline-flex items-center gap-2 glass-red rounded-full px-4 py-1.5 mb-8">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1L6.2 3.8H9L6.8 5.5 7.6 8.3 5 6.6 2.4 8.3 3.2 5.5 1 3.8H3.8L5 1Z" fill="#ef4444"/>
              </svg>
              <span className="text-[10px] font-bold text-brand-light uppercase tracking-[0.18em]">Patents Pending · Since 2023</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.08] tracking-[-0.02em] mb-6">
              What is<br/>
              <span className="gradient-text">AIBguardian?</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-5">
              AIBguardian is a proprietary AI safety technology developed by AIBlab (SAY TO PAY s.r.o.)
              since 2023. It functions as a real-time middleware layer positioned between an AI model
              and its end user — intercepting, auditing, and classifying every response before
              it reaches a child.
            </p>

            <p className="text-slate-500 leading-relaxed mb-8">
              It operates independently of the underlying AI model. Whether the platform uses Claude,
              GPT, or any other foundation model, AIBguardian applies the same rigorous, consistent
              audit pipeline — issuing a structured verdict of PASS, ALERT, or CRITICAL on every
              interaction.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "PASS · ALERT · CRITICAL",
                "EU AI Act Article 28b",
                "Fail-Closed Architecture",
                "Dual-Model Audit",
              ].map((t) => (
                <span key={t}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: pillars grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.title}
                className="glass rounded-2xl p-5 hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="w-10 h-10 glass-red rounded-xl flex items-center justify-center text-brand-red mb-4 group-hover:text-brand-rose transition-colors">
                  {p.icon}
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
