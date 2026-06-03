const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M13 2L3 14h9l-3 7 10-12h-9l3-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Sub-second audit",
    body: "The full dual-model audit completes in under one second. No perceptible delay for the user.",
    tag: "Performance",
    accent: "text-brand-amber bg-brand-amber/10 border-brand-amber/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="16" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "Fail-closed by design",
    body: "Any audit error — network timeout, model failure, parsing error — results in a block, not a pass.",
    tag: "Safety",
    accent: "text-brand-red bg-brand-red/10 border-brand-red/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 8.5c0-1.65 1.35-3 3-3s3 1.35 3 3-3 5.5-3 5.5-3-3.85-3-5.5z" fill="currentColor" opacity="0.3"/>
        <circle cx="11" cy="15" r="1" fill="currentColor"/>
      </svg>
    ),
    title: "Dual-model consensus",
    body: "Claude Sonnet provides depth; Claude Haiku provides speed. Both models must agree for a PASS verdict.",
    tag: "AI Engine",
    accent: "text-brand-light bg-brand-red/10 border-brand-red/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 2v6h6M8 13h6M8 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Structured verdicts",
    body: "Every verdict carries a reason code, severity level, and session context. Fully machine-readable for GDPR requests.",
    tag: "Audit",
    accent: "text-brand-amber bg-brand-amber/10 border-brand-amber/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 11h2M17 11h2M11 3v2M11 17v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Crisis detection",
    body: "Purpose-trained detection of self-harm language, grooming patterns, abuse indicators, and mental health crises.",
    tag: "Crisis",
    accent: "text-brand-red bg-brand-red/15 border-brand-red/30",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Stealth escalation",
    body: "Critical alerts are sent to safeguarding leads via a channel invisible to the child. No risk of the child suppressing queries.",
    tag: "Stealth",
    accent: "text-brand-light bg-brand-red/10 border-brand-red/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 5h16M3 10h16M3 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17.5 16h1M18 15.5v1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: "5Z Audit Trail",
    body: "Every interaction logged with five-zone coverage: Who, What, When, Why, What-next. Stored in EU. 5-year retention.",
    tag: "Compliance",
    accent: "text-brand-amber bg-brand-amber/10 border-brand-amber/20",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8.5 11h5M11 8.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 11h2M17 11h2M11 3v2M11 17v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    title: "Multi-framework compliance",
    body: "Covers EU AI Act Article 28b, GDPR, UK GDPR, NIST AI RMF, ISO 42001, and child protection statutory guidance.",
    tag: "Legal",
    accent: "text-brand-green bg-brand-green/10 border-brand-green/20",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-guard-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-red/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-4">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Built for the edge cases<br/>
            <span className="gradient-text">that matter most.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            AIBguardian doesn't filter keywords. It understands context, detects intent, and acts on risk.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title}
              className="group glass rounded-2xl p-5 hover:-translate-y-1 hover:bg-white/[0.06] transition-all duration-300 cursor-default">
              <div className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-4 ${f.accent}`}>
                {f.tag}
              </div>
              <div className={`${f.accent.split(" ")[0]} group-hover:text-brand-red transition-colors mb-3`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
