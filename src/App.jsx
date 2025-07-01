import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CoursesSection from './components/CoursesSection';
import BlogSection from './components/BlogSection';
import BlogCarousel from './components/BlogCarousel';
import PortfolioSection from './components/PortfolioSection';
import StatsSection from './components/StatsSection';
import AchievementsSection from './components/AchievementsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import NewsletterSection from './components/NewsletterSection';
import ContactSection from './components/ContactSection';
import SocialLinks from './components/SocialLinks';
import DarkModeToggle from './components/DarkModeToggle';
import ScrollToTop from './components/ScrollToTop';
import CourseDetail from './components/CourseDetail';
import EnrollSection from './components/EnrollSection';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <DarkModeToggle />
            <ScrollToTop />
            <NavBar />
            <HeroSection />
            <StatsSection />
            <AchievementsSection />
            <ServicesSection />
            <CoursesSection />
            <BlogCarousel />
            <BlogSection />
            <PortfolioSection />
            <TestimonialsSection />
            <FAQSection />
            <NewsletterSection />
            <ContactSection />
            <SocialLinks />
            <EnrollSection />
          </>
        } />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
