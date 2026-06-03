export default function AibsnPassport() {
  return (
    <section id="aibsn-passport" className="py-28 bg-guard-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-line" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: AIBSN Passport card visual */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:mx-0">

              {/* Passport card */}
              <div className="relative bg-gradient-to-br from-guard-800/80 to-guard-900/90 rounded-3xl border border-white/[0.09] p-7 shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                {/* Watermark circles */}
                <div className="absolute -top-8 -right-8 w-40 h-40 border border-brand-red/[0.08] rounded-full" />
                <div className="absolute -top-4 -right-4 w-28 h-28 border border-brand-red/[0.06] rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-white/[0.04] rounded-full" />

                {/* Header row */}
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <div className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.18em] mb-1">AIBSN Passport</div>
                    <div className="font-extrabold text-white text-lg tracking-tight">AI Agent Identity</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-red/20 to-brand-crimson/10 rounded-xl border border-brand-red/20 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M11 2L3 6v5c0 4.85 3.25 9.39 8 10.5C16.75 20.39 20 15.85 20 11V6l-9-4z" stroke="#ef4444" strokeWidth="1.5" strokeLinejoin="round"/>
                      <ellipse cx="11" cy="11" rx="4" ry="2.5" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.5"/>
                      <circle cx="11" cy="11" r="2" fill="#ef4444" opacity="0.8"/>
                    </svg>
                  </div>
                </div>

                {/* ID field */}
                <div className="mb-5 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
                  <div className="text-[9px] text-slate-600 uppercase tracking-[0.15em] mb-1">Registry ID</div>
                  <div className="font-mono text-xs text-brand-light tracking-wide">AIBSN-RESEARCH-GB-GUARD001-97</div>
                </div>

                {/* Data rows */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: "Identity type",      value: "Cryptographic · Ed25519" },
                    { label: "Compliance scope",   value: "EU AI Act · GDPR · NIST AI RMF" },
                    { label: "Audit log",          value: "Immutable · Timestamped · EU-hosted" },
                    { label: "Blockchain record",  value: "Verified · Tamper-proof" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <div className="w-28 shrink-0 text-[10px] text-slate-600 uppercase tracking-[0.08em]">{row.label}</div>
                      <div className="text-xs text-slate-300 font-medium">{row.value}</div>
                    </div>
                  ))}
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                    <span className="text-[10px] font-semibold text-brand-green uppercase tracking-[0.12em]">Active · Verified</span>
                  </div>
                  <span className="text-[9px] text-slate-600 font-mono">aibsn.org</span>
                </div>

              </div>

              {/* Shadow glow under card */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-brand-red/[0.15] rounded-full blur-[20px]" />
            </div>
          </div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-5">AIBSN Passport</span>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-[-0.02em] mb-6">
              Cryptographic identity<br/>
              <span className="gradient-text">for every AI agent.</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-5">
              The AIBSN Passport is a cryptographically verifiable digital identity issued to AI agents
              through the AIBSN global registry. Before any AI agent may operate within the AIBguardian
              protection perimeter, its passport must be authenticated.
            </p>

            <p className="text-slate-500 leading-relaxed mb-8">
              Each passport carries the agent's compliance documentation, deployment history, and an
              immutable audit record. The identity is registered on a tamper-proof blockchain ledger —
              permanently linking each AI agent to its real-world operator and compliance status.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  title: "No Anonymous AI",
                  desc: "Every AI agent must present a valid AIBSN Passport before access is granted.",
                  color: "text-brand-red",
                },
                {
                  title: "Immutable Audit Log",
                  desc: "Every interaction is cryptographically logged and cannot be altered retroactively.",
                  color: "text-brand-amber",
                },
                {
                  title: "Blockchain Verification",
                  desc: "Identity records are published to the AIBSN distributed ledger — publicly verifiable.",
                  color: "text-brand-green",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <svg className={`w-4 h-4 shrink-0 mt-0.5 ${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                  <div>
                    <span className="font-semibold text-white text-sm">{item.title}</span>
                    <span className="text-slate-500 text-sm"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://aibsn.org" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:text-brand-rose transition-colors group">
              Explore the AIBSN Registry
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
