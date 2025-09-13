import Image from 'next/image';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingModal from '@/components/booking-modal';

export const metadata = {
  title: 'Our Services | Gilded Mane',
  description: 'Explore our full range of premium hair, beauty, and grooming services for men and women.',
};

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => (
    <Card id={service.id} className="flex flex-col md:flex-row overflow-hidden transition-all hover:shadow-lg bg-secondary/50 hover:bg-secondary/80">
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
                    <span className="font-semibold text-2xl text-primary">${service.price}</span>
                    <span className="text-sm text-muted-foreground ml-2">/ {service.duration} min</span>
                </div>
                <BookingModal>
                    <Button>Book Now</Button>
                </BookingModal>
            </CardFooter>
        </div>
  </Card>
);

export default function ServicesPage() {
  const womenServices = services.filter(s => s.categoryIds.includes('hair') || s.categoryIds.includes('coloring') || s.categoryIds.includes('beauty'));
  const menServices = services.filter(s => s.categoryIds.includes('barbering') || s.categoryIds.includes('hair'));
  
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A complete menu of our luxury grooming and beauty offerings.
          </p>
        </div>
        
        <Tabs defaultValue="women" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
            <TabsTrigger value="women">For Women</TabsTrigger>
            <TabsTrigger value="men">For Men</TabsTrigger>
          </TabsList>
          <TabsContent value="women">
            <div className="space-y-8 mt-8">
                {womenServices.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
          </TabsContent>
          <TabsContent value="men">
             <div className="space-y-8 mt-8">
                {menServices.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
