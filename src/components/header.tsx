'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from './logo';
import { cn } from '@/lib/utils';
import BookingModal from './booking-modal';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#stylists', label: 'Stylists' },
  { href: '/#memberships', label: 'Memberships' },
];

const NavLink = ({ href, label, className, onClick }: { href: string; label: string; className?: string, onClick?: () => void; }) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn('text-foreground/80 transition-colors hover:text-primary', className)}
  >
    {label}
  </Link>
);

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
           <BookingModal open={isBookingModalOpen} onOpenChange={setBookingModalOpen}>
             <Button asChild className="hidden sm:inline-flex">
              <span>Book Now</span>
            </Button>
          </BookingModal>
          
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <div className="mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col items-start gap-6 text-lg">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} onClick={() => setMenuOpen(false)} />
                  ))}
                  <Button asChild className="w-full" onClick={() => { setBookingModalOpen(true); setMenuOpen(false); }}>
                    <span>Book Now</span>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
