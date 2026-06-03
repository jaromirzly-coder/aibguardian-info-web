import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import Tested from "@/components/Tested";
import Architecture from "@/components/Architecture";
import AibsnPassport from "@/components/AibsnPassport";
import Ecosystem from "@/components/Ecosystem";
import ParentsCTA from "@/components/ParentsCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatIs />
      <Tested />
      <Architecture />
      <AibsnPassport />
      <Ecosystem />
      <ParentsCTA />
      <Footer />
    </main>
  );
}
