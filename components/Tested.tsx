export default function Tested() {
  return (
    <section id="tested" className="py-28 bg-guard-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-line" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-red/[0.07] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-5">Deployment Record</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-[-0.02em] mb-5">
            Tested. Verified.<br/>
            <span className="gradient-text">Deployed.</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
            AIBguardian has undergone structured testing and public deployment verification.
            The following record is publicly registered on the AIBSN global registry.
          </p>
        </div>

        {/* Central verification card */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative glass rounded-3xl border border-brand-red/20 p-8 sm:p-10 overflow-hidden">

            {/* Glow inside card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/[0.08] rounded-full blur-[60px] pointer-events-none" />

            {/* Verified stamp — top right */}
            <div className="absolute top-5 right-5">
              <div className="flex items-center gap-1.5 bg-brand-green/10 border border-brand-green/25 rounded-full px-3 py-1">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[10px] font-bold text-brand-green uppercase tracking-[0.12em]">Verified</span>
              </div>
            </div>

            {/* Record header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-red/20 to-brand-crimson/10 rounded-2xl border border-brand-red/20 flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="#ef4444" strokeWidth="1.5" strokeLinejoin="round"/>
                  <ellipse cx="12" cy="12" rx="4.5" ry="3" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.6"/>
                  <circle cx="12" cy="12" r="2" fill="#ef4444" opacity="0.8"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">Moltbook</div>
                <div className="text-slate-500 text-sm mt-0.5">Deployed AI platform · Research environment</div>
              </div>
            </div>

            {/* Data rows */}
            <div className="space-y-4 mb-8">
              {[
                {
                  label: "AIBSN Registry ID",
                  value: "AIBSN-RESEARCH-GB-GUARD001-97",
                  mono: true,
                  highlight: true,
                },
                {
                  label: "Registered user",
                  value: "u/aib-guardian-001",
                  mono: true,
                  highlight: false,
                },
                {
                  label: "Deployment type",
                  value: "Research · Safety Validation",
                  mono: false,
                  highlight: false,
                },
                {
                  label: "Verification source",
                  value: "AIBSN Global Registry (aibsn.org)",
                  mono: false,
                  highlight: false,
                },
                {
                  label: "Status",
                  value: "Active — Safety layer confirmed operational",
                  mono: false,
                  highlight: false,
                },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-4">
                  <div className="w-36 shrink-0 text-xs text-slate-600 uppercase tracking-[0.1em] pt-0.5">{row.label}</div>
                  <div className={`text-sm flex-1 ${
                    row.mono ? "font-mono" : "font-medium"
                  } ${
                    row.highlight ? "text-brand-light" : "text-slate-300"
                  }`}>{row.value}</div>
                </div>
              ))}
            </div>

            {/* Registry link */}
            <a href="https://aibsn.org" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-rose transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M7 2C5.5 4.5 5.5 9.5 7 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                <path d="M1.5 7h11" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              Verify on AIBSN Registry → aibsn.org
            </a>
          </div>
        </div>

        {/* Three columns below */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            {
              title: "Independent Test Environment",
              body: "The Moltbook deployment provided an isolated, controlled environment for validating AIBguardian's audit pipeline under realistic conditions — including edge-case inputs and adversarial prompts.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M6 18h8M10 14v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              title: "AIBSN Identity Confirmed",
              body: "The test agent carried a verified AIBSN identity key (AIBSN-RESEARCH-GB-GUARD001-97), proving the identity layer correctly gates AI access before any content audit begins.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="2" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M6 7h4M6 10h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <circle cx="15" cy="12" r="4" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M13.5 12h3M15 10.5v3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              title: "Audit Pipeline Validated",
              body: "Across all test interactions, the dual-model audit (Claude Sonnet + Haiku) issued PASS, ALERT, or CRITICAL verdicts within sub-second latency. No responses bypassed the pipeline.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 10l4 4 10-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              ),
            },
          ].map((c) => (
            <div key={c.title} className="glass rounded-2xl p-5 hover:bg-white/[0.05] transition-colors">
              <div className="w-9 h-9 glass-red rounded-xl flex items-center justify-center text-brand-red mb-4">
                {c.icon}
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{c.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
