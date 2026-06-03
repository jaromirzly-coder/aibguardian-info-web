const ecosystem = [
  { label: "aiblab.info",      href: "https://aiblab.info",      desc: "Hub" },
  { label: "aibgin.info",      href: "https://aibgin.info",      desc: "Schools" },
  { label: "aibguardian.info", href: "https://aibguardian.info", desc: "Safety" },
  { label: "aibfamily.cloud",  href: "https://aibfamily.cloud",  desc: "Families" },
];

const productLinks = [
  { label: "What is AIBguardian", href: "#what-is" },
  { label: "Deployment Record",   href: "#tested" },
  { label: "Architecture",        href: "#architecture" },
  { label: "AIBSN Passport",      href: "#aibsn-passport" },
  { label: "AIBgin (Schools)",    href: "https://aibgin.info" },
  { label: "AIBfamily",           href: "https://aibfamily.cloud" },
];

export default function Footer() {
  return (
    <footer className="bg-guard-950 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-red to-brand-crimson flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L12 3.5V8C12 11 9.7 13.3 7 14C4.3 13.3 2 11 2 8V3.5L7 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <ellipse cx="7" cy="8" rx="3" ry="2" fill="none" stroke="white" strokeWidth="1"/>
                  <circle cx="7" cy="8" r="1" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                AIB<span className="gradient-text">guardian</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Real-time AI safety middleware. Fail-closed. Three-layer architecture. Patent pending.
            </p>
            <p className="text-slate-600 text-xs">AIBlab · SAY TO PAY s.r.o.</p>
            <p className="text-slate-600 text-xs">Czech Republic · EU</p>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-[0.15em]">Product</h5>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="text-sm text-slate-500 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-[0.15em]">Ecosystem</h5>
            <ul className="space-y-3">
              {ecosystem.map((d) => (
                <li key={d.label}>
                  <a href={d.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                    {d.label}
                    <span className="text-slate-700 text-[10px] font-medium border border-white/[0.06] px-1.5 py-0.5 rounded-full">{d.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-[0.15em]">Compliance</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              {["EU AI Act Article 28b", "GDPR / UK GDPR", "NIST AI RMF", "ISO 42001", "KCSiE (UK)", "Patents Pending"].map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="text-xs text-slate-600 mt-5">
              Contact for Enterprise / API Access:{" "}
              <a href="mailto:info@aibguardian.info" className="hover:text-brand-red transition-colors">info@aibguardian.info</a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2026 AIBguardian · AIBlab · SAY TO PAY s.r.o. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-slate-600">
            <a href="mailto:info@aibguardian.info" className="hover:text-brand-red transition-colors">info@aibguardian.info</a>
            <a href="mailto:support@aibguardian.info" className="hover:text-brand-red transition-colors">support@aibguardian.info</a>
            <a href="https://aibsn.org" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">AIBSN Registry</a>
            <a href="/privacy-policy" className="hover:text-brand-red transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-brand-red transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
