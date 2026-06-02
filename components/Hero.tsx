export default function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-[#0f1f3d] via-[#1a1a2e] to-[#0d0d1a] text-white relative overflow-hidden">
      {/* subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 text-sm font-medium text-red-300 mb-8">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            Real-Time AI Safety · Fail-Closed · Patent Pending
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Every AI response.<br />
            <span className="text-red-400">Audited before</span><br />
            <span className="text-white">a child sees it.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
            AIBguardian is the safety middleware engine behind AIBgin and AIBfamily.
            Two years in development. Three-layer architecture. One mission: protect children from harmful AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="https://aibgin.info"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0f1f3d] px-8 py-4 rounded-xl font-bold text-base hover:bg-red-100 transition-colors shadow-lg text-center"
            >
              AIBguardian for Schools →
            </a>
            <a
              href="https://aibfamily.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-red-500 transition-colors text-center"
            >
              AIBguardian for Families →
            </a>
          </div>

          <div className="grid grid-cols-3 gap-5 max-w-xl">
            {[
              { value: "< 1s", label: "Audit latency" },
              { value: "5", label: "Protection layers" },
              { value: "3", label: "Architecture tiers" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-extrabold text-red-400">{s.value}</div>
                <div className="text-xs text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
