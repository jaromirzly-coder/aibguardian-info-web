import { SITE } from "@/lib/site";
import { ECOSYSTEM } from "@/lib/links";
import CookieSettings from "./CookieSettings";

const H = "text-xs font-bold text-slate-400 mb-5 uppercase tracking-[0.15em]";
const A = "text-sm text-slate-500 hover:text-white transition-colors";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="min-w-0">
            <p className="font-black text-white text-lg tracking-tight mb-3">{SITE.name}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{SITE.tagline}</p>
          </div>

          <nav aria-label="Pages" className="min-w-0">
            <h2 className={H}>{SITE.name}</h2>
            <ul className="space-y-3">
              {SITE.pages.map((p) => (
                <li key={p.href}><a href={p.href} className={A}>{p.label}</a></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="AIBlab ecosystem" className="min-w-0">
            <h2 className={H}>AIBlab ecosystem</h2>
            <ul className="space-y-3">
              {ECOSYSTEM.map((e) => (
                <li key={e.label}>
                  <a href={e.href} {...(e.href === "/" ? {} : { target: "_blank", rel: "noopener" })} className={A}>
                    {e.label} <span className="text-slate-600">— {e.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal" className="min-w-0">
            <h2 className={H}>Legal</h2>
            <ul className="space-y-3">
              <li><a href="/imprint" className={A}>Imprint</a></li>
              <li><a href="/privacy-policy" className={A}>Privacy Policy</a></li>
              <li><a href="/terms" className={A}>Terms</a></li>
              <li><CookieSettings className={`${A} text-left`} /></li>
              <li><a href="mailto:info@aiblab.info" className={A}>info@aiblab.info</a></li>
              <li><a href="mailto:support@aiblab.info" className={A}>support@aiblab.info</a></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/[0.06] pt-8 text-xs text-slate-600 leading-relaxed">
          SAY TO PAY s.r.o. (AIBlab) · Company ID 086 94 222 · Ostrava, EU · since 2019
        </div>
      </div>
    </footer>
  );
}
