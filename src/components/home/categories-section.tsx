
'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { categories, services } from '@/lib/data';
import type { Service } from '@/lib/types';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import BookingModal from '../booking-modal';

const ServiceCard = ({ service }: { service: Service }) => (
    <Card id={service.id} className="flex flex-col md:flex-row overflow-hidden transition-all hover:shadow-lg bg-card hover:bg-muted/50">
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
);


export default function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categories)[0] | null
  >(null);

  const servicesForCategory = services.filter((service) =>
    service.categoryIds.includes(selectedCategory?.id || '')
  );

  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find the perfect treatment to elevate your style.
          </p>
        </div>
        <div className="mt-12">
            <div className="sm:hidden">
                 <ScrollArea className="w-full whitespace-nowrap">
                    <div className="flex w-max space-x-4 pb-4">
                        {categories.map((category) => (
                            <div
                            key={category.id}
                            className="group inline-flex flex-col items-center gap-2 cursor-pointer w-24"
                            onClick={() => setSelectedCategory(category)}
                            >
                            <div
                                className="relative h-24 w-24 overflow-hidden rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:ring-4 group-hover:ring-primary/50"
                            >
                                <Image
                                src={category.imageUrl}
                                alt={category.name}
                                data-ai-hint={category.imageHint}
                                width={96}
                                height={96}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40"></div>
                            </div>
                            <h3 className="font-headline text-lg font-semibold text-foreground text-center group-hover:text-primary transition-colors whitespace-normal">
                                {category.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
            <div className="hidden sm:grid sm:grid-cols-5 sm:gap-y-8 sm:justify-items-center">
                 {categories.map((category) => (
                    <div
                    key={category.id}
                    className="group flex flex-col items-center gap-2 cursor-pointer w-auto"
                    onClick={() => setSelectedCategory(category)}
                    >
                    <div
                        className="relative h-24 w-24 overflow-hidden rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:ring-4 group-hover:ring-primary/50"
                    >
                        <Image
                        src={category.imageUrl}
                        alt={category.name}
                        data-ai-hint={category.imageHint}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40"></div>
                    </div>
                    <h3 className="font-headline text-lg font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                        {category.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>

        <Dialog
          open={!!selectedCategory}
          onOpenChange={(isOpen) => !isOpen && setSelectedCategory(null)}
        >
          <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
            <DialogHeader>
              <DialogTitle className="font-headline text-3xl text-primary">
                {selectedCategory?.name} Services
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="flex-grow">
               <div className="space-y-8 pr-6">
                {servicesForCategory.length > 0 ? (
                    servicesForCategory.map(service => <ServiceCard key={service.id} service={service} />)
                ) : (
                    <p className="text-muted-foreground text-center py-16">No services found in this category.</p>
                )}
                </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}


