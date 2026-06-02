import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Verdicts from "@/components/Verdicts";
import Architecture from "@/components/Architecture";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Powered from "@/components/Powered";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Verdicts />
      <Architecture />
      <Features />
      <UseCases />
      <Powered />
      <Footer />
    </main>
  );
}
