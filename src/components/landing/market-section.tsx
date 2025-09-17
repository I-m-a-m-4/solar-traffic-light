import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import { FadeIn } from '../fade-in';

export default function MarketOpportunitySection() {
  const marketImage = PlaceHolderImages.find(img => img.id === 'market-image');

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A Rapidly Growing Market
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The global intelligent traffic management market is projected to grow from $12.4B in 2024 to $27.9B by 2030, boasting a 15% CAGR. Our scalable, low-maintenance system is perfectly positioned to capture this growth, serving smart cities and rural intersections alike.
              </p>
              <Card className="mt-8 bg-primary/5 border-primary/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-2xl font-bold text-primary">$27.9 Billion</p>
                    <p className="text-muted-foreground">Projected market size by 2030.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
          <FadeIn delay="200ms">
            {marketImage && (
              <Image
                src={marketImage.imageUrl}
                alt={marketImage.description}
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full"
                data-ai-hint={marketImage.imageHint}
              />
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
