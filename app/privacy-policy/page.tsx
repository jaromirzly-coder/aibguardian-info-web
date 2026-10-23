import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { aibeva } from "@/lib/links";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.domain} processes personal data: hosting logs, cookieless statistics, Google Analytics only with your consent.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>1. Who we are.</h2>
      <p>
        The controller of personal data processed on {SITE.domain} is SAY TO PAY s.r.o. (AIBlab), Zámostní 1155/27, 710 00 Ostrava, Czech Republic, Company ID 086 94 222. Contact: <a href="mailto:info@aiblab.info">info@aiblab.info</a>.
      </p>

      <h2>2. What this site collects.</h2>
      <ul>
        <li>(a) Technical data needed to deliver the site — IP address, browser and time of request — processed by our hosting provider Vercel Inc. in server logs, on the basis of our legitimate interest in running a secure website.</li>
        <li>(b) Anonymous usage statistics through Vercel Web Analytics, which uses no cookies and does not identify you.</li>
        <li>(c) Google Analytics 4 — only if you click &ldquo;Accept&rdquo; in the cookie banner. It sets cookies and processes pseudonymous usage data (pages viewed, approximate location, device type). Legal basis: your consent, which you can withdraw at any time via &ldquo;Cookie settings&rdquo; in the footer.</li>
        <li>(d) E-mails you send us — your address and message, used only to reply to you.</li>
      </ul>

      <h2>3. What we do not do.</h2>
      <p>No advertising, no tracking pixels, no selling or sharing of data for marketing, no profiling.</p>

      <h2>4. Processors and transfers.</h2>
      <p>
        Vercel Inc. (hosting, USA) and Google Ireland Ltd. / Google LLC (Analytics, only with consent). Transfers to the USA rely on the EU–US Data Privacy Framework and/or standard contractual clauses.
      </p>

      <h2>5. How long.</h2>
      <p>
        Server logs are kept for a short period by Vercel; Google Analytics data is kept for up to 14 months; e-mails as long as needed to handle your request.
      </p>

      <h2>6. Your rights.</h2>
      <p>
        Access, rectification, erasure, restriction, objection, data portability and withdrawal of consent. Write to <a href="mailto:info@aiblab.info">info@aiblab.info</a>. You may also lodge a complaint with the Czech data protection authority (Úřad pro ochranu osobních údajů, <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>).
      </p>

      <h2>7. Our products.</h2>
      <p>
        AIBEVA and other AIBlab products have their own privacy terms on their websites (e.g. <a href={aibeva("/legal")} target="_blank" rel="noopener">https://aibeva.com/legal</a>).
      </p>

      <h2>8. Changes.</h2>
      <p>We will update this page when our processing changes.</p>
    </LegalPage>
  );
}
