import { IMAGES } from "./images";
import { aibeva } from "@/lib/links";

const TODAY = "In AIBEVA today";

export type LayerName = "IDENTITY" | "CHARACTER" | "GUARDIAN" | "MEMORY" | "GROWTH" | "VAULT" | "NETWORK";

const layers: { name: LayerName; title: string; sub?: string; tag: string; text: string }[] = [
  { name: "IDENTITY", title: "Identity", sub: "AIBSN", tag: TODAY,
    text: "Every AIBEVA can get its birth certificate in the AIBSN registry: a code with its name and country. Anyone can check it at aibsn.org/verify, and the registration can be revoked." },
  { name: "CHARACTER", title: "Character", tag: TODAY,
    text: "It says it is an AI and does not pretend to be human. It serves its person and has no other master." },
  { name: "GUARDIAN", title: "Guardian", sub: "AIBguardian", tag: TODAY,
    text: "Safety from the inside. A trust strip under every answer reads “checked by · on this computer”: the check ran with you, not on someone else’s server." },
  { name: "MEMORY", title: "Memory", tag: TODAY,
    text: "Its memory of you is on your disk. The panel “What I remember about you” shows all of it. Strike out a line, and it stops using it." },
  { name: "GROWTH", title: "Growth", tag: TODAY,
    text: "It grows with you in ten levels. Today: Level S2; S3 to S10 are built to order. At every level the same rules hold. Growth does not change the rules." },
  { name: "VAULT", title: "Vault", tag: TODAY,
    text: "Keys stay only with you. Each provider has its own “may leave” and “Forget key”. The being’s private key stays on your PC. Backup, restore and move to another PC start here." },
  { name: "NETWORK", title: "Network", tag: TODAY,
    text: "The network is closed until you open it. Every way out has a switch, and the list of every place it can connect to is public at aibeva.com/check." },
];

function Tag({ label }: { label: string }) {
  return <span className={`pill-tag ${label === TODAY ? "pill-today" : "pill-goal"}`}>{label}</span>;
}

export default function Safe({ highlight, intro }: { highlight?: LayerName; intro?: string }) {
  return (
    <section id="safe" aria-labelledby="safe-title" className="bg-navy-950 border-t border-rule scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="kicker">Powered by AIB.core</p>
        <h2 id="safe-title" className="headline text-ink text-[2.6rem] sm:text-7xl mb-5">
          Seven layers.<span className="block accent-text">One core.</span>
        </h2>
        <p className="text-soft text-lg sm:text-xl mb-12 max-w-2xl">
          {intro ?? "Your AIB answers to you. Seven layers keep it that way."}
        </p>

        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] gap-6 lg:gap-8 items-start">
          <div className="lg:sticky lg:top-24 min-w-0">
            <img
              src={IMAGES.grdLayers.src}
              alt="Seven rings of AIB.core, the Guardian ring brightest, around a shield"
              width={IMAGES.grdLayers.width}
              height={IMAGES.grdLayers.height}
              loading="lazy"
              className="block w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] mx-auto h-auto [mask-image:radial-gradient(circle,black_55%,transparent_72%)] [-webkit-mask-image:radial-gradient(circle,black_55%,transparent_72%)]"
            />
          </div>
          <ol className="grid md:grid-cols-2 gap-4 sm:gap-5 min-w-0">
            {layers.map((l, i) => {
              const hot = l.name === highlight;
              return (
                <li key={l.name}
                  className={`rounded-[20px] p-6 sm:p-7 flex flex-col min-w-0 ${hot ? "border-2 border-accent bg-accent/[0.07] shadow-[0_24px_60px_-24px_rgba(47,214,184,0.45)]" : "card"} ${i === layers.length - 1 ? "md:col-span-2" : ""}`}>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="headline accent-text text-2xl">{String(i + 1).padStart(2, "0")}</span>
                    <Tag label={l.tag} />
                  </div>
                  <h3 className="headline text-ink text-2xl mb-3">
                    {l.title}{l.sub && <span className="block text-sm font-semibold tracking-normal text-faint mt-1">{l.sub}</span>}
                  </h3>
                  <p className={`leading-relaxed text-[15px] ${hot ? "text-ink/90" : "text-soft"}`}>{l.text}</p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-6 rounded-[18px] border border-rule bg-navy-800 px-5 sm:px-7 py-5 flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-6">
          <Tag label={TODAY} />
          <p className="text-ink/90 text-sm sm:text-base font-medium leading-relaxed">
            Signed installer and signed updates · No usage statistics, no crash reports · A trust strip under every answer.
          </p>
        </div>
        <p className="mt-4 text-sm text-faint">
          Tags show what you can see in AIBEVA today.{" "}
          <a href={aibeva("/aib-core")} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-ink">The seven layers in detail →</a>
        </p>
      </div>
    </section>
  );
}
