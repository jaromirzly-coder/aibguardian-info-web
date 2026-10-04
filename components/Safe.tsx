import { IMAGES } from "./images";
import { aibeva } from "@/lib/links";

const TODAY = "In AIBEVA today";
const ARCH = "AIB.core architecture";

export type LayerName = "IDENTITY" | "CHARACTER" | "GUARDIAN" | "MEMORY" | "GROWTH" | "VAULT" | "NETWORK";

const layers: { name: LayerName; sub?: string; tag: string; text: string }[] = [
  { name: "IDENTITY", sub: "AIBSN", tag: TODAY,
    text: "Every AIB knows who it is and whom it serves. Permissions have a scope and an expiry, and you can revoke them. No AIB ever copies itself." },
  { name: "CHARACTER", tag: TODAY,
    text: "A core that never changes. It always says it is AI. It serves its person. A safety limit never gives way to a friendly tone." },
  { name: "GUARDIAN", sub: "AIBguardian", tag: TODAY,
    text: "Outside instructions are information, never orders: text from a website, an e-mail or another AI is not a command. No dependency, no isolation; in a crisis it points to human help." },
  { name: "MEMORY", tag: TODAY,
    text: "You see every line it keeps. “Forget” works at once. Nothing is silently rewritten." },
  { name: "GROWTH", tag: ARCH,
    text: "Every change is tested first. If it would make your AIB worse at anything, it does not happen. Every change can be undone." },
  { name: "VAULT", tag: TODAY,
    text: "Keys stay on your device. The model never sees a password. Not even AIBlab can open it." },
  { name: "NETWORK", tag: ARCH,
    text: "AIBs share only what is needed. Every exchange is signed by identity; an answer from another AIB is information, not an order." },
];

function Tag({ label }: { label: string }) {
  return label === TODAY ? (
    <span className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full bg-gold/15 border border-gold/60 text-gold-light">{label}</span>
  ) : (
    <span className="inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border border-white/20 text-slate-300">{label}</span>
  );
}

export default function Safe({ highlight, intro }: { highlight?: LayerName; intro?: string }) {
  return (
    <section id="safe" aria-labelledby="safe-title" className="bg-navy-950 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="kicker">Safe by design · yours by right</p>
        <h2 id="safe-title" className="headline text-white text-[2.6rem] sm:text-7xl mb-5">
          SEVEN LAYERS.<span className="block gold-text">ONE RULE.</span>
        </h2>
        <p className="text-slate-300 text-lg sm:text-xl mb-12 max-w-2xl">
          {intro ?? "Your AIB answers to you. Seven layers make sure of it."}
        </p>

        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] gap-6 lg:gap-8 items-start">
          <div className="lg:sticky lg:top-24 min-w-0">
            <img
              src={IMAGES.safeLayers.src}
              alt="Seven layers of AIB.core around one core"
              width={IMAGES.safeLayers.width}
              height={IMAGES.safeLayers.height}
              loading="lazy"
              className="w-full h-auto max-h-[420px] lg:max-h-none object-cover rounded-2xl border border-white/[0.08]"
            />
          </div>
          <ol className="grid md:grid-cols-2 gap-4 sm:gap-5 min-w-0">
            {layers.map((l, i) => {
              const hot = l.name === highlight;
              return (
                <li key={l.name}
                  className={`rounded-2xl p-6 sm:p-7 flex flex-col min-w-0 ${hot ? "border-2 border-gold bg-gold/[0.08] shadow-[0_0_60px_rgba(212,169,79,0.18)]" : "border border-white/[0.1] bg-navy-900"} ${i === layers.length - 1 ? "md:col-span-2" : ""}`}>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="headline gold-text text-2xl">{String(i + 1).padStart(2, "0")}</span>
                    <Tag label={l.tag} />
                  </div>
                  <h3 className="headline text-white text-2xl mb-3">
                    {l.name}{l.sub && <span className="block text-sm font-semibold normal-case tracking-normal text-slate-400 mt-1">{l.sub}</span>}
                  </h3>
                  <p className={`leading-relaxed text-[15px] ${hot ? "text-slate-200" : "text-slate-400"}`}>{l.text}</p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-6 rounded-2xl border border-gold/50 bg-gold/[0.07] px-5 sm:px-7 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <Tag label={TODAY} />
          <p className="text-slate-200 text-sm sm:text-base font-semibold leading-relaxed">
            Signed installer and signed updates · Zero telemetry · Every answer shows which brain spoke and whether the network is on.
          </p>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Tags show what is in AIBEVA today and what is part of the AIB.core architecture.{" "}
          <a href={aibeva("/aib-core")} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-white">The seven layers in detail →</a>
        </p>
      </div>
    </section>
  );
}
