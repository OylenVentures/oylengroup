import Header from "@/components/layout/Header";
import Hero from "@/components/ui/Hero";
import StatsBar from "@/components/ui/StatsBar";
import FeaturedSubsidiaries from "@/components/ui/FeaturedSubsidiaries";
import SolveSection from "@/components/ui/SolveSection";
import PillarsSection from "@/components/ui/PillarsSection";
import CtaSection from "@/components/ui/CtaSection";
import Footer from "@/components/layout/Footer";
import MobileTabBar from "@/components/ui/MobileTabBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <FeaturedSubsidiaries />
        <SolveSection />
        <PillarsSection />
        <CtaSection />
      </main>
      <Footer />
      <MobileTabBar />
    </>
  );
}
