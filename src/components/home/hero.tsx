import Image from 'next/image';
import { Button } from '@/components/ui/button';
import BookingModal from '../booking-modal';

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
             <Image
                src="https://picsum.photos/seed/salon-interior/1800/1200"
                alt="Stylish salon interior"
                data-ai-hint="salon interior light"
                fill
                className="object-cover opacity-80"
                priority
                quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
      <div className="container relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl">
          Where Style is Golden
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl">
          Experience the art of grooming and beauty, tailored to you. A premium salon experience that leaves you looking and feeling your best.
        </p>
        <div className="mt-8">
           <BookingModal>
            <Button size="lg">Book Your Appointment</Button>
          </BookingModal>
        </div>
      </div>
    </section>
  );
}
