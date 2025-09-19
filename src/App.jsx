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
          opacity: scrollY.get() > 500 ? 1 : 0,
          scale: scrollY.get() > 500 ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </div>
  );
}