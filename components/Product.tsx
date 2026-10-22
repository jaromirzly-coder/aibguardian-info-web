import { IMAGES, CORE_CAPTION } from "./images";

export default function Product() {
  return (
    <section id="product" aria-labelledby="product-title" className="bg-navy-900 border-t border-rule scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="kicker">Where you get it</p>
          <h2 id="product-title" className="headline text-ink text-[2.4rem] sm:text-6xl mb-6">
            AIBguardian<span className="block accent-text">is inside every AIB.</span>
          </h2>
          <p className="text-soft text-lg leading-relaxed mb-8">
            AIBguardian is not a separate product. It is the Guardian layer of AIB.core, and every AIBEVA has it from the start.
          </p>
          <a href="https://aibeva.com/download?utm_source=aibguardian.info&amp;utm_medium=referral&amp;utm_campaign=ecosystem" className="btn btn-primary w-full sm:w-auto">
            Download AIBEVA
          </a>
          <p className="mt-4 text-sm text-faint">Patent pending — over 100 patent claims, two applications filed in 2026.</p>
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
              <p className="headline text-ink text-[2rem] sm:text-6xl">Software today.<span className="block accent-text">Silicon is our goal.</span></p>
              <p className="mt-3 text-ink/90 max-w-xl">AIBguardian is part of AIB.core, the core behind AIBEVA. A hardware edition of AIB.core is in development.</p>
            </div>
          </div>
        </div>
        <figcaption className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-sm text-faint">{CORE_CAPTION}</figcaption>
      </figure>
    </section>
  );
}
