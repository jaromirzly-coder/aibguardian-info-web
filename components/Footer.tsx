const ecosystem = [
  { label: "aiblab.info", href: "https://aiblab.info", desc: "Hub" },
  { label: "aibgin.info", href: "https://aibgin.info", desc: "Schools" },
  { label: "aibguardian.info", href: "https://aibguardian.info", desc: "Safety" },
  { label: "aibfamily.cloud", href: "https://aibfamily.cloud", desc: "Families" },
];

const productLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "PASS / ALERT / CRITICAL", href: "#verdicts" },
  { label: "Architecture", href: "#architecture" },
  { label: "AIBgin (Schools)", href: "https://aibgin.info" },
  { label: "AIBfamily (Families)", href: "https://aibfamily.cloud" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-1 text-2xl font-extrabold mb-3">
              <span className="text-white">AIB</span>
              <span className="text-red-400">guardian</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Real-time AI safety middleware. Fail-closed. Three-layer architecture. Patent pending.
            </p>
            <p className="text-slate-500 text-xs mt-3">A product of AIBlab · SAY TO PAY s.r.o.</p>
            <p className="text-slate-500 text-xs">IČO: 08694222 · Czech Republic · EU</p>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Product</h5>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-red-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Ecosystem</h5>
            <ul className="space-y-2.5">
              {ecosystem.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2"
                  >
                    {d.label}
                    <span className="text-slate-600 text-xs">({d.desc})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Compliance</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>EU AI Act Article 28b</li>
              <li>GDPR / UK GDPR</li>
              <li>NIST AI RMF</li>
              <li>ISO 42001</li>
              <li>KCSiE (UK)</li>
              <li>Patents Pending</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 AIBguardian · AIBlab · SAY TO PAY s.r.o. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:info@aiblab.cz" className="hover:text-red-400 transition-colors">
              info@aiblab.cz
            </a>
            <a
              href="https://aibsn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              AIBSN Registry
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
