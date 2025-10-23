
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, TrendingUp } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function HeroSection() {
  const heroImages = PlaceHolderImages.filter(
    (img) => img.id.startsWith('hero-image')
  );

  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 text-emerald-300 text-sm font-medium mb-8 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
            New: Smart Solar-Powered Systems
          </div>
          <h1 className="md:text-7xl text-4xl font-light text-white tracking-tighter font-manrope mb-6 animate-[slideUp_0.8s_ease-out_0.4s_both]">
            Revolutionize Traffic with 
            <span className="bg-clip-text text-transparent bg-neutral-50">
              {' '}
              Smart Solar-Powered Systems
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed animate-[slideUp_0.8s_ease-out_0.6s_both]">
           Self-sustaining, sensor-driven traffic lights to reduce congestion, save energy, and cut emissions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[slideUp_0.8s_ease-out_0.8s_both]">
            
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/[0.06] hover:bg-white/[0.12] text-white ring-1 ring-white/10 hover:ring-white/20 backdrop-blur-sm"
            >
              <Link href="/analysis">Watch Demo</Link>
            </Button>
          </div>
        </div>

        <Carousel
          className="relative max-w-6xl mx-auto animate-[slideUp_0.8s_ease-out_1.2s_both]"
          opts={{ loop: true }}
        >
          <CarouselContent>
            {heroImages.map((image) => (
              <CarouselItem key={image.id}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-violet-500/10 rounded-3xl blur-2xl"></div>
                   <div className="relative h-[500px] w-full overflow-hidden rounded-3xl">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover shadow-2xl shadow-black/50 ring-1 ring-white/[0.08] border border-white/[0.05]"
                      data-ai-hint={image.imageHint}
                      priority={heroImages.indexOf(image) === 0}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 text-white bg-white/10 border-white/20 hover:bg-white/20" />
          <CarouselNext className="right-2 md:-right-12 text-white bg-white/10 border-white/20 hover:bg-white/20" />
        </Carousel>
      </div>
    </section>
  );
}
