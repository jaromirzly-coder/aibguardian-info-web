export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-guard-950 noise pt-16">
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "72px 72px"
      }} />
      <div className="absolute top-1/3 left-1/5 w-[480px] h-[480px] bg-brand-red/[0.15] rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-brand-crimson/[0.10] rounded-full blur-[100px] pointer-events-none animate-pulse-slow animate-delay-400" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2.5 glass-red rounded-full px-4 py-2 mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              <span className="text-xs font-semibold text-brand-light tracking-wide">Real-Time AI Safety · Fail-Closed · Patent Pending</span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-[-0.02em] mb-6 animate-fade-up animate-delay-100">
              <span className="text-white">Every response.</span><br/>
              <span className="gradient-text">Audited. Before</span><br/>
              <span className="text-white">a child sees it.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-6 animate-fade-up animate-delay-200 max-w-xl">
              AIBguardian is the safety middleware engine inside AIBgin and AIBfamily.
              Three-layer architecture. Dual-model audit. One guarantee: harmful content never reaches a child.
            </p>

            <div className="flex flex-wrap gap-2 mb-10 animate-fade-up animate-delay-200">
              {[
                "Fail-closed guarantee",
                "Dual-model audit",
                "<1s latency",
                "PASS / ALERT / CRITICAL",
              ].map((t) => (
                <span key={t}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/[0.05] border border-white/[0.09] px-3 py-1.5 rounded-full">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up animate-delay-300">
              <a href="https://aibgin.info" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-red to-brand-crimson text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-glow-red">
                AIBguardian for Schools
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="https://aibfamily.cloud" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 glass text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/[0.08] transition-all">
                For Families
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-xs animate-fade-up animate-delay-400">
              {[
                { v: "<1s", l: "Audit latency",  s: "end-to-end" },
                { v: "5",   l: "Safety layers",  s: "simultaneous" },
                { v: "3",   l: "Arch tiers",     s: "patent pending" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-3 text-center hover:bg-white/[0.07] transition-colors">
                  <div className="text-lg font-extrabold gradient-text">{s.v}</div>
                  <div className="text-[9px] font-semibold text-white/70 mt-0.5 leading-tight">{s.l}</div>
                  <div className="text-[8px] text-slate-600 mt-0.5">{s.s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: audit pipeline visual placeholder */}
          <div className="hidden lg:block animate-fade-up animate-delay-300">
            {/* REPLACE WITH: /public/hero-audit-pipeline.png · 1000×900 · audit flow diagram */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-guard-900/80 to-guard-950/90 shadow-[0_40px_80px_rgba(0,0,0,0.6)] p-6"
              style={{ aspectRatio: "10/9" }}>
              {/* Pipeline steps */}
              <div className="space-y-3">
                {[
                  { label: "Student message", color: "bg-brand-red/10 border-brand-red/15", dot: "bg-slate-400" },
                  { label: "CHK2 Validator — context analysis", color: "bg-white/[0.04] border-white/[0.07]", dot: "bg-brand-amber" },
                  { label: "Dual-model audit (Sonnet + Haiku)", color: "bg-brand-red/[0.08] border-brand-red/15", dot: "bg-brand-red" },
                  { label: "Verdict: PASS / ALERT / CRITICAL", color: "bg-white/[0.04] border-white/[0.07]", dot: "bg-brand-green" },
                  { label: "Response delivered or blocked", color: "bg-brand-green/[0.08] border-brand-green/15", dot: "bg-brand-green" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {/* Connector line */}
                    <div className="flex flex-col items-center self-stretch">
                      <div className={`w-2.5 h-2.5 rounded-full ${step.dot} shrink-0`} />
                      {i < 4 && <div className="w-px flex-1 bg-white/[0.07] my-1" />}
                    </div>
                    <div className={`flex-1 ${step.color} border rounded-xl px-4 py-2.5`}>
                      <div className="h-2 bg-white/[0.1] rounded w-3/4" />
                      <div className="text-[9px] text-slate-600 mt-1 font-mono">{step.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Fail-closed badge */}
              <div className="mt-4 glass-red rounded-xl p-3 text-center">
                <div className="text-[10px] font-bold text-brand-light">FAIL CLOSED GUARANTEE</div>
                <div className="text-[9px] text-slate-600 mt-0.5">Any audit error → response blocked, never passed</div>
              </div>
              <div className="absolute inset-0 flex items-end justify-end p-3 pointer-events-none">
                <span className="text-[9px] font-mono text-white/15 bg-black/20 px-2 py-1 rounded">
                  hero-audit-pipeline.png · 1000×900
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
