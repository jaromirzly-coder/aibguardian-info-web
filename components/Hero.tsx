export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-guard-950 noise">
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(239,68,68,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.8) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      {/* Deep crimson glow — center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-red/[0.08] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-crimson/[0.12] rounded-full blur-[80px] pointer-events-none" />

      {/* Scan line animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.015]" aria-label="AIBguardian fail-closed AI safety middleware audit pipeline diagram showing PASS ALERT CRITICAL verdicts">
        <div className="w-full h-px bg-brand-red animate-scan" style={{ animationDuration: "6s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-32">

        {/* Patents Pending badge */}
        <div className="inline-flex items-center gap-2.5 glass-red rounded-full px-5 py-2 mb-12 animate-fade-up">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1L7.5 4.5H11L8.3 6.7 9.3 10.2 6 8.1 2.7 10.2 3.7 6.7 1 4.5H4.5L6 1Z" fill="#ef4444" opacity="0.9"/>
          </svg>
          <span className="text-xs font-bold text-brand-light tracking-[0.15em] uppercase">Patents Pending</span>
          <span className="text-brand-red/40">·</span>
          <span className="text-xs text-slate-400 tracking-wide">In development since 2023</span>
        </div>

        {/* Hero tagline */}
        <h1 className="animate-fade-up animate-delay-100">
          <span className="block text-6xl sm:text-7xl xl:text-8xl font-extrabold text-white leading-[0.95] tracking-[-0.03em] mb-2">
            Real-Time AI Safety Middleware
          </span>
          <span className="block text-6xl sm:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-[-0.03em]">
            <span className="gradient-text">&amp; LLM Audit Engine</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-10 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-200">
          AIBguardian is the proprietary AI safety engine built to stop harmful content
          before any child ever sees it. Every response. Every time. Fail-closed.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-up animate-delay-300">
          <a href="#what-is"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-brand-red to-brand-crimson text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-glow-red">
            Discover the technology
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a href="https://aibgin.info" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/[0.06] transition-all">
            AIBguardian for Schools
          </a>
        </div>

        {/* Three stats */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 animate-fade-up animate-delay-400">
          {[
            { v: "2023", l: "Development started" },
            { v: "< 1s", l: "Audit latency" },
            { v: "3",    l: "Architecture layers" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl sm:text-4xl font-black gradient-text tracking-tight">{s.v}</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-[0.12em]">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="mt-20 animate-fade-up animate-delay-500">
          <img
            src="/hero-middleware.png"
            alt="AIBguardian real-time AI safety middleware — PASS ALERT CRITICAL audit pipeline for child protection"
            width="1200"
            height="900"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-glow-red"
          />
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex justify-center animate-fade-up animate-delay-600">
          <div className="flex flex-col items-center gap-2 opacity-30">
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="white" strokeWidth="1.2"/>
              <rect x="7" y="5" width="2" height="4" rx="1" fill="white"/>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
