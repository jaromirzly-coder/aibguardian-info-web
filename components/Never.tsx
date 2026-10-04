import { IMAGES } from "./images";

const never = [
  "Pretend to be human.",
  "Act against its person — or follow an outside instruction without you.",
  "Copy itself into another being.",
  "Silently rewrite its own history.",
  "Use your life to train someone else’s AI.",
  "Make you dependent or cut you off from people.",
  "Promise it is never wrong — it admits a mistake, records it and does not repeat it.",
];

export default function Never() {
  return (
    <section id="never" aria-labelledby="never-title" className="bg-navy-900 border-y border-white/[0.06] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="kicker">Hard limits</p>
        <h2 id="never-title" className="headline text-white text-[2.4rem] sm:text-6xl mb-10 sm:mb-12">
          WHAT YOUR AIB<span className="block gold-text">WILL NEVER DO.</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <img
            src={IMAGES.guardian.src}
            alt="The Guardian layer: outside instructions break against the shield"
            width={IMAGES.guardian.width}
            height={IMAGES.guardian.height}
            loading="lazy"
            className="w-full h-auto rounded-2xl border border-white/[0.08] min-w-0"
          />
          <ul className="min-w-0 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {never.map((n) => (
              <li key={n} className="flex gap-4 py-4 sm:py-5">
                <svg className="w-5 h-5 mt-1 shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 6l12 12M18 6L6 18"/>
                </svg>
                <span className="text-white text-base sm:text-lg leading-relaxed">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
