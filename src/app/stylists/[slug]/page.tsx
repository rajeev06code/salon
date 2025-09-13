import Image from 'next/image';
import { notFound } from 'next/navigation';
import { stylists } from '@/lib/data';
import { summarizeCustomerFeedback } from '@/ai/flows/summarize-customer-feedback';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, StarHalf, Calendar, Briefcase } from 'lucide-react';
import BioGenerator from '@/components/stylists/bio-generator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateStaticParams() {
    return stylists.map((stylist) => ({
      slug: stylist.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const stylist = stylists.find(s => s.slug === params.slug);
    if (!stylist) {
        return {
            title: 'Stylist Not Found | Gilded Mane'
        }
    }
    return {
      title: `${stylist.name} | Gilded Mane`,
      description: `Learn more about ${stylist.name}, our talented stylist specializing in ${stylist.specialties.join(', ')}.`,
    };
  }

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

export default async function StylistProfilePage({ params }: { params: { slug: string } }) {
  const stylist = stylists.find((s) => s.slug === params.slug);

  if (!stylist) {
    notFound();
  }

  const feedbackSummaryResult = stylist.reviews.length > 0
    ? await summarizeCustomerFeedback({
        stylistName: stylist.name,
        customerReviews: stylist.reviews.map((r) => r.review),
      })
    : { summary: "No reviews available yet for an AI summary." };

  const averageRating = stylist.reviews.length > 0
    ? stylist.reviews.reduce((acc, r) => acc + r.rating, 0) / stylist.reviews.length
    : 0;

  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card className="overflow-hidden sticky top-24">
              <div className="relative h-[450px] w-full">
                <Image
                  src={stylist.imageUrl}
                  alt={stylist.name}
                  data-ai-hint={stylist.imageHint}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">{stylist.name}</CardTitle>
                <div className="mt-2 flex items-center justify-center gap-2">
                    {averageRating > 0 ? (
                        <>
                           {renderStars(averageRating)}
                           <span className="text-muted-foreground">({averageRating.toFixed(1)})</span>
                        </>
                    ) : (
                        <p className="text-sm text-muted-foreground">No ratings yet</p>
                    )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold">Specialties</h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {stylist.specialties.map((spec) => (
                                <Badge key={spec} variant="secondary">{spec}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
                 <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                     <div>
                        <h4 className="font-semibold">Experience</h4>
                        <p className="text-muted-foreground">{stylist.experience}</p>
                    </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full" asChild>
                    <Link href="/book">Book with {stylist.name.split(' ')[0]}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <BioGenerator stylist={stylist} />
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Customer Feedback Summary</CardTitle>
                    <CardDescription>An AI-generated summary of what clients are saying.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground italic">&quot;{feedbackSummaryResult.summary}&quot;</p>
                </CardContent>
            </Card>

            <div>
                <h3 className="font-headline text-2xl mb-4">Client Reviews</h3>
                <div className="space-y-6">
                    {stylist.reviews.length > 0 ? (
                        stylist.reviews.map(review => (
                            <Card key={review.id}>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold">{review.author}</p>
                                        {renderStars(review.rating)}
                                    </div>
                                    <p className="mt-2 text-muted-foreground">{review.review}</p>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <p className="text-muted-foreground">No reviews for {stylist.name} yet.</p>
                    )}
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
