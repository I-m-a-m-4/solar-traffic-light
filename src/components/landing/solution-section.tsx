import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Zap, Radar, Wifi, Package } from 'lucide-react';
import { FadeIn } from '../fade-in';

const features = [
  {
    icon: Zap,
    name: '100% Solar-Powered',
    description: 'Equipped with deep-cycle batteries for continuous, off-grid operation.',
  },
  {
    icon: Radar,
    name: 'Real-Time Vehicle Detection',
    description: 'Uses advanced microwave radar sensors for dynamic traffic adjustment.',
  },
  {
    icon: Wifi,
    name: 'Wi-Fi Mesh Network',
    description: 'Enables synchronized traffic control across multiple intersections.',
  },
  {
    icon: Package,
    name: 'Modular Plug-and-Play Design',
    description: 'Ensures rapid and straightforward installation with minimal disruption.',
  },
];

export default function SolutionSection() {
  const solutionImage = PlaceHolderImages.find(img => img.id === 'solution-image');

  return (
    <section id="solution" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <FadeIn>
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl text-white mb-6 font-manrope font-light tracking-tighter">
                 Our Smart Traffic Solution
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Our solar-powered traffic lights use microwave radar sensors to dynamically adjust timings based on real-time vehicle flow, reducing travel time by 15–25% and emissions by 29%. Fully powered by solar panels and batteries, they operate off-grid with zero reliance on electricity.
              </p>
              <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="flex items-center gap-x-3 text-lg font-semibold text-white">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                         <feature.icon className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-white/70">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
          <FadeIn delay="200ms" className="mt-12 lg:mt-0">
            {solutionImage && (
              <Image
                src={solutionImage.imageUrl}
                alt={solutionImage.description}
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl shadow-black/50 w-full ring-1 ring-white/[0.08] border border-white/[0.05]"
                data-ai-hint={solutionImage.imageHint}
              />
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
