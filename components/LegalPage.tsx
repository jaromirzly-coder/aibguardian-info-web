import Navbar from "./Navbar";
import Footer from "./Footer";

export const LAST_UPDATED = "4 October 2026";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-navy-950 overflow-x-hidden">
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <h1 className="headline text-white text-4xl sm:text-6xl mb-4">{title}</h1>
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500 mb-12">Last updated: {LAST_UPDATED}</p>
        <div className="legal text-slate-300 text-base sm:text-[17px] leading-relaxed">{children}</div>
      </article>
      <Footer />
    </main>
  );
}
