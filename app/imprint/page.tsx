import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Imprint",
  description: `Imprint of ${SITE.domain} — SAY TO PAY s.r.o. (AIBlab), Ostrava, Czech Republic, EU.`,
  alternates: { canonical: "/imprint" },
};

export default function Imprint() {
  return (
    <LegalPage title="Imprint">
      <h2>SAY TO PAY s.r.o. (AIBlab)</h2>
      <p>Zámostní 1155/27, Slezská Ostrava, 710 00 Ostrava, Czech Republic, EU</p>
      <p>Company ID (IČO): 086 94 222</p>
      <p>Registered in the Commercial Register kept by the Regional Court in Ostrava, file C 80421</p>
      <p>Legal form: limited liability company</p>
      <p>Established: 14 November 2019</p>
      <p>General contact: <a href="mailto:info@aiblab.info">info@aiblab.info</a></p>
      <p>Support: <a href="mailto:support@aiblab.info">support@aiblab.info</a></p>
    </LegalPage>
  );
}
