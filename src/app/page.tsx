import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/landing/hero-section';
import ProblemSection from '@/components/landing/problem-section';
import SolutionSection from '@/components/landing/solution-section';
import ValuePropositionSection from '@/components/landing/value-prop-section';
import MarketOpportunitySection from '@/components/landing/market-section';
import CompetitiveAdvantageSection from '@/components/landing/competition-section';
import FeaturesSection from '@/components/landing/features-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ValuePropositionSection />
        <MarketOpportunitySection />
        <CompetitiveAdvantageSection />

      </main>
      <Footer />
    </div>
  );
}
