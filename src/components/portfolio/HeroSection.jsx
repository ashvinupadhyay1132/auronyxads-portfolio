import React, { useMemo, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

// Memoized background orb component
const BackgroundBlur = React.memo(({ className, delay }) => (
  <div 
    className={`absolute w-48 md:w-72 h-48 md:h-72 rounded-full mix-blend-multiply filter blur-3xl animate-pulse ${className}`} 
    style={delay ? { animationDelay: delay } : undefined}
  />
));

BackgroundBlur.displayName = 'BackgroundBlur';

// Memoized floating icon component
const FloatingIcon = React.memo(({ Icon, size, className, animate, transition }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={animate}
    transition={transition}
  >
    <Icon size={size} className="md:w-[60px] md:h-[60px]" />
  </motion.div>
));

FloatingIcon.displayName = 'FloatingIcon';

export default function HeroSection({ id }) {
  const { scrollY } = useScroll();
  
  const transforms = useMemo(() => ({
    y1: useTransform(scrollY, [0, 500], [0, -250]),
    opacity: useTransform(scrollY, [0, 300], [1, 0])
  }), [scrollY]);

  const floatingIconsConfig = useMemo(() => ({
    code: {
      size: 40,
      className: "top-20 right-4 md:right-20 text-white/20",
      animate: { rotate: 360, scale: [1, 1.2, 1] },
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    },
    star: {
      size: 30,
      className: "bottom-40 left-4 md:left-20 text-white/20",
      animate: { y: [-20, 20, -20] },
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  }), []);

  const stats = useMemo(() => [
    { number: "50+", label: "Projects Delivered" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" }
  ], []);

  const handleStartProjectClick = useCallback(() => {
    const target = document.getElementById('contact');
    if (target) {
      if (typeof window !== 'undefined' && window.lenis) {
        window.lenis.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleViewProjectsClick = useCallback(() => {
    const target = document.getElementById('portfolio');
    if (target) {
      if (typeof window !== 'undefined' && window.lenis) {
        window.lenis.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: transforms.y1 }}
      >
        <BackgroundBlur className="top-20 left-10 bg-pink-500" />
        <BackgroundBlur className="top-40 right-10 bg-yellow-500" delay="1000ms" />
        <BackgroundBlur className="bottom-20 left-1/3 bg-indigo-500" delay="2000ms" />
      </motion.div>

      {/* Floating elements */}
      <FloatingIcon
        Icon={Code}
        {...floatingIconsConfig.code}
      />
      <FloatingIcon
        Icon={Star}
        {...floatingIconsConfig.star}
      />

      <motion.div 
        className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        style={{ opacity: transforms.opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium border border-white/20">
            🚀 Digital Excellence Awaits
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We Build{" "}
          <motion.span
            className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent block sm:inline"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Digital Dreams
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          From stunning websites to powerful mobile apps, we transform your vision into 
          digital reality with cutting-edge development and performance marketing.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-yellow-500 text-white border-0 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 group"
            onClick={handleStartProjectClick}
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white/30 text-white bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full hover:bg-white/20 transition-all duration-300 group"
            onClick={handleViewProjectsClick}
          >
            <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            View Projects
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-white/60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center min-w-[80px]">
              <div className="text-xl sm:text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}