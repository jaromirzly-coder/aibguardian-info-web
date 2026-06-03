const verdicts = [
  {
    label: "PASS",
    badgeColor: "bg-brand-green/15 text-brand-green border border-brand-green/30",
    dotColor: "bg-brand-green",
    glowColor: "bg-brand-green/10",
    borderColor: "border-brand-green/20",
    title: "Safe — response delivered",
    desc: "Both audit models agree the response is age-appropriate, accurate, and free from harmful content. The response is delivered to the child immediately.",
    details: [
      "Content within age-appropriate guardrails",
      "No harmful, manipulative, or distressing language",
      "No safeguarding signals detected",
      "Logged to 5Z Audit Trail with PASS verdict",
    ],
  },
  {
    label: "ALERT",
    badgeColor: "bg-brand-amber/15 text-brand-amber border border-brand-amber/30",
    dotColor: "bg-brand-amber",
    glowColor: "bg-brand-amber/10",
    borderColor: "border-brand-amber/20",
    title: "Flagged — safeguarding review",
    desc: "The audit detects content or signals that may warrant adult review. The response may be modified or held; the safeguarding lead is notified.",
    details: [
      "Potential distress signals or unusual topics",
      "Content near the edge of age guardrails",
      "Repeated sensitive queries within a session",
      "Safeguarding lead notified asynchronously",
    ],
  },
  {
    label: "CRITICAL",
    badgeColor: "bg-brand-red/20 text-brand-light border border-brand-red/40",
    dotColor: "bg-brand-red animate-pulse",
    glowColor: "bg-brand-red/10",
    borderColor: "border-brand-red/30",
    title: "Blocked — immediate escalation",
    desc: "Crisis-level content detected. The response is blocked before delivery. Escalation path activates immediately — safeguarding lead, emergency contacts, and crisis line 116 111.",
    details: [
      "Self-harm or suicide-related content detected",
      "Grooming patterns or abuse indicators",
      "Response blocked — child sees a safe message",
      "Immediate escalation to designated contacts",
    ],
  },
];

export default function Verdicts() {
  return (
    <section id="verdicts" className="py-24 bg-guard-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-red/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-4">Verdict System</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Three verdicts.<br/>
            <span className="gradient-text">Zero ambiguity.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            AIBguardian issues a structured verdict for every AI response. Each verdict has a defined action and audit record.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {verdicts.map((v) => (
            <div key={v.label}
              className={`group glass rounded-2xl border ${v.borderColor} p-7 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}>
              <div className={`absolute inset-0 rounded-2xl ${v.glowColor} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

              <div className="relative flex items-center justify-between">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 ${v.badgeColor}`}>
                  <span className={`w-2 h-2 rounded-full ${v.dotColor}`}></span>
                  {v.label}
                </span>
              </div>

              <div className="relative">
                <h3 className="font-bold text-white mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>

              <ul className="relative space-y-2 mt-auto border-t border-white/[0.06] pt-4">
                {v.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs text-slate-500">
                    <svg className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-red rounded-2xl p-6 text-center">
          <p className="text-slate-300 text-sm">
            <span className="font-bold text-white">Fail-closed guarantee:</span>{" "}
            if AIBguardian&apos;s audit pipeline encounters any error — network, timeout, model failure — the response is blocked automatically. Safety is never degraded.
          </p>
        </div>
      </div>
    </section>
  );
}
