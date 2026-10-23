import { IMAGES } from "./images";

const doesNot = [
  "It does not pretend to be human.",
  "It does not act on the internet on its own.",
  "It does not show you ads or sell you anything.",
  "It does not send your conversations to us.",
  "It does not keep a hidden memory.",
  "It does not switch a way out back on by itself.",
  "Nobody downgrades it from afar.",
];

export default function Never() {
  return (
    <section id="never" aria-labelledby="never-title" className="bg-navy-900 border-y border-rule scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="kicker">Hard limits</p>
        <h2 id="never-title" className="headline text-ink text-[2.4rem] sm:text-6xl mb-10 sm:mb-12">
          What your AIB<span className="block accent-text">does not do.</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <img
            src={IMAGES.grdNever.src}
            alt="An AIB core with seven boundaries of light"
            width={IMAGES.grdNever.width}
            height={IMAGES.grdNever.height}
            loading="lazy"
            className="w-full h-auto rounded-[22px] border border-rule min-w-0"
          />
          <div className="min-w-0">
            <ul className="divide-y divide-rule border-y border-rule">
              {doesNot.map((n) => (
                <li key={n} className="flex gap-4 py-4 sm:py-5">
                  <svg className="w-5 h-5 mt-1 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 6l12 12M18 6L6 18"/>
                  </svg>
                  <span className="text-ink text-base sm:text-lg leading-relaxed">{n}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 headline text-ink text-2xl sm:text-3xl">Not by a promise. By the way it is built.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
