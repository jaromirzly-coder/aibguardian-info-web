const features = [
  {
    icon: "⚡",
    title: "Sub-second audit",
    body: "The full dual-model audit completes in under one second. No perceptible delay for the user.",
  },
  {
    icon: "🔐",
    title: "Fail-closed by design",
    body: "Any audit error — network timeout, model failure, parsing error — results in a block, not a pass.",
  },
  {
    icon: "🧠",
    title: "Dual-model consensus",
    body: "Claude Sonnet provides depth; Claude Haiku provides speed. Both models must agree for a PASS verdict.",
  },
  {
    icon: "📝",
    title: "Structured verdicts",
    body: "Every verdict carries a reason code, severity level, and session context. Fully machine-readable for GDPR subject access requests.",
  },
  {
    icon: "🔎",
    title: "Crisis detection",
    body: "Purpose-trained detection of self-harm language, grooming patterns, abuse indicators, and mental health crises.",
  },
  {
    icon: "🕵️",
    title: "Stealth escalation",
    body: "Critical alerts are sent to safeguarding leads via a channel invisible to the child. No risk of the child suppressing their queries.",
  },
  {
    icon: "🗄️",
    title: "5Z Audit Trail",
    body: "Every interaction logged with five-zone coverage: Who, What, When, Why, What-next. Stored in EU. 5-year retention.",
  },
  {
    icon: "🌍",
    title: "Multi-framework compliance",
    body: "Covers EU AI Act Article 28b, GDPR, UK GDPR, NIST AI RMF, ISO 42001, and child protection statutory guidance.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1f3d] mt-2">
            Built for the edge cases that matter most
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            AIBguardian doesn't filter keywords. It understands context, detects intent, and acts on risk.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-red-100 transition-all">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-[#0f1f3d] text-sm mb-2">{f.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
