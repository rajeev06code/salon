import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';
import WhatsAppIcon from './icons/whatsapp-icon';
import BookingModal from './booking-modal';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Your sanctuary for premium grooming and beauty.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/#stylists" className="text-muted-foreground hover:text-primary">Our Stylists</Link></li>
              <li><Link href="/#memberships" className="text-muted-foreground hover:text-primary">Memberships</Link></li>
              <li>
                <BookingModal>
                   <button className="text-muted-foreground hover:text-primary text-sm">Book an Appointment</button>
                </BookingModal>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">(123) 456-7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@gildedmane.com" className="text-muted-foreground hover:text-primary">contact@gildedmane.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Support</h3>
            <div className="mt-4 flex flex-col space-y-2">
               <Button asChild variant="outline">
                 <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                   <WhatsAppIcon className="h-5 w-5" />
                   Chat on WhatsApp
                 </a>
              </Button>
               <Button asChild variant="outline">
                 <a href="tel:+1234567890" className="flex items-center justify-center gap-2">
                   <Phone className="h-4 w-4" />
                   Call Us
                 </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gilded Mane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
