import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-card">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Where Style is Golden
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Experience the art of grooming and beauty, tailored to you. A premium salon experience that leaves you looking and feeling your best.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="/book">Book Your Appointment</Link>
          </Button>
        </div>
      </div>
      <Image
        src="https://picsum.photos/seed/salon-interior/1200/400"
        alt="Stylish salon interior"
        data-ai-hint="salon interior"
        fill
        className="object-cover"
        priority
        quality={80}
      />
       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
    </section>
  );
}
