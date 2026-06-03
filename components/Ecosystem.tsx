const nodes = [
  {
    name: "AIBSN",
    desc: "Global AI identity registry and compliance standard. Every AI agent in the ecosystem carries a verified AIBSN Passport.",
    href: "https://aibsn.org",
    domain: "aibsn.org",
    role: "Identity Foundation",
    color: "from-slate-600/20 to-slate-700/10",
    border: "border-slate-500/20",
    dot: "bg-slate-400",
    tagColor: "text-slate-400",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 3C10.1 6.5 10 9.5 12 12C14 14.5 13.9 17.5 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "AIBguardian",
    desc: "The safety middleware. Audits every AI response in real-time. Positioned between every AI model and its child user.",
    href: "https://aibguardian.info",
    domain: "aibguardian.info",
    role: "Safety Engine",
    color: "from-brand-red/20 to-brand-crimson/10",
    border: "border-brand-red/30",
    dot: "bg-brand-red",
    tagColor: "text-brand-red",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <ellipse cx="12" cy="12" rx="4" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8"/>
      </svg>
    ),
  },
  {
    name: "AIBgin",
    desc: "Safe AI platform for K-12 schools, MATs, and districts. FERPA, COPPA, and KCSiE compliant. Powered by AIBguardian.",
    href: "https://aibgin.info",
    domain: "aibgin.info",
    role: "Schools Platform",
    color: "from-blue-600/20 to-blue-800/10",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
    tagColor: "text-blue-400",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "AIBfamily",
    desc: "Safe AI for home use. Parent dashboard, crisis detection, and 5-layer AIBguardian protection for children aged 4–15.",
    href: "https://aibfamily.cloud",
    domain: "aibfamily.cloud",
    role: "Family Platform",
    color: "from-pink-600/20 to-purple-600/10",
    border: "border-pink-500/20",
    dot: "bg-pink-400",
    tagColor: "text-pink-400",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C12 21 4 16 4 10.5C4 7.5 6.5 5 9.5 5C11 5 12 5.7 12 5.7C12 5.7 13 5 14.5 5C17.5 5 20 7.5 20 10.5C20 16 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "AIBlab",
    desc: "R&D division of SAY TO PAY s.r.o. Develops all AIBlab ecosystem products with EU AI Act compliance at their core.",
    href: "https://aiblab.info",
    domain: "aiblab.info",
    role: "R&D Hub",
    color: "from-violet-600/20 to-cyan-600/10",
    border: "border-violet-500/20",
    dot: "bg-violet-400",
    tagColor: "text-violet-400",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-28 bg-guard-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px section-line" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-red/[0.05] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-5">Ecosystem</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-[-0.02em] mb-5">
            One safety engine.<br/>
            <span className="gradient-text">Built into everything.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            AIBguardian is the shared security foundation of the AIBlab product ecosystem.
            Every platform that serves children runs through the same audit pipeline.
          </p>
        </div>

        {/* Ecosystem nodes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {nodes.map((node) => (
            <a key={node.name} href={node.href}
              target={node.href !== "https://aibguardian.info" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group relative glass rounded-2xl border ${node.border} p-6 bg-gradient-to-br ${node.color} hover:-translate-y-1 transition-all duration-300 ${
                node.name === "AIBguardian" ? "lg:col-span-1 ring-1 ring-brand-red/20" : ""
              }`}>

              {node.name === "AIBguardian" && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent" />
              )}

              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 glass rounded-xl flex items-center justify-center ${node.tagColor}`}>
                  {node.icon}
                </div>
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${node.dot}`} />
                  <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${node.tagColor}`}>{node.role}</span>
                </div>
              </div>

              <h3 className="font-extrabold text-white text-base mb-1.5">{node.name}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">{node.desc}</p>

              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 group-hover:text-slate-400 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5h8M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {node.domain}
              </div>
            </a>
          ))}
        </div>

        {/* Bottom ecosystem note */}
        <div className="glass-red rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="font-bold text-white">AIBguardian is not a standalone product.</span>
            {" "}It is the safety infrastructure layer that makes the entire AIBlab ecosystem trustworthy.
            Every child-facing interaction — whether at school through AIBgin or at home through AIBfamily —
            passes through AIBguardian before it is seen.
          </p>
        </div>

      </div>
    </section>
  );
}
