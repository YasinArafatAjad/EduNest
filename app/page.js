import HeroSection from '@/components/sections/HeroSection';
import FeaturedCourses from '@/components/sections/FeaturedCourses';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import InstructorsSection from '@/components/sections/InstructorsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCourses />
        <StatsSection />
        <TestimonialsSection />
        <InstructorsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}