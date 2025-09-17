import Link from 'next/link';
import { Twitter, Linkedin, Mail, TrafficCone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white w-full">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center ring-1 ring-emerald-500/20 shadow-lg shadow-emerald-500/10">
                <TrafficCone className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="text-2xl font-semibold tracking-tight text-white font-manrope">
                Solaris Traffic
              </div>
            </div>
            <p className="text-white/60 text-base max-w-md leading-relaxed font-sans mb-8">
              Building cleaner, smarter cities with renewable traffic solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white/[0.06] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/30 transition-all duration-200 backdrop-blur-sm" />
              <Button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-200 ring-1 ring-emerald-500/30">
                Subscribe
              </Button>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-manrope">Product</h4>
            <ul className="space-y-4">
              <li><a href="#solution" className="text-white/60 hover:text-emerald-300 transition-colors">Solution</a></li>
              <li><a href="#benefits" className="text-white/60 hover:text-emerald-300 transition-colors">Benefits</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-emerald-300 transition-colors">Pricing</a></li>
              <li><a href="/analysis" className="text-white/60 hover:text-emerald-300 transition-colors">Analysis Tool</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 font-manrope">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-emerald-300 transition-colors">About</a></li>
              <li><a href="#" className="text-white/60 hover:text-emerald-300 transition-colors">Blog</a></li>
              <li><a href="mailto:contact@solaris.com" className="text-white/60 hover:text-emerald-300 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/40">&copy; {new Date().getFullYear()} Solaris Traffic. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20"><Twitter className="h-4 w-4 text-white/60 hover:text-white" /></a>
              <a href="#" className="h-10 w-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20"><Linkedin className="h-4 w-4 text-white/60 hover:text-white" /></a>
              <a href="mailto:contact@solaris.com" className="h-10 w-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-all duration-200 ring-1 ring-white/10 hover:ring-white/20"><Mail className="h-4 w-4 text-white/60 hover:text-white" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
