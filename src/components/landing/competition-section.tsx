import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '../fade-in';

const advantages = [
  {
    title: '100% Renewable Energy',
    description: 'Operates entirely on solar power with no grid dependency, ensuring uptime during outages.',
  },
  {
    title: 'Simplified Installation',
    description: 'Modular, plug-and-play design is easier and faster to install than complex camera-based systems.',
  },
  {
    title: 'Highly Scalable',
    description: 'A versatile solution perfect for both dense urban intersections and remote rural areas.',
  },
  {
    title: 'Cost-Effective with Fast ROI',
    description: 'Significant savings on electricity and maintenance lead to a return on investment in under 2 years.',
  },
];

export default function CompetitiveAdvantageSection() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our unique approach combines sustainability, advanced technology, and economic efficiency.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <FadeIn key={advantage.title} delay={`${index * 100}ms`}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl mb-2">{advantage.title}</CardTitle>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
