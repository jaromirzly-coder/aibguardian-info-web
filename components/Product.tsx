import { IMAGES, CORE_CAPTION } from "./images";

const records = [
  { title: "Records of permissions", text: "Who allowed what, in which scope and until when — and when it was revoked." },
  { title: "Reasons for actions",    text: "For every step: what the AIB did, and why it was allowed." },
  { title: "Origin of changes",      text: "Where every change came from — so nothing changes silently." },
];

export default function Product() {
  return (
    <section id="product" aria-labelledby="product-title" className="bg-navy-900 border-t border-white/[0.06] scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="min-w-0">
            <p className="kicker">For companies and device makers</p>
            <h2 id="product-title" className="headline text-white text-[2.4rem] sm:text-6xl mb-6">
              AIBGUARDIAN<span className="block gold-text">IN YOUR PRODUCT.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              The same Guardian layer that protects every AIBEVA — available on its own for your AI product or device. Built so you can show an auditor exactly what happened, and why.
            </p>
            <a href="mailto:info@aiblab.info?subject=AIBguardian%20in%20our%20product"
              className="btn-gold inline-flex items-center justify-center w-full sm:w-auto px-7 py-4 rounded-xl font-extrabold text-base transition-all hover:-translate-y-0.5">
              Talk to us: info@aiblab.info
            </a>
            <p className="mt-4 text-sm text-slate-400">Terms by agreement. Patent pending — over 100 patent claims.</p>
          </div>
          <ul className="min-w-0 space-y-4">
            {records.map((r) => (
              <li key={r.title} className="rounded-2xl border border-white/[0.1] bg-navy-950 p-6">
                <h3 className="text-white text-lg font-extrabold mb-1">{r.title}</h3>
                <p className="text-slate-400 leading-relaxed">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figure>
        <div className="relative overflow-hidden">
          <img
            src={IMAGES.core.src}
            alt="AIB.core — concept visual of the hardware edition"
            width={IMAGES.core.width}
            height={IMAGES.core.height}
            loading="lazy"
            className="w-full h-[320px] sm:h-[440px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
              <p className="headline text-white text-[2rem] sm:text-6xl">SOFTWARE TODAY.<span className="block gold-text">SILICON NEXT.</span></p>
              <p className="mt-3 text-slate-200 max-w-xl">AIBguardian is part of AIB.core — the engine behind AIBEVA. A dedicated hardware edition of AIB.core is in development.</p>
            </div>
          </div>
        </div>
        <figcaption className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-xs text-slate-500">{CORE_CAPTION}</figcaption>
      </figure>
    </section>
  );
}
