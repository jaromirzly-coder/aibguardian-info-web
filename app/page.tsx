import Navbar from "@/components/Navbar";
import Announcement from "@/components/Announcement";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import WhatGuardianDoes from "@/components/WhatGuardianDoes";
import Safe from "@/components/Safe";
import Never from "@/components/Never";
import GetAibeva from "@/components/GetAibeva";
import Product from "@/components/Product";
import HopeaBand from "@/components/HopeaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 overflow-x-hidden">
      <Navbar />
      <Announcement />
      <Hero />
      <Numbers />
      <WhatGuardianDoes />
      <Safe highlight="GUARDIAN" intro="Guardian is layer three of seven. Together they keep one rule: your AIB answers to you." />
      <Never />
      <GetAibeva
        title="Don’t trust us."
        accent="Look for yourself."
        intro="Every AIBEVA has AIBguardian inside. Download it, read the trust strip under each answer, open the Vault and compare every connection with the public list."
      />
      <Product />
      <HopeaBand />
      <Footer />
    </main>
  );
}
