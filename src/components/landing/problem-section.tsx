import { AlertTriangle, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '../fade-in';

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-24">
       <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-manrope font-light tracking-tighter">
              The High Cost of Inefficient Traffic
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Urban traffic congestion costs Lagos ₦4 trillion annually in lost productivity. Traditional traffic lights are inefficient, grid-dependent, and fail during power outages, increasing crashes and emissions.
            </p>
          </div>
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn delay="100ms">
            <Card className="h-full bg-gradient-to-b from-white/[0.03] to-transparent border-white/10">
              <CardContent className="p-8 text-center">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-xl bg-destructive/10 text-destructive mb-4 ring-1 ring-inset ring-destructive/20">
                    <AlertTriangle/>
                </div>
                <p className="text-lg font-semibold text-white">Grid Dependency & Failures</p>
                <p className="text-muted-foreground mt-2">
                  Traditional signals fail during power outages, leading to chaos, increased accidents, and a complete halt in traffic flow.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay="200ms">
            <Card className="h-full bg-gradient-to-b from-white/[0.03] to-transparent border-white/10">
              <CardContent className="p-8 text-center">
                 <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 ring-1 ring-inset ring-primary/20">
                    <Clock/>
                </div>
                <p className="text-lg font-semibold text-white">Lost Productivity</p>
                <p className="text-muted-foreground mt-2">
                  <span className="font-bold text-foreground">Lagos residents lose 4 hours daily to traffic,</span> a significant drain on economic productivity and personal well-being.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
