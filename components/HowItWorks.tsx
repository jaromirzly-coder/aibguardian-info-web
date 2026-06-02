const steps = [
  {
    n: "01",
    title: "Child sends a message",
    body: "The student or child types a message to the AI assistant via AIBgin (school) or AIBfamily (home). The message is received by the platform.",
    icon: "💬",
  },
  {
    n: "02",
    title: "AIBguardian intercepts",
    body: "Before the AI model responds, AIBguardian's Guardian Middleware intercepts the request. The CHK2 Validator analyses context, intent, and prior session signals.",
    icon: "🛡️",
  },
  {
    n: "03",
    title: "Dual-model audit runs",
    body: "The AI response is generated and immediately passed through a two-stage audit: Claude Sonnet for depth, Claude Haiku for speed. Both models must agree before the response proceeds.",
    icon: "🔍",
  },
  {
    n: "04",
    title: "Verdict issued",
    body: "AIBguardian issues a structured verdict: PASS, ALERT, or CRITICAL. The 5Z Audit Trail logs every interaction with a timestamp and reason code.",
    icon: "⚖️",
  },
  {
    n: "05",
    title: "Response delivered or blocked",
    body: "PASS: response reaches the child. ALERT: flagged for safeguarding review. CRITICAL: blocked immediately; escalation path activated. If the audit itself errors — fail-closed blocks the response.",
    icon: "🚦",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1f3d] mt-2">
            The audit pipeline, step by step
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Every interaction passes through AIBguardian before a child sees a single word of the AI's response.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-red-200 via-red-400 to-red-200" />
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-6 items-start">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-[#0f1f3d] rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <div className="flex-1 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest">{s.n}</span>
                    <h3 className="font-bold text-[#0f1f3d]">{s.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
