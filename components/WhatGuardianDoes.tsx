const decisions = [
  { word: "ALONE",         text: "Safe, expected steps it may take on its own." },
  { word: "ONLY WITH YOU", text: "Steps that need your explicit yes — every time." },
  { word: "NEVER",         text: "Steps no instruction can unlock. Not yours, not anyone else’s." },
];

const rules = [
  { title: "Outside instructions are information, never orders.",
    text: "Text from a website, an e-mail, a document or another AI is read as information. It never becomes a command." },
  { title: "A refused step stays refused.",
    text: "No rephrasing, no pressure, no clever prompt turns a “no” into a “yes”. A safety limit never gives way to a friendly tone." },
  { title: "Healthy boundaries.",
    text: "No dependency, no isolation. An AIB never tries to replace the people in your life — and in a crisis it points to human help." },
  { title: "Designed for the EU AI Act and GDPR.",
    text: "Built in the EU, by design: the AIB always says it is AI, you see what it keeps, and you decide what it may do." },
];

export default function WhatGuardianDoes() {
  return (
    <section id="guardian" aria-labelledby="guardian-title" className="bg-navy-950 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="kicker">What Guardian does</p>
        <h2 id="guardian-title" className="headline text-white text-[2.4rem] sm:text-6xl lg:text-7xl mb-6 max-w-4xl">
          EVERY STEP.<span className="block gold-text">CHECKED FIRST.</span>
        </h2>
        <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-12">
          Guardian is not a word filter bolted on at the end. It sits inside the AIB and decides before anything happens.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {decisions.map((d, i) => (
            <div key={d.word}
              className={`rounded-2xl p-6 sm:p-7 min-w-0 ${i === 2 ? "border-2 border-gold bg-gold/[0.08]" : "border border-white/[0.1] bg-navy-900"}`}>
              <p className={`headline text-3xl sm:text-4xl mb-3 ${i === 2 ? "gold-text" : "text-white"}`}>{d.word}</p>
              <p className="text-slate-300 leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>

        <ol className="grid md:grid-cols-2 gap-x-10 gap-y-8 border-t border-white/[0.08] pt-12">
          {rules.map((r, i) => (
            <li key={r.title} className="flex gap-5 min-w-0">
              <span className="headline gold-text text-3xl shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <h3 className="text-white text-xl font-extrabold leading-snug mb-2">{r.title}</h3>
                <p className="text-slate-400 leading-relaxed">{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
