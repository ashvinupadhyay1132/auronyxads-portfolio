import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  TrendingUp, 
  Target,
  Star,
  CheckCircle,
  Send,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import NavBar from "./components/portfolio/NavBar";
import HeroSection from "./components/portfolio/HeroSection";
import ServicesSection from "./components/portfolio/ServicesSection";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import AboutSection from "./components/portfolio/AboutSection";
import TestimonialsSection from "./components/portfolio/TestimonialsSection";
import ContactSection from "./components/portfolio/ContactSection";

export default function Portfolio() {
  const { scrollY } = useScroll();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

    // SEO Enhancements (optimized)
    useEffect(() => {
      // Set Page Title
      if (document.title !== "Auronyxads | Top Web & App Development Digital Marketing Agency") {
        document.title = "Auronyxads | Top Web & App Development Digital Marketing Agency";
      }

      // Set Meta Description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      if (metaDescription.content !== 'Auronyxads is a leading digital agency specializing in custom web development, mobile app creation, and data-driven digital and performance marketing. Let\'s build your digital dream.') {
        metaDescription.content = 'Auronyxads is a leading digital agency specializing in custom web development, mobile app creation, and data-driven digital and performance marketing. Let\'s build your digital dream.';
      }

      // Set Canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      if (canonicalLink.href !== 'https://auronyxads.org') {
        canonicalLink.href = 'https://auronyxads.org';
      }

      // Add Structured Data (JSON-LD)
      let structuredDataScript = document.getElementById('structured-data');
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Auronyxads",
        "url": "https://auronyxads.org",
        "logo": "/public/vite.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9284555378",
          "email": "auronyxads@gmail.com",
          "contactType": "Customer Service"
        },
        "description": "Auronyxads is a leading digital agency specializing in custom web development, mobile app creation, and data-driven digital and performance marketing.",
        "service": [
          { "@type": "Service", "name": "Custom Web Development" },
          { "@type": "Service", "name": "Mobile App Development" },
          { "@type": "Service", "name": "Digital Marketing" },
          { "@type": "Service", "name": "Performance Marketing" }
        ]
      });
      document.head.appendChild(structuredDataScript);
    }, []);

  // Memoize scroll-to-top button animation values
  const scrollTopVisible = React.useMemo(() => scrollY.get() > 500, [scrollY]);

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <NavBar />
      <HeroSection id="home" />
      <ServicesSection id="services" />
      <PortfolioSection id="portfolio" />
      <AboutSection id="about" />
      <TestimonialsSection id="testimonials" />
      <ContactSection id="contact" />
      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollTopVisible ? 1 : 0,
          scale: scrollTopVisible ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </div>
  );
}