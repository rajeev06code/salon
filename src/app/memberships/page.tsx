import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const membershipPlans = [
  {
    name: 'Gilded Member',
    price: '99',
    features: [
      'Two services of your choice per month (up to $85 value each)',
      '10% off all additional services',
      '10% off all retail products',
      'Priority booking',
    ],
    cta: 'Become a Member',
  },
  {
    name: 'Golden VIP',
    price: '189',
    features: [
      'Four services of your choice per month (up to $85 value each)',
      '15% off all additional services',
      '15% off all retail products',
      'Priority booking & dedicated concierge',
      'Complimentary beverage with each visit',
    ],
    cta: 'Go for Gold',
  },
];


export default function MembershipsPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Our Memberships
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Unlock exclusive benefits and elevate your grooming experience with a Gilded Mane membership.
                    </p>
                </div>

                <div className="mt-16 grid max-w-lg gap-8 mx-auto lg:max-w-none lg:grid-cols-2">
                    {membershipPlans.map((plan) => (
                        <Card key={plan.name} className="flex flex-col overflow-hidden border-primary/20 shadow-lg shadow-primary/10">
                            <CardHeader className="p-8 bg-secondary">
                                <CardTitle className="font-headline text-3xl text-primary">{plan.name}</CardTitle>
                                <div className="mt-4 flex items-baseline text-foreground">
                                    <span className="text-5xl font-bold tracking-tight">${plan.price}</span>
                                    <span className="ml-1 text-xl font-semibold text-muted-foreground">/month</span>
                                </div>
                                <CardDescription className="mt-2">For the discerning individual who values consistency and quality.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-8 flex-grow">
                                <ul className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <Check className="h-6 w-6 flex-shrink-0 text-primary" />
                                            <p className="ml-3 text-muted-foreground">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                             <CardFooter className="p-8">
                                <Button asChild size="lg" className="w-full">
                                    <Link href="/book">{plan.cta}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
