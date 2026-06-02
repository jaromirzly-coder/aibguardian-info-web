export default function Powered() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f1f3d] to-[#0d0d1a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Powered By</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
          Built on the AIBlab ecosystem
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-12 text-sm leading-relaxed">
          AIBguardian is a product of AIBlab — the AI R&D division of SAY TO PAY s.r.o.
          Part of a cohesive ecosystem covering identity, safety, education, and family protection.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto mb-14">
          {[
            { name: "AIBSN", desc: "Global AI identity registry", href: "https://aibsn.org", domain: "aibsn.org" },
            { name: "AIBgin", desc: "Safe AI platform for schools", href: "https://aibgin.info", domain: "aibgin.info" },
            { name: "AIBfamily", desc: "Family AI safety & monitoring", href: "https://aibfamily.cloud", domain: "aibfamily.cloud" },
            { name: "AIBlab", desc: "R&D hub · SAY TO PAY s.r.o.", href: "https://aiblab.info", domain: "aiblab.info" },
          ].map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-red-500/40 transition-all text-left group"
            >
              <div className="font-bold text-white group-hover:text-red-300 transition-colors">{p.name}</div>
              <div className="text-xs text-white/50 mt-1 mb-3">{p.desc}</div>
              <div className="text-xs text-red-400/70">{p.domain}</div>
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://aibgin.info"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0f1f3d] px-8 py-4 rounded-xl font-bold text-base hover:bg-red-100 transition-colors"
          >
            AIBguardian for Schools →
          </a>
          <a
            href="https://aibfamily.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-red-500 transition-colors"
          >
            AIBguardian for Families →
          </a>
        </div>
      </div>
    </section>
  );
}
