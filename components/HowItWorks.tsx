const steps = [
  {
    n: "01",
    title: "Child sends a message",
    body: "The student or child types a message via AIBgin (school) or AIBfamily (home). The message is received by the platform.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    borderColor: "border-brand-red/20",
  },
  {
    n: "02",
    title: "AIBguardian intercepts",
    body: "Before the AI model responds, AIBguardian's Guardian Middleware intercepts the request. The CHK2 Validator analyses context, intent, and prior session signals.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v5c0 4.85 3.25 9.39 8 10.5C16.75 20.39 20 15.85 20 11V6l-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    borderColor: "border-brand-red/25",
  },
  {
    n: "03",
    title: "Dual-model audit runs",
    body: "The AI response is generated and immediately passed through a two-stage audit: Claude Sonnet for depth, Claude Haiku for speed. Both models must agree before the response proceeds.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="11" cy="11" rx="4" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <circle cx="11" cy="11" r="2" fill="currentColor" opacity="0.8"/>
      </svg>
    ),
    borderColor: "border-brand-red/30",
  },
  {
    n: "04",
    title: "Verdict issued",
    body: "AIBguardian issues a structured verdict: PASS, ALERT, or CRITICAL. The 5Z Audit Trail logs every interaction with a timestamp and reason code.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 6h18M7 6V4a1 1 0 011-1h6a1 1 0 011 1v2M19 6v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    borderColor: "border-brand-red/35",
  },
  {
    n: "05",
    title: "Response delivered or blocked",
    body: "PASS: response reaches the child. ALERT: flagged for safeguarding review. CRITICAL: blocked immediately; escalation path activated. If the audit itself errors — fail-closed blocks the response.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    borderColor: "border-brand-green/30",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-guard-950 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-4">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            The audit pipeline,<br/>
            <span className="gradient-text">step by step.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every interaction passes through AIBguardian before a child sees a single word of the AI&apos;s response.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-brand-red/40 via-brand-red/20 to-brand-green/30" />
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={s.n} className="flex gap-5 items-start">
                <div className={`relative z-10 flex-shrink-0 w-16 h-16 glass rounded-2xl border ${s.borderColor} flex items-center justify-center text-brand-red`}>
                  {s.icon}
                </div>
                <div className={`flex-1 glass rounded-2xl border ${s.borderColor} p-5 hover:bg-white/[0.06] transition-colors`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black text-white/20 font-mono tracking-widest">{s.n}</span>
                    <h3 className="font-bold text-white text-sm">{s.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
