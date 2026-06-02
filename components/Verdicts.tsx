const verdicts = [
  {
    label: "PASS",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700 border-green-300",
    dot: "bg-green-500",
    heading: "text-green-800",
    icon: "✅",
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
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700 border-amber-300",
    dot: "bg-amber-500",
    heading: "text-amber-800",
    icon: "⚠️",
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
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-700 border-red-300",
    dot: "bg-red-500 animate-pulse",
    heading: "text-red-800",
    icon: "🚨",
    title: "Blocked — immediate escalation",
    desc: "Crisis-level content detected. The response is blocked before delivery. Escalation path activates: safeguarding lead, emergency contacts, and where configured, Linka bezpečí 116 111.",
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
    <section id="verdicts" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Verdict System</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Three verdicts. Zero ambiguity.
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            AIBguardian issues a structured verdict for every AI response. Each verdict has a defined action and audit record.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {verdicts.map((v) => (
            <div key={v.label} className={`rounded-2xl border p-7 flex flex-col gap-4 ${v.color}`}>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border flex items-center gap-1.5 ${v.badge}`}>
                  <span className={`w-2 h-2 rounded-full ${v.dot}`}></span>
                  {v.label}
                </span>
                <span className="text-3xl">{v.icon}</span>
              </div>

              <div>
                <h3 className={`font-bold text-base ${v.heading}`}>{v.title}</h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">{v.desc}</p>
              </div>

              <ul className="space-y-2 mt-auto">
                {v.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="mt-0.5 shrink-0">›</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-white/70 text-sm">
            <span className="font-bold text-white">Fail-closed guarantee:</span> if AIBguardian's audit pipeline encounters any error — network, timeout, model failure — the response is blocked automatically. Safety is never degraded.
          </p>
        </div>
      </div>
    </section>
  );
}
