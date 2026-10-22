import { IMAGES, CORE_CAPTION } from "./images";

const records = [
  { title: "Records of permissions", text: "Who allowed what, in which scope and until when, and when it was revoked." },
  { title: "Reasons for actions",    text: "For every step: what the AIB did, and why it was allowed." },
  { title: "Origin of changes",      text: "Where every change came from, so nothing changes silently." },
];

export default function Product() {
  return (
    <section id="product" aria-labelledby="product-title" className="bg-navy-900 border-t border-rule scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="min-w-0">
            <p className="kicker">For companies and device makers</p>
            <h2 id="product-title" className="headline text-ink text-[2.4rem] sm:text-6xl mb-6">
              AIBguardian<span className="block accent-text">in your product.</span>
            </h2>
            <p className="text-soft text-lg leading-relaxed mb-8">
              The same Guardian layer that sits inside every AIBEVA, for your own AI product or device. Our goal is simple: you can show an auditor what happened, and why.
            </p>
            <a href="mailto:info@aiblab.info?subject=AIBguardian%20in%20our%20product" className="btn btn-primary w-full sm:w-auto">
              Talk to us: info@aiblab.info
            </a>
            <p className="mt-4 text-sm text-faint">Terms by agreement. Patent pending — over 100 patent claims, two applications filed in 2026.</p>
          </div>
          <div className="min-w-0">
            <span className="pill-tag pill-goal mb-4">Our goals for partners</span>
            <ul className="space-y-4 mt-4">
              {records.map((r) => (
                <li key={r.title} className="rounded-[20px] border border-rule bg-navy-950 p-6">
                  <h3 className="text-ink text-lg font-semibold mb-1">{r.title}</h3>
                  <p className="text-soft leading-relaxed">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
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
