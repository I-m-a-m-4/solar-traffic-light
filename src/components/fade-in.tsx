'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: string;
};

export function FadeIn({ children, className, delay = '0ms' }: FadeInProps) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          // No need to observe anymore
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: delay }}
      className={cn(
        'transition-all duration-700 opacity-0 translate-y-4',
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
    >
      {children}
    </div>
  );
}
