const layers = [
  {
    tier: "Layer 1",
    name: "Identity Layer",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9h5M7 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    gradientFrom: "from-blue-600/20",
    gradientTo: "to-blue-800/10",
    borderColor: "border-blue-500/25",
    tagColor: "text-blue-400",
    components: [
      { name: "AIBSN Passport", desc: "Cryptographically verified identity for every AI agent." },
      { name: "Blockchain Verification", desc: "Immutable registration on the AIBSN global registry." },
      { name: "Anti-Anonymity", desc: "No unregistered AI agent may interact with a child." },
    ],
  },
  {
    tier: "Layer 2",
    name: "Guardian Middleware",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    gradientFrom: "from-brand-red/20",
    gradientTo: "to-brand-crimson/10",
    borderColor: "border-brand-red/30",
    tagColor: "text-brand-red",
    components: [
      { name: "CHK2 Validator", desc: "Context, intent, and prior-session analysis before audit." },
      { name: "5Z Audit Trail", desc: "Immutable per-interaction log with verdict, timestamp, reason code." },
      { name: "Stealth Channel", desc: "Covert escalation path — child is unaware, safeguarding lead is notified." },
    ],
  },
  {
    tier: "Layer 3",
    name: "Global Trust Network",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 3C10.1 6.5 10 9.5 12 12C14 14.5 13.9 17.5 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    gradientFrom: "from-brand-green/20",
    gradientTo: "to-brand-green/5",
    borderColor: "border-brand-green/25",
    tagColor: "text-brand-green",
    components: [
      { name: "Distributed Trust", desc: "Connects AI agents, providers, and regulators worldwide." },
      { name: "Cross-border Compliance", desc: "EU AI Act, GDPR, NIST AI RMF, ISO 42001 — all covered." },
      { name: "Regulator Interface", desc: "Audit data exportable for regulatory inspection on demand." },
    ],
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-guard-900 relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-4">Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Three-layer<br/>
            <span className="gradient-text">protection stack.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            AIBguardian is a proprietary three-tier safety architecture developed since 2023. Patent pending.
          </p>
        </div>

        <div className="space-y-5">
          {layers.map((layer) => (
            <div key={layer.tier}
              className={`relative glass rounded-2xl border ${layer.borderColor} p-7 bg-gradient-to-r ${layer.gradientFrom} ${layer.gradientTo} hover:bg-white/[0.04] transition-colors`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 glass rounded-xl flex items-center justify-center ${layer.tagColor}`}>
                  {layer.icon}
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-[0.15em] ${layer.tagColor}`}>{layer.tier}</div>
                  <h3 className="text-lg font-bold text-white">{layer.name}</h3>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {layer.components.map((c) => (
                  <div key={c.name} className="glass rounded-xl p-4">
                    <div className="font-semibold text-white text-sm mb-1.5">{c.name}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-xs mt-8">
          Full technical documentation available under NDA for enterprise partners and regulators.
        </p>
      </div>
    </section>
  );
}
