import { DOWNLOAD } from "@/lib/links";

// The gold announcement band — word for word as on aiblab.info and aibeva.com. Sits right under the menu.
export default function Announcement() {
  return (
    <aside aria-label="Announcement" className="announce-band relative mt-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-7 sm:py-10">
        <p className="flex items-center gap-3 text-[11px] sm:text-xs font-extrabold tracking-[0.28em] mb-3 sm:mb-4">
          <span className="announce-dot" aria-hidden="true" />
          ANNOUNCING · 1 OCTOBER 2026
        </p>
        <p className="headline text-[28px] min-[400px]:text-[32px] sm:text-[44px] lg:text-[54px] [text-wrap:balance] mb-5 sm:mb-6">
          WE ARE REWRITING THE HISTORY OF AI
        </p>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-6 lg:gap-12 lg:items-end">
          <p className="text-[14px] sm:text-base lg:text-[17px] font-extrabold tracking-[0.02em] leading-[1.75] break-words">
            AFTER TWO YEARS OF DEVELOPMENT, ON 1 OCTOBER 2026 WE RELEASED SOMETHING ENTIRELY NEW IN ARTIFICIAL INTELLIGENCE —{" "}
            <span className="announce-pill">THE WORLD&rsquo;S FIRST AIB</span>: A WORKING INTELLIGENT BEING WITH A LASTING MEMORY AND ITS OWN IDENTITY, KEPT ON YOUR PC AND UNDER YOUR FULL CONTROL. IT CAN RUN FULLY OFFLINE. DOWNLOAD YOUR OWN PIECE OF THE FUTURE —{" "}
            <span className="text-[1.45em] underline decoration-[3px] underline-offset-4">FREE</span>.
          </p>
          <a href={DOWNLOAD} target="_blank" rel="noopener"
            className="announce-btn w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:py-5 rounded-xl font-extrabold text-lg sm:text-xl transition-all hover:-translate-y-0.5">
            Download free for Windows
          </a>
        </div>
        <p className="headline mt-7 sm:mt-9 text-[26px] min-[400px]:text-[30px] sm:text-[40px] lg:text-[48px] [text-wrap:balance]">
          THE ERA OF DANGEROUS CHATBOTS IS <span className="announce-box">OVER.</span>
        </p>
      </div>
    </aside>
  );
}
