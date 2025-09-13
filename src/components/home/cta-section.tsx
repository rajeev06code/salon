import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:py-20">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Ready for Your Transformation?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Book your appointment today and discover the Gilded Mane difference. We can&apos;t wait to welcome you.
        </p>
        <div className="mt-8">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
