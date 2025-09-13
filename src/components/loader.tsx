
'use client';

import { Scissors } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoaderProps {
  loading: boolean;
}

const Loader = ({ loading }: LoaderProps) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute h-28 w-28 rounded-full border-2 border-primary/30"></div>
        <div className="absolute h-28 w-28 rounded-full border-t-2 border-t-primary animate-spin"></div>
        <div className="rounded-full bg-primary p-4 text-primary-foreground">
          <Scissors className="h-10 w-10" />
        </div>
      </div>
      <div className="mt-6 font-headline text-3xl text-foreground tracking-widest">
        Gilded Mane
      </div>
    </div>
  );
};

export default Loader;
