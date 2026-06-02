export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-red-500 text-sm font-semibold uppercase tracking-widest">Use Cases</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f1f3d] mt-2">
            One engine. Two environments.
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            AIBguardian powers both AIBgin (schools) and AIBfamily (home). Same engine, tuned for each context.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Schools */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-[#1a3a6b] to-[#0f2a52] p-8 text-white">
              <div className="text-4xl mb-3">🏫</div>
              <h3 className="text-2xl font-extrabold mb-1">AIBgin</h3>
              <p className="text-white/70 text-sm">AIBguardian for schools, MATs & districts</p>
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
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-[#1a3a6b] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://aibgin.info"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#1a3a6b] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#00b4d8] transition-colors"
              >
                Learn about AIBgin →
              </a>
            </div>
          </div>

          {/* Families */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-red-700 to-red-900 p-8 text-white">
              <div className="text-4xl mb-3">👨‍👩‍👧</div>
              <h3 className="text-2xl font-extrabold mb-1">AIBfamily</h3>
              <p className="text-white/70 text-sm">AIBguardian for home & family use</p>
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
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://aibfamily.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-red-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-red-500 transition-colors"
              >
                Learn about AIBfamily →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
