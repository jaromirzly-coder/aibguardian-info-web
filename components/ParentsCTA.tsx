export default function ParentsCTA() {
  return (
    <section id="parents" className="py-28 bg-guard-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-line" />
      {/* Deep glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-red/[0.07] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">

        <span className="inline-block text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-6">For Parents</span>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-[-0.02em] mb-6">
          AIBguardian protects<br/>
          <span className="gradient-text">your children at home.</span>
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          AIBfamily puts the full AIBguardian protection stack inside your home.
          Five layers of safety, a real-time parent dashboard, crisis detection linked to
          emergency services, and zero child accounts — ever.
        </p>

        {/* Feature list inline */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            "5-layer AIBguard protection",
            "Real-time parent dashboard",
            "Crisis detection · 116 111",
            "No child accounts",
            "Ages 4–15",
            "COPPA · UK Children's Code",
          ].map((f) => (
            <span key={f}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-full">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 4l1.5 1.5 3.5-3.5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {f}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://aibfamily.cloud" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-brand-red to-brand-crimson text-white px-9 py-4.5 rounded-2xl font-bold text-base hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-glow-red"
            style={{ paddingTop: "1.125rem", paddingBottom: "1.125rem" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 16C9 16 2 11.5 2 7C2 4.8 3.8 3 6 3C7.1 3 8.1 3.5 9 4.5C9.9 3.5 10.9 3 12 3C14.2 3 16 4.8 16 7C16 11.5 9 16 9 16Z" fill="white"/>
            </svg>
            Protect your family — AIBfamily
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a href="https://aibgin.info" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/[0.06] transition-all">
            AIBguardian for Schools
          </a>
        </div>

        {/* Trust footnote */}
        <p className="text-slate-600 text-xs mt-8">
          Powered by AIBguardian · Built by AIBlab · SAY TO PAY s.r.o. · Czech Republic · EU
        </p>

      </div>
    </section>
  );
}
