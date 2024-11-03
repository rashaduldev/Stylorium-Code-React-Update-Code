import { useState, useEffect } from 'react';
import Hero from '../components/HomepageComponent/Hero';
import TopNavbar from '../components/Navber/TopNavbar';
import BottomNavbar from '../components/Navber/BottomNavbar';
import Dashboard from '../components/HomepageComponent/Dashboard';
import Carousel from '../components/HomepageComponent/Carousel';
import Timeline from '../components/HomepageComponent/Timeline';
import VideoBackground from '../components/HomepageComponent/VideoBackground';
import CardGrid from '../components/HomepageComponent/CardGrid';
import BottomCarousel from '../components/HomepageComponent/BottomCarousel';
import WorldMap from '../components/HomepageComponent/WorldMap';
import ContactForm from '../components/HomepageComponent/ContactForm';

const Homepage = () => {
  const [showTopNavbar, setShowTopNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopNavbar(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Pass isFixed to TopNavbar */}
      <TopNavbar isVisible={showTopNavbar} isFixed={showTopNavbar} />
      <Hero />
      {/* Pass isHidden to BottomNavbar to apply slide-up animation */}
      <BottomNavbar isHidden={showTopNavbar} />
      <Dashboard/>
      <Carousel/>
      <Timeline/>
      <VideoBackground/>
      <CardGrid/>
      <BottomCarousel/>
      <WorldMap/>
      <ContactForm/>
    </>
  );
};

export default Homepage;
