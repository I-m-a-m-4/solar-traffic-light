import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TrafficCone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative z-50 animate-[fadeIn_0.8s_ease-out_0s_both]">
      <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center ring-1 ring-emerald-500/20 shadow-lg shadow-emerald-500/10">
            <TrafficCone className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">Solaris Traffic</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Button variant="ghost" asChild className="text-sm text-white/70 hover:text-white transition-colors font-medium">
            <Link href="/#solution">Solution</Link>
          </Button>
          <Button variant="ghost" asChild className="text-sm text-white/70 hover:text-white transition-colors font-medium">
            <Link href="/#benefits">Benefits</Link>
          </Button>
          <Button variant="ghost" asChild className="text-sm text-white/70 hover:text-white transition-colors font-medium">
            <Link href="/analysis">Analysis Tool</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-3">
           <Button asChild className="hidden sm:inline-flex bg-transparent hover:bg-white/10 text-white/80 ring-1 ring-white/20">
            <Link href="#contact">Sign In</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 ring-1 ring-emerald-500/30">
            <Link href="#contact">Request a Demo</Link>
          </Button>
           <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9 bg-white/[0.06] hover:bg-white/[0.12] ring-1 ring-white/10">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/#solution" className="text-lg font-medium">Solution</Link>
                  <Link href="/#benefits" className="text-lg font-medium">Benefits</Link>
                  <Link href="/analysis" className="text-lg font-medium">Analysis Tool</Link>
                  <Link href="#contact" className="text-lg font-medium">Contact</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
