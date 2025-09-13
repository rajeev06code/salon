import Link from 'next/link';
import Image from 'next/image';
import { stylists } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Our Stylists | Gilded Mane',
  description: 'Meet the talented team of artists and stylists at Gilded Mane.',
};

export default function StylistsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Meet Our Artists
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            The heart and soul of Gilded Mane. Each stylist brings a unique blend of passion, skill, and creativity.
          </p>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {stylists.map((stylist) => (
            <Link key={stylist.id} href={`/#${stylist.id}`} className="group block">
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
    </div>
  );
}
