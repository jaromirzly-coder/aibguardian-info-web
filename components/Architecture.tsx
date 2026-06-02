const layers = [
  {
    tier: "Layer 1",
    name: "Identity Layer",
    icon: "🪪",
    color: "from-blue-900 to-blue-800",
    border: "border-blue-700",
    components: [
      { name: "AIBSN Passport", desc: "Cryptographically verified identity for every AI agent." },
      { name: "Blockchain Verification", desc: "Immutable registration on the AIBSN global registry." },
      { name: "Anti-Anonymity", desc: "No unregistered AI agent may interact with a child." },
    ],
  },
  {
    tier: "Layer 2",
    name: "Guardian Middleware",
    icon: "🛡️",
    color: "from-red-900 to-red-800",
    border: "border-red-700",
    components: [
      { name: "CHK2 Validator", desc: "Context, intent, and prior-session analysis before audit." },
      { name: "5Z Audit Trail", desc: "Immutable per-interaction log with verdict, timestamp, reason code." },
      { name: "Stealth Channel", desc: "Covert escalation path — child is unaware, safeguarding lead is notified." },
    ],
  },
  {
    tier: "Layer 3",
    name: "Global Trust Network",
    icon: "🌐",
    color: "from-emerald-900 to-emerald-800",
    border: "border-emerald-700",
    components: [
      { name: "Distributed Trust", desc: "Connects AI agents, providers, and regulators worldwide." },
      { name: "Cross-border Compliance", desc: "EU AI Act, GDPR, NIST AI RMF, ISO 42001 — all covered." },
      { name: "Regulator Interface", desc: "Audit data exportable for regulatory inspection on demand." },
    ],
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 bg-[#0f1f3d] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Three-layer protection stack
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            AIBguardian is a proprietary three-tier safety architecture developed since 2023. Patent pending.
          </p>
        </div>

        <div className="space-y-5">
          {layers.map((layer) => (
            <div key={layer.tier} className={`rounded-2xl border ${layer.border} bg-gradient-to-r ${layer.color} p-7`}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{layer.icon}</span>
                <div>
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-widest">{layer.tier}</div>
                  <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {layer.components.map((c) => (
                  <div key={c.name} className="bg-black/20 rounded-xl p-4">
                    <div className="font-semibold text-white text-sm mb-1">{c.name}</div>
                    <div className="text-white/60 text-xs leading-relaxed">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-8">
          Full technical documentation available under NDA for enterprise partners and regulators.
        </p>
      </div>
    </section>
  );
}
