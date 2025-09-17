import { ContactForm } from '@/components/contact-form';
import { FadeIn } from '../fade-in';

export default function CtaSection() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto relative">
             <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-violet-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-b from-[#0f1419]/90 via-[#131a24]/95 to-[#0a0f14]/90 border border-white/[0.08] rounded-3xl shadow-2xl backdrop-blur-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl text-white mb-6 font-manrope font-light tracking-tighter">
                  Join the Future of Smart Cities
                </h2>
                <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                  We’re seeking ₦300,000 to scale prototypes and deploy pilot programs with universities, city councils, and estates. Partner with us to build cleaner, smarter, and more efficient urban environments.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
