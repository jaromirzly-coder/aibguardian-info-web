import { aibeva, AIBLAB, DOWNLOAD } from "@/lib/links";
import { IMAGES } from "./images";

// "Meet AIBEVA" call to action — shared by every AIBlab site; headline and intro differ per site.
export default function GetAibeva({
  kicker = "See it working",
  title,
  gold,
  intro,
  adultsNote = false,
}: {
  kicker?: string;
  title: string;
  gold: string;
  intro: string;
  adultsNote?: boolean;
}) {
  return (
    <section id="aibeva" aria-labelledby="aibeva-title" className="relative overflow-hidden bg-navy-950 scroll-mt-16">
      <img
        src={IMAGES.grdAibeva.src}
        alt="Your AIB lives on your own computer"
        width={IMAGES.grdAibeva.width}
        height={IMAGES.grdAibeva.height}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-left opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <p className="kicker">{kicker}</p>
        <h2 id="aibeva-title" className="headline text-white text-[2.4rem] sm:text-6xl lg:text-7xl mb-6 max-w-4xl">
          {title}<span className="block gold-text">{gold}</span>
        </h2>
        <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">{intro}</p>
        <ul className="grid sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mb-9 text-sm font-semibold text-slate-200">
          {["Its own identity", "A memory you can see — on your PC", "Free for Windows · no account"].map((t) => (
            <li key={t} className="rounded-xl border border-white/15 bg-navy-900/80 px-4 py-3">{t}</li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href={DOWNLOAD} target="_blank" rel="noopener"
            className="btn-gold inline-flex items-center justify-center px-7 py-4 rounded-xl font-extrabold text-base transition-all hover:-translate-y-0.5">
            Download AIBEVA free for Windows
          </a>
          <a href={aibeva()} target="_blank" rel="noopener"
            className="inline-flex items-center justify-center border border-white/30 text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/[0.08] transition-all">
            Meet AIBEVA ↗
          </a>
          <a href={AIBLAB} target="_blank" rel="noopener"
            className="inline-flex items-center justify-center border border-white/30 text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/[0.08] transition-all">
            AIBlab ↗
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-400 max-w-2xl">
          Windows 10/11, 64-bit · signed installer · zero telemetry.{adultsNote ? " AIBEVA is for adults (18+)." : ""} AIBEVA is an artificial intelligence system — you are interacting with an AI, not a human being.
        </p>
      </div>
    </section>
  );
}
