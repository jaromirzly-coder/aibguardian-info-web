import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { aibeva } from "@/lib/links";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use of ${SITE.domain}, operated by SAY TO PAY s.r.o. (AIBlab), Ostrava, Czech Republic, EU.`,
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Use">
      <h2>1. Operator.</h2>
      <p>
        This website ({SITE.domain}) is operated by SAY TO PAY s.r.o. (AIBlab), Zámostní 1155/27, 710 00 Ostrava, Czech Republic, Company ID 086 94 222.
      </p>

      <h2>2. Information, not an offer.</h2>
      <p>
        The site provides general information about AIBlab and its products. It is not an offer to conclude a contract. Products are governed by their own terms (for AIBEVA: <a href={aibeva("/legal")} target="_blank" rel="noopener">https://aibeva.com/legal</a>).
      </p>

      <h2>3. Content and names.</h2>
      <p>
        All content — texts, images, logos and the names AIBlab, AIBEVA, AIB.core, AIBSN, AIBguardian, AIBgin and AIBfamily — is protected. You may share links and short quotes with attribution; any other use requires our written permission.
      </p>

      <h2>4. Accuracy.</h2>
      <p>
        We take care that information on the site is accurate, but provide it &ldquo;as is&rdquo; and may change it at any time. Statements about products in development describe our goals, not available features.
      </p>

      <h2>5. Links.</h2>
      <p>Links to other websites are provided for convenience; we are not responsible for their content.</p>

      <h2>6. Liability.</h2>
      <p>To the extent permitted by law, we are not liable for damages arising from the use of this website.</p>

      <h2>7. Governing law.</h2>
      <p>
        These terms are governed by Czech law. Courts of the Czech Republic have jurisdiction, without prejudice to mandatory consumer protection rules.
      </p>

      <h2>8. Contact.</h2>
      <p>Contact: <a href="mailto:info@aiblab.info">info@aiblab.info</a>.</p>
    </LegalPage>
  );
}
