import Link from 'next/link';
import { Scissors } from 'lucide-react';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-xl font-bold text-foreground transition-colors hover:text-primary',
        className
      )}
    >
      <div className="rounded-full bg-primary p-2 text-primary-foreground">
        <Scissors className="h-5 w-5" />
      </div>
      <span className="font-headline">Gilded Mane</span>
    </Link>
  );
};

export default Logo;
