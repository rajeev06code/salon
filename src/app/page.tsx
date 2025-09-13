import Hero from '@/components/home/hero';
import ServicesSection from '@/components/home/services-section';
import WhyChooseUsSection from '@/components/home/why-choose-us-section';
import StylistsSection from '@/components/home/stylists-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import CtaSection from '@/components/home/cta-section';
import BlogSection from '@/components/home/blog-section';
import CategoriesSection from '@/components/home/categories-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CategoriesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <StylistsSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
    </div>
  );
}
