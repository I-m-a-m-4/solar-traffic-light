import { TrendingUp, Zap, BarChart3, Wifi, BatteryCharging, Shield } from 'lucide-react';
import { FadeIn } from '../fade-in';

const features = [
  {
    icon: Zap,
    title: '100% Solar-Powered',
    description: 'Operates entirely off-grid with deep-cycle batteries, ensuring zero electricity costs and 24/7 uptime, even during power outages.',
    bgColor: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Wifi,
    title: 'Smart, Adaptive Control',
    description: 'Microwave sensors and Wi-Fi mesh networking enable real-time traffic analysis and synchronized signal adjustments to optimize flow.',
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: BatteryCharging,
    title: 'Energy Efficiency',
    description: 'Our system intelligently manages power consumption, maximizing battery life and ensuring reliable, long-term operation.',
    bgColor: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-manrope font-light tracking-tighter">
              Core Features of <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Solaris Traffic</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our system is engineered for reliability, efficiency, and a sustainable future.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={`${index * 100}ms`}>
              <div className="group relative h-full bg-card/80 border border-white/[0.08] rounded-3xl shadow-lg backdrop-blur-xl p-8 transition-shadow hover:shadow-md">
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${feature.bgColor}`}>
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl sm:text-2xl text-white font-manrope font-light tracking-tighter mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
