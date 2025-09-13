import Image from 'next/image';
import { Button } from '@/components/ui/button';
import BookingModal from '../booking-modal';

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
             <Image
                src="https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg"
                alt="Stylish salon interior with comfortable chairs"
                data-ai-hint="salon interior chairs"
                fill
                className="object-cover"
                priority
                quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent"></div>
        </div>
      <div className="container relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-end px-4 pb-16 text-center sm:pb-24">
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
