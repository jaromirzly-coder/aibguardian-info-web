const live = [
  { name: "AIBEVA", desc: "The personal AI for Windows that remembers you, powered by AIB.core. Runs on your PC. Free to try.", href: "https://aibeva.com", domain: "aibeva.com" },
  { name: "AIBSN", desc: "The identity registry behind AIBEVA.", href: "https://aibsn.org", domain: "aibsn.org" },
  { name: "AIBguardian", desc: "AI safety and governance.", href: "https://aibguardian.info", domain: "aibguardian.info" },
];

const upcoming = [
  { name: "AIBgin", desc: "AI for schools and classrooms, being built on AIB.core.", href: "https://aibgin.info", domain: "aibgin.info" },
  { name: "AIBfamily", desc: "AI oversight for parents, being built on AIB.core.", href: "https://aibfamily.cloud", domain: "aibfamily.cloud" },
];

export default function AIBlabEcosystem() {
  return (
    <section id="aiblab-ecosystem" aria-labelledby="aiblab-ecosystem-title" className="border-t border-white/[0.06] bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em] mb-3">The AIBlab ecosystem</p>
        <h2 id="aiblab-ecosystem-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
          AIBlab — personal AI that belongs to its user.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed mb-10">
          Built by SAY TO PAY s.r.o., an EU company based in Ostrava, Czech Republic. On the market since 2019, research roots since 2002.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {live.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-white/20 hover:bg-white/[0.04] transition-colors">
              <div className="text-white font-bold text-lg mb-1">{p.name}</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{p.desc}</p>
              <span className="text-slate-500 text-xs group-hover:text-white transition-colors">{p.domain} →</span>
            </a>
          ))}
        </div>

        <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em] mb-3">In development</p>
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8 mb-10">
          {upcoming.map((p) => (
            <li key={p.name} className="text-sm text-slate-400">
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">{p.name}</a>
              {" — "}{p.desc}
            </li>
          ))}
        </ul>

        <p className="text-xs text-slate-500">
          Patent pending · <a href="mailto:support@aiblab.info" className="hover:text-white transition-colors">support@aiblab.info</a>
        </p>
      </div>
    </section>
  );
}
