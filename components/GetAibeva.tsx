import { aibeva, AIBLAB, DOWNLOAD } from "@/lib/links";
import { IMAGES } from "./images";

// "Meet AIBEVA" call to action — shared by every AIBlab site; headline and intro differ per site.
export default function GetAibeva({
  kicker = "See it for yourself",
  title,
  accent,
  intro,
  adultsNote = false,
}: {
  kicker?: string;
  title: string;
  accent: string;
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
        className="absolute inset-0 w-full h-full object-cover object-left opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <p className="kicker">{kicker}</p>
        <h2 id="aibeva-title" className="headline text-ink text-[2.4rem] sm:text-6xl lg:text-7xl mb-6 max-w-4xl">
          {title}<span className="block accent-text">{accent}</span>
        </h2>
        <p className="text-ink/90 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">{intro}</p>
        <ul className="grid sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mb-9 text-sm font-semibold text-ink">
          {["Its own identity", "A memory you can read, on your PC", "No ads · no subscription"].map((t) => (
            <li key={t} className="rounded-[14px] border border-rule bg-navy-900/85 px-4 py-3">{t}</li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={DOWNLOAD} target="_blank" rel="noopener" className="btn btn-primary">
            Download AIBEVA for Windows
          </a>
          <a href={aibeva("/check")} target="_blank" rel="noopener" className="btn btn-line bg-navy-950/40">
            Check it yourself ↗
          </a>
          <a href={AIBLAB} target="_blank" rel="noopener" className="btn btn-line bg-navy-950/40">
            AIBlab ↗
          </a>
        </div>
        <p className="mt-6 text-sm text-soft max-w-2xl">
          Windows 10/11, 64-bit · signed installer · no usage statistics, no crash reports.{adultsNote ? " AIBEVA is for adults (18+)." : ""} AIBEVA is an artificial intelligence system. When you use it, you are interacting with an AI, not a human being.
        </p>
      </div>
    </section>
  );
}
