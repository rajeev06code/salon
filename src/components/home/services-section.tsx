import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import BookingModal from '../booking-modal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export default function ServicesSection() {
  const allServices = services;

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Signature Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Crafted with precision, tailored for you.
          </p>
        </div>
        <div className="mt-12">
            <div className="hidden md:block">
                <Carousel
                    opts={{
                    align: "start",
                    dragFree: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                    {allServices.map((service) => (
                        <CarouselItem key={service.id} className="basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                 <Card id={service.id} className="w-full overflow-hidden transition-all hover:shadow-lg bg-secondary/50 hover:bg-secondary/80">
                                    <div className="flex flex-col h-full">
                                        <div className="relative h-40 w-full">
                                            <Image
                                                src={service.imageUrl}
                                                alt={service.name}
                                                data-ai-hint={service.imageHint}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between p-4">
                                            <div>
                                                <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                                                <CardContent className="p-0 mt-2">
                                                    <p className="text-muted-foreground text-sm whitespace-normal">{service.description}</p>
                                                </CardContent>
                                            </div>
                                            <CardFooter className="p-0 mt-4 flex justify-between items-center">
                                                <div>
                                                    <span className="font-semibold text-xl text-primary">Rs. {service.price}</span>
                                                    <span className="text-xs text-muted-foreground ml-2">/ {service.duration} min</span>
                                                </div>
                                                <BookingModal>
                                                    <Button size="sm">Book Now</Button>
                                                </BookingModal>
                                            </CardFooter>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4" />
                    <CarouselNext className="-right-4" />
                </Carousel>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-1 md:hidden">
                {allServices.map((service) => (
                    <Card key={service.id} id={service.id} className="flex flex-col md:flex-row overflow-hidden transition-all hover:shadow-lg bg-secondary/50 hover:bg-secondary/80">
                        <div className="relative h-48 md:h-auto md:w-1/3 lg:w-2/5">
                        <Image
                            src={service.imageUrl}
                            alt={service.name}
                            data-ai-hint={service.imageHint}
                            fill
                            className="object-cover"
                        />
                        </div>
                        <div className="flex flex-1 flex-col justify-between p-6">
                            <div>
                                <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
                                <CardContent className="p-0 mt-2">
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </div>
                            <CardFooter className="p-0 mt-4 flex justify-between items-center">
                                <div>
                                    <span className="font-semibold text-2xl text-primary">Rs. {service.price}</span>
                                    <span className="text-sm text-muted-foreground ml-2">/ {service.duration} min</span>
                                </div>
                                <BookingModal>
                                    <Button>Book Now</Button>
                                </BookingModal>
                            </CardFooter>
                        </div>
                  </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
