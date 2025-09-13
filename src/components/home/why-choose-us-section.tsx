import { Award, Gem, CalendarCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const features = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Expert Stylists',
    description: 'Our team consists of highly skilled and passionate professionals dedicated to their craft.',
  },
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: 'Premium Products',
    description: 'We use only the finest quality products to ensure the health and beauty of your hair and skin.',
  },
  {
    icon: <CalendarCheck className="h-10 w-10 text-primary" />,
    title: 'Seamless Booking',
    description: 'Book your appointment in minutes with our easy-to-use online system and real-time availability.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Gilded Mane Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            An unparalleled salon experience from start to finish.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="font-headline mt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
