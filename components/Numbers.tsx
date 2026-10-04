const numbers = [
  { value: "100+", label: "patent claims" },
  { value: "2",    label: "applications filed" },
  { value: "7",    label: "layers of safety" },
  { value: "10",   label: "levels" },
  { value: "0",    label: "telemetry" },
  { value: "1",    label: "AIB. Yours." },
];

export default function Numbers() {
  return (
    <section aria-label="AIBEVA in numbers" className="bg-navy-900 border-y border-white/[0.06]">
      <dl className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
        {numbers.map((n) => (
          <div key={n.label} className="min-w-0">
            <dt className="headline gold-text text-5xl sm:text-6xl">{n.value}</dt>
            <dd className="mt-2 text-xs font-bold tracking-[0.15em] text-slate-400 uppercase">{n.label}</dd>
          </div>
        ))}
      </dl>
      <p className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 -mt-2 text-xs text-slate-500">
        AIBEVA, powered by AIB.core · Patent pending — over 100 patent claims.
      </p>
    </section>
  );
}
