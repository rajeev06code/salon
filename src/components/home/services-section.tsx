import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const featuredServices = services.slice(0, 4);

export default function ServicesSection() {
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
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <Card key={service.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg bg-secondary/50 hover:bg-secondary/80">
              <div className="relative h-48 w-full">
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  data-ai-hint={service.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="font-semibold text-lg text-primary">₹{service.price}</span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/services#${service.id}`}>
                    Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
