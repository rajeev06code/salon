import Link from 'next/link';
import Image from 'next/image';
import { stylists } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const featuredStylists = stylists.slice(0, 3);

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
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStylists.map((stylist) => (
            <Card key={stylist.id} className="group flex flex-col overflow-hidden text-center">
              <CardHeader className="items-center p-0">
                <div className="relative h-80 w-full">
                  <Image
                    src={stylist.imageUrl}
                    alt={stylist.name}
                    data-ai-hint={stylist.imageHint}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <h3 className="font-headline text-2xl font-semibold">{stylist.name}</h3>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {stylist.specialties.slice(0,2).map((spec) => (
                    <Badge key={spec} variant="secondary">{spec}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                 <Button variant="outline" asChild className="w-full">
                  <Link href={`/stylists/${stylist.slug}`}>
                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/stylists">Meet The Whole Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
