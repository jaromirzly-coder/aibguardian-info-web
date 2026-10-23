import { IMAGES } from "./images";
import { aibeva } from "@/lib/links";

const answers = [
  { word: "Yes",               text: "Ordinary steps: it talks with you and keeps what you tell it, on your PC." },
  { word: "Only with your yes", text: "Every way out. Each provider has its own switch in the Vault, and you hold it." },
  { word: "No",                text: "It does not pretend to be human, show you ads or act on the internet on its own." },
];

const checks = [
  { title: "A trust strip under every answer.",
    text: "Under each answer: “checked by · on this computer”. The check ran with you, not on someone else’s server." },
  { title: "A switch for every way out.",
    text: "Its network is closed. In the Vault, each provider has its own “may leave” and “Forget key”. Nothing switches itself back on." },
  { title: "A memory you can read.",
    text: "One panel, “What I remember about you”, shows its whole memory of you. Strike out a line, and it stops using it." },
  { title: "A public list of every connection.",
    text: "aibeva.com/check lists every place AIBEVA can connect to. There are no others." },
  { title: "It says it is an AI.",
    text: "It does not pretend to be human. The EU AI Act asks for this; AIBEVA has it from birth." },
  { title: "A person reads your reports.",
    text: "Don’t like an answer? “Report this answer” opens your own e-mail, and a person reads it." },
];

const goals = [
  { title: "Outside text is information, not an order.",
    text: "A web page, an e-mail or another AI should be to it what a newspaper is to you: a source, not a commander." },
  { title: "A safety limit does not give way to a friendly tone.",
    text: "Rephrasing or pressure should not turn a “no” into a “yes”." },
  { title: "Healthy boundaries.",
    text: "No dependency, no isolation. An AIB should not try to replace the people in your life, and in a crisis it should point to human help." },
];

export default function WhatGuardianDoes() {
  return (
    <section id="guardian" aria-labelledby="guardian-title" className="bg-navy-950 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="kicker">What Guardian does</p>
        <h2 id="guardian-title" className="headline text-ink text-[2.4rem] sm:text-6xl mb-6 max-w-4xl">
          Safety isn&rsquo;t a filter.<span className="block accent-text">It&rsquo;s the core.</span>
        </h2>
        <p className="text-soft text-lg sm:text-xl leading-relaxed max-w-2xl mb-12">
          Guardian is not a word filter at the end of the line. It is one of the seven layers of AIB.core, inside the AIB. You decide what it keeps, which model runs under it and where it may connect.
        </p>

        <img
          src={IMAGES.grdDoes.src}
          alt="Three paths from an AIB core: open, through a gate that waits for you, and ending at a wall of light"
          width={IMAGES.grdDoes.width}
          height={IMAGES.grdDoes.height}
          loading="lazy"
          className="w-full h-auto max-h-[440px] object-cover rounded-[22px] border border-rule mb-10 sm:mb-12"
        />
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {answers.map((d, i) => (
            <div key={d.word}
              className={`rounded-[20px] p-6 sm:p-7 min-w-0 ${i === 2 ? "bg-accent text-accent-ink" : "card"}`}>
              <p className={`headline text-3xl sm:text-[2.2rem] mb-3 ${i === 2 ? "text-accent-ink" : "text-ink"}`}>{d.word}</p>
              <p className={`leading-relaxed ${i === 2 ? "text-accent-ink" : "text-soft"}`}>{d.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-t border-rule pt-12 mb-8">
          <h3 className="headline text-ink text-3xl sm:text-4xl">What you can check today.</h3>
          <a href={aibeva("/check")} target="_blank" rel="noopener" className="btn btn-line self-start sm:self-auto">Check it yourself ↗</a>
        </div>
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mb-16">
          {checks.map((r, i) => (
            <li key={r.title} className="flex gap-5 min-w-0">
              <span className="headline accent-text text-2xl shrink-0 w-9">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <h4 className="text-ink text-lg font-semibold leading-snug mb-2">{r.title}</h4>
                <p className="text-soft leading-relaxed">{r.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="card p-6 sm:p-8">
          <span className="pill-tag pill-goal mb-4">Our goals</span>
          <ul className="grid md:grid-cols-3 gap-6 md:gap-8 mt-4">
            {goals.map((g) => (
              <li key={g.title} className="min-w-0">
                <h4 className="text-ink text-lg font-semibold leading-snug mb-2">{g.title}</h4>
                <p className="text-soft leading-relaxed">{g.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
