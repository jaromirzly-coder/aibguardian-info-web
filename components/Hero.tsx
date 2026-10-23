import { DOWNLOAD } from "@/lib/links";
import { IMAGES } from "./images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <img
        src={IMAGES.grdHero.src}
        alt="A glowing AIB core inside a calm protective field; outside data stops at its surface"
        width={IMAGES.grdHero.width}
        height={IMAGES.grdHero.height}
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] opacity-35 lg:opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(45%_60%_at_80%_30%,rgba(47,214,184,0.16),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-16 sm:pt-24 sm:pb-28">
        <p className="kicker">AIBguardian · the Guardian layer of every AIB</p>
        <h1 className="headline text-ink text-[2.7rem] min-[400px]:text-5xl sm:text-7xl lg:text-[5.6rem] mb-7 sm:mb-9 max-w-4xl">
          Safety you can check.
          <span className="block accent-text">Not safety you were promised.</span>
        </h1>
        <p className="text-ink/90 text-lg sm:text-xl leading-relaxed max-w-2xl mb-4">
          AIBguardian is the Guardian layer inside every AIBEVA. Safety is not an add-on bolted on at the end. It is a layer of the core.
        </p>
        <p className="text-soft text-base sm:text-lg leading-relaxed max-w-2xl mb-9">
          We don&rsquo;t ask for your trust. We ask you to look: where it connects, what it remembers, who signed it. You can check it yourself, at your own PC, in five minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={DOWNLOAD} target="_blank" rel="noopener" className="btn btn-primary">
            Download AIBEVA
          </a>
          <a href="#product" className="btn btn-line">
            Where you get it
          </a>
        </div>
      </div>
    </section>
  );
}
