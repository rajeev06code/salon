
import Image from 'next/image';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import BookingModal from '../booking-modal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => (
    <Card id={service.id} className="w-full h-full overflow-hidden transition-all hover:shadow-lg bg-secondary/50 hover:bg-secondary/80">
        <div className="flex flex-col h-full">
            <div className="relative h-48 w-full">
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
                    <CardTitle className="font-headline text-lg">{service.name}</CardTitle>
                    <CardContent className="p-0 mt-1">
                        <p className="text-muted-foreground text-sm line-clamp-2">{service.description}</p>
                    </CardContent>
                </div>
                <CardFooter className="p-0 mt-4 flex justify-between items-center">
                    <div>
                        <span className="font-semibold text-lg text-primary">Rs. {service.price}</span>
                        <span className="text-xs text-muted-foreground ml-2">/ {service.duration} min</span>
                    </div>
                    <BookingModal>
                        <Button size="sm">Book Now</Button>
                    </BookingModal>
                </CardFooter>
            </div>
        </div>
    </Card>
);


export default function ServicesSection() {
  const allServices = services;
  const chunkedServices = [];
  for (let i = 0; i < allServices.length; i += 2) {
    chunkedServices.push(allServices.slice(i, i + 2));
  }

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
            {/* Carousel for Mobile */}
            <div className="md:hidden">
                <Carousel
                    opts={{
                    align: "start",
                    dragFree: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                    {allServices.map((service) => (
                        <CarouselItem key={service.id} className="basis-4/5 sm:basis-1/2">
                            <div className="p-1 h-full">
                                <ServiceCard service={service} />
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* 2-Row Carousel for Desktop */}
            <div className="hidden md:block">
                <Carousel
                    opts={{
                        align: "start",
                        dragFree: true,
                    }}
                    className="w-full"
                    >
                    <CarouselContent className="-ml-1">
                        {chunkedServices.map((chunk, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-[45%]">
                                <div className="p-1 space-y-2">
                                     {chunk.map(service => (
                                        <ServiceCard key={service.id} service={service} />
                                     ))}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4" />
                    <CarouselNext className="-right-4" />
                </Carousel>
            </div>
        </div>
      </div>
    </section>
  );
}
