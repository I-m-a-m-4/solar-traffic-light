import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', weight: ['300', '400', '500', '600', '700'] });


export const metadata: Metadata = {
  title: 'Solaris Traffic - Smart Solar-Powered Traffic Systems',
  description:
    'Self-sustaining, sensor-driven traffic lights to reduce congestion, save energy, and cut emissions.',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen font-sans antialiased selection:bg-emerald-400/20 selection:text-emerald-300 overflow-x-hidden',
          inter.variable,
          manrope.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
