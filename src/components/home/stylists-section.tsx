
import Link from 'next/link';
import Image from 'next/image';
import { stylists } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

export default function StylistsSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Artists
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The talent behind the transformations.
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
                    {stylists.map((stylist) => (
                        <CarouselItem key={stylist.id} className="basis-4/5 sm:basis-1/2">
                            <div className="p-1 h-full">
                                <Link href={`#${stylist.id}`} className="group block h-full">
                                    <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                                        <div className="relative h-80 w-full">
                                        <Image
                                            src={stylist.imageUrl}
                                            alt={stylist.name}
                                            data-ai-hint={stylist.imageHint}
                                            fill
                                            className="object-cover"
                                        />
                                        </div>
                                        <CardHeader className="text-center p-4">
                                            <CardTitle className="font-headline text-xl">{stylist.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow text-center px-4 pb-2">
                                            <div className="flex flex-wrap justify-center gap-1">
                                                {stylist.specialties.map((spec) => (
                                                <Badge key={spec} variant="secondary" className="text-xs">{spec}</Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardFooter className="p-4">
                                            <Button variant="outline" className="w-full">View Profile</Button>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* 3-Column Carousel for Desktop */}
            <div className="hidden md:block">
                <Carousel
                    opts={{
                        align: "start",
                        dragFree: true,
                    }}
                    className="w-full"
                    >
                    <CarouselContent className="-ml-2">
                        {stylists.map((stylist) => (
                            <CarouselItem key={stylist.id} className="pl-2 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                     <Link href={`#${stylist.id}`} className="group block h-full">
                                        <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                                            <div className="relative h-80 w-full">
                                            <Image
                                                src={stylist.imageUrl}
                                                alt={stylist.name}
                                                data-ai-hint={stylist.imageHint}
                                                fill
                                                className="object-cover"
                                            />
                                            </div>
                                            <CardHeader className="text-center p-4">
                                                <CardTitle className="font-headline text-xl">{stylist.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex-grow text-center px-4 pb-2">
                                                <div className="flex flex-wrap justify-center gap-1">
                                                    {stylist.specialties.slice(0, 2).map((spec) => (
                                                    <Badge key={spec} variant="secondary" className="text-xs">{spec}</Badge>
                                                    ))}
                                                </div>
                                            </CardContent>
                                            <CardFooter className="p-4">
                                                <Button variant="outline" className="w-full">View Profile</Button>
                                            </CardFooter>
                                        </Card>
                                    </Link>
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
