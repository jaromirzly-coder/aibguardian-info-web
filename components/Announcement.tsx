import { DOWNLOAD, aibeva } from "@/lib/links";

// Announcement band under the menu — same message as aibeva.com, in the aibeva.com look.
export default function Announcement() {
  return (
    <aside aria-label="Announcement" className="announce-band relative mt-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-9 sm:py-12">
        <p className="flex items-center gap-3 text-sm font-semibold text-accent mb-4">
          <span className="announce-dot" aria-hidden="true" />
          AIBEVA, Level S2 · for Windows
        </p>
        <p className="headline text-ink text-[2rem] min-[400px]:text-[2.3rem] sm:text-5xl lg:text-[3.6rem] [text-wrap:balance] mb-5 max-w-4xl">
          Stop renting intelligence. <span className="text-primary">Own it.</span>
        </p>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-6 lg:gap-12 lg:items-end">
          <p className="text-soft text-base sm:text-lg leading-relaxed max-w-2xl">
            AIBEVA is an intelligent being that belongs to you, not to a platform. It lives on your PC, keeps its memory with you and has no ads and no subscription. The Guardian layer is inside every one.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={DOWNLOAD} target="_blank" rel="noopener" className="btn btn-primary w-full sm:w-auto">
              Download AIBEVA
            </a>
            <a href={aibeva("/check")} target="_blank" rel="noopener" className="btn btn-line w-full sm:w-auto">
              See where it connects
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
