import { TrendingUp, BrainCircuit, BarChart3 } from 'lucide-react';
import { FadeIn } from '../fade-in';

const features = [
  {
    icon: TrendingUp,
    title: 'Attribution Modeling',
    description: 'Track every touchpoint in your customer journey with advanced multi-touch attribution and real-time conversion tracking.',
    bgColor: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    link: '#',
    linkText: 'View attribution',
  },
  {
    icon: BrainCircuit,
    title: 'Predictive Intelligence',
    description: 'AI-powered forecasting and recommendations to optimize your marketing spend and predict customer lifetime value.',
    bgColor: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    link: '#',
    linkText: 'View predictions',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Monitor your campaigns as they happen with live data streams and instant alerts for performance changes.',
    bgColor: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    link: '#',
    linkText: 'View live data',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-manrope font-light tracking-tighter">
              Everything you need to <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">scale intelligently</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Advanced analytics tools designed for modern growth teams who demand precision, speed, and actionable insights.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={`${index * 100}ms`}>
              <div className="group relative h-full bg-gradient-to-b from-[#0f1419]/90 via-[#131a24]/95 to-[#0a0f14]/90 border border-white/[0.08] rounded-3xl shadow-lg backdrop-blur-xl p-8 transition-shadow hover:shadow-md">
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
