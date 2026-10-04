import { DOWNLOAD } from "@/lib/links";
import { IMAGES } from "./images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <img
        src={IMAGES.grdHero.src}
        alt="A golden AIB core inside a calm protective field; outside data stops at its surface"
        width={IMAGES.grdHero.width}
        height={IMAGES.grdHero.height}
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] opacity-40 lg:opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-16 sm:pt-24 sm:pb-28">
        <p className="kicker">AIBguardian · the Guardian layer of every AIB</p>
        <h1 className="headline text-white text-[2.6rem] min-[400px]:text-5xl sm:text-7xl lg:text-8xl mb-7 sm:mb-9 max-w-5xl">
          SAFETY ISN&rsquo;T A FILTER.
          <span className="block gold-text">IT&rsquo;S THE CORE.</span>
        </h1>
        <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl mb-4">
          AIBguardian is the Guardian layer inside every AIBEVA. Before any step, it decides what an AIB may do alone, only with you — or never.
        </p>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-9">
          Also available on its own for companies and device makers: records of permissions, reasons for actions and the origin of every change — ready for audit.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href={DOWNLOAD} target="_blank" rel="noopener"
            className="btn-gold inline-flex items-center justify-center px-7 py-4 rounded-xl font-extrabold text-base transition-all hover:-translate-y-0.5">
            See it working — download AIBEVA free
          </a>
          <a href="#product"
            className="inline-flex items-center justify-center border border-white/30 text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/[0.08] transition-all">
            AIBguardian in your product
          </a>
        </div>
      </div>
    </section>
  );
}
