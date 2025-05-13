
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PainPoints from "../components/PainPoints";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Animation on scroll effect
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add("animated");
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    };
    
    // Run once on initial load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", animateOnScroll);
    
    // Clean up the event listener
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);
  
  // Update the page title
  useEffect(() => {
    document.title = "Synca | Gestión de Activos Digitales para Agencias";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Benefits />
        <Testimonials />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
