import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import BookingModal from '../booking-modal';

const membershipPlans = [
  {
    name: 'Gilded Member',
    price: '99',
    features: [
      'Two services of your choice per month (up to Rs. 85 value each)',
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
      'Four services of your choice per month (up to Rs. 85 value each)',
      '15% off all additional services',
      '15% off all retail products',
      'Priority booking & dedicated concierge',
      'Complimentary beverage with each visit',
    ],
    cta: 'Go for Gold',
    isFeatured: true,
  },
  {
    name: 'Platinum Elite',
    price: '299',
    features: [
        'Unlimited services of your choice per month',
        '20% off all additional services',
        '20% off all retail products',
        'Guaranteed same-day appointments',
        'Exclusive access to new services',
    ],
    cta: 'Join The Elite',
  }
];


export default function MembershipsSection() {
    return (
        <section id="memberships" className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Our Memberships
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Unlock exclusive benefits and elevate your grooming experience with a Gilded Mane membership.
                    </p>
                </div>

                <div className="mt-16 grid max-w-lg gap-8 mx-auto lg:max-w-none lg:grid-cols-3">
                    {membershipPlans.map((plan) => (
                        <Card key={plan.name} className={`flex flex-col overflow-hidden shadow-lg transition-all hover:-translate-y-2 ${plan.isFeatured ? 'border-primary border-2' : ''}`}>
                            <CardHeader className="p-8">
                                <CardTitle className="font-headline text-3xl text-primary">{plan.name}</CardTitle>
                                <div className="mt-4 flex items-baseline text-foreground">
                                    <span className="text-5xl font-bold tracking-tight">Rs. {plan.price}</span>
                                    <span className="ml-1 text-xl font-semibold text-muted-foreground">/month</span>
                                </div>
                                <CardDescription className="mt-2 h-12">For the discerning individual who values consistency and quality.</CardDescription>
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
                                <BookingModal>
                                    <Button size="lg" className="w-full" variant={plan.isFeatured ? 'default' : 'outline'}>{plan.cta}</Button>
                                </BookingModal>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
