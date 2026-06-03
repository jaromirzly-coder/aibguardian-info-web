export default function Powered() {
  return (
    <section className="py-24 bg-guard-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-red/[0.05] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-4">Powered By</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Built on the<br/>
          <span className="gradient-text">AIBlab ecosystem.</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-14 text-sm leading-relaxed">
          AIBguardian is a product of AIBlab — the AI R&amp;D division of SAY TO PAY s.r.o.
          Part of a cohesive ecosystem covering identity, safety, education, and family protection.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
          {[
            { name: "AIBSN",      desc: "Global AI identity registry",     href: "https://aibsn.org",        domain: "aibsn.org" },
            { name: "AIBgin",     desc: "Safe AI platform for schools",    href: "https://aibgin.info",      domain: "aibgin.info" },
            { name: "AIBfamily",  desc: "Family AI safety & monitoring",   href: "https://aibfamily.cloud",  domain: "aibfamily.cloud" },
            { name: "AIBlab",     desc: "R&D hub · SAY TO PAY s.r.o.",    href: "https://aiblab.info",      domain: "aiblab.info" },
          ].map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
              className="glass rounded-2xl p-5 hover:bg-white/[0.07] hover:border-brand-red/30 transition-all text-left group">
              <div className="font-bold text-white group-hover:text-brand-light transition-colors">{p.name}</div>
              <div className="text-xs text-slate-500 mt-1 mb-3 leading-relaxed">{p.desc}</div>
              <div className="text-xs text-brand-red/70">{p.domain}</div>
            </a>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://aibgin.info" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-white/[0.08] transition-colors">
            AIBguardian for Schools →
          </a>
          <a href="https://aibfamily.cloud" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-red to-brand-crimson text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-opacity shadow-glow-red">
            AIBguardian for Families →
          </a>
        </div>
      </div>
    </section>
  );
}
