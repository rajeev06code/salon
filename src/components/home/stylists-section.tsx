import Link from 'next/link';
import Image from 'next/image';
import { stylists } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {stylists.map((stylist) => (
            <Link key={stylist.id} href={`/stylists/${stylist.slug}`} className="group block">
              <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                 <div className="relative h-96 w-full">
                  <Image
                    src={stylist.imageUrl}
                    alt={stylist.name}
                    data-ai-hint={stylist.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl">{stylist.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <div className="flex flex-wrap justify-center gap-2">
                    {stylist.specialties.map((spec) => (
                      <Badge key={spec} variant="secondary">{spec}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Profile</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
