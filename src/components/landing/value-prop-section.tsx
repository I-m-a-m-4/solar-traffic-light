import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Shield, Clock, Wind, DollarSign } from 'lucide-react';
import { FadeIn } from '../fade-in';

const benefits = [
  {
    icon: Shield,
    title: 'Prevents ~3,000 Crashes Yearly',
    description: 'Eliminates blackout-related signal failures, significantly improving road safety.',
  },
  {
    icon: Clock,
    title: 'Saves 15–25% in Travel Time',
    description: 'Dynamic adjustments based on real-time data reduce congestion and get commuters to their destinations faster.',
  },
  {
    icon: Wind,
    title: 'Reduces Fuel Emissions by ~29%',
    description: 'Less idling and smoother traffic flow contribute to cleaner air and a healthier environment.',
  },
  {
    icon: DollarSign,
    title: 'Significant Cost Savings',
    description: 'Zero electricity bills and lower maintenance costs compared to grid-powered systems.',
  },
];

export default function ValuePropositionSection() {
  const valuePropImage = PlaceHolderImages.find(img => img.id === 'value-prop-image');

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="lg:order-last">
            <div className="max-w-xl">
               <h2 className="text-4xl md:text-5xl text-white mb-6 font-manrope font-light tracking-tighter">
                Why Choose Our System?
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Solaris Traffic delivers a multifaceted return on investment, enhancing safety, efficiency, and environmental sustainability.
              </p>
              <div className="mt-10 space-y-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                     <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-primary ring-1 ring-emerald-500/20">
                      <benefit.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                      <p className="mt-1 text-white/70">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay="200ms" className="mt-12 lg:mt-0 lg:order-first">
            {valuePropImage && (
              <Image
                src={valuePropImage.imageUrl}
                alt={valuePropImage.description}
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl shadow-black/50 w-full ring-1 ring-white/[0.08] border border-white/[0.05]"
                data-ai-hint={valuePropImage.imageHint}
              />
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
