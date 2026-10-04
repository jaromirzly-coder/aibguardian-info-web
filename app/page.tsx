import Navbar from "@/components/Navbar";
import Announcement from "@/components/Announcement";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import WhatGuardianDoes from "@/components/WhatGuardianDoes";
import Safe from "@/components/Safe";
import Never from "@/components/Never";
import GetAibeva from "@/components/GetAibeva";
import Product from "@/components/Product";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 overflow-x-hidden">
      <Navbar />
      <Announcement />
      <Hero />
      <Numbers />
      <WhatGuardianDoes />
      <Safe highlight="GUARDIAN" intro="Guardian is layer three of seven. Together they make one rule hold: your AIB answers to you." />
      <Never />
      <GetAibeva
        title="SEE IT WORKING:"
        gold="DOWNLOAD AIBEVA FREE."
        intro="Every AIBEVA has AIBguardian inside. Download it, talk to it, try to talk it out of its limits — and watch Guardian hold."
      />
      <Product />
      <Footer />
    </main>
  );
}
