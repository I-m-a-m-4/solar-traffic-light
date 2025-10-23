import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Dashboard from "./analysis-client";

export default function AnalysisPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1  container mx-auto px-4 py-8">
        <div className="space-y-4 text-center mt-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-light font-manrope tracking-tighter text-white">Traffic Data Analysis Tool</h1>
          <p className="text-lg md:text-xl text-white/70">
            Leverage AI to analyze traffic patterns and system performance.
          </p>
        </div>
       <Dashboard/>
      </main>
      <Footer />
    </div>
  );
}
