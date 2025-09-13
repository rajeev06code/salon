
import { reviews } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from 'lucide-react';

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center gap-1">
        {Array(fullStars).fill(0).map((_, i) => <Star key={`full-${i}`} className="h-5 w-5 fill-primary text-primary" />)}
        {halfStar && <StarHalf className="h-5 w-5 fill-primary text-primary" />}
        {Array(emptyStars).fill(0).map((_, i) => <Star key={`empty-${i}`} className="h-5 w-5 text-muted-foreground/50" />)}
      </div>
    );
  };

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Words From Our Clients
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what makes the Gilded Mane experience so special.
          </p>
        </div>
        <div className="mt-12">
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-start justify-between h-full p-6">
                        <div className="flex-grow">
                          {renderStars(review.rating)}
                          <p className="mt-4 text-muted-foreground italic">&quot;{review.review}&quot;</p>
                        </div>
                        <p className="mt-4 font-semibold text-foreground">- {review.author}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex"/>
            <CarouselNext className="hidden sm:flex"/>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
