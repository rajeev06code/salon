import Hero from '@/components/home/hero';
import ServicesSection from '@/components/home/services-section';
import WhyChooseUsSection from '@/components/home/why-choose-us-section';
import StylistsSection from '@/components/home/stylists-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import CtaSection from '@/components/home/cta-section';
import CategoriesSection from '@/components/home/categories-section';
import MembershipsSection from '@/components/home/memberships-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CategoriesSection />
      <div id="services">
        <ServicesSection />
      </div>
      <WhyChooseUsSection />
      <div id="stylists">
        <StylistsSection />
      </div>
      <div id="memberships">
        <MembershipsSection />
      </div>
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
