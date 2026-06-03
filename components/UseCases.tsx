export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-guard-900 relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-red uppercase tracking-[0.2em] mb-4">Use Cases</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            One engine.<br/>
            <span className="gradient-text">Two environments.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            AIBguardian powers both AIBgin (schools) and AIBfamily (home). Same engine, tuned for each context.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl border border-blue-500/20 overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div className="p-8 bg-gradient-to-br from-blue-600/20 to-blue-800/10">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-blue-400 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-1">AIBgin</h3>
              <p className="text-slate-400 text-sm">AIBguardian for schools, MATs &amp; districts</p>
            </div>
            <div className="p-8">
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time audit on every classroom AI interaction",
                  "Zero student accounts — QR code access only",
                  "Safeguarding lead escalation on CRITICAL verdict",
                  "5-year audit log for Ofsted / regulatory inspection",
                  "EU AI Act Article 28b compliant",
                  "Age profiles: KS1, KS2, KS3/4, Post-16",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://aibgin.info" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
                Learn about AIBgin →
              </a>
            </div>
          </div>

          <div className="glass rounded-2xl border border-brand-coral/20 overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div className="p-8 bg-gradient-to-br from-brand-red/20 to-brand-crimson/10">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-red mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-1">AIBfamily</h3>
              <p className="text-slate-400 text-sm">AIBguardian for home &amp; family use</p>
            </div>
            <div className="p-8">
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time monitoring of every AI conversation at home",
                  "Parent dashboard — see what your child asks AI",
                  "5-layer protection: content, intent, context, crisis, identity",
                  "Crisis detection linked to helplines (116 111)",
                  "Age-appropriate profiles per child",
                  "Family plan — up to 5 child profiles",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-brand-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://aibfamily.cloud" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-brand-red to-brand-crimson text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
                Learn about AIBfamily →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
