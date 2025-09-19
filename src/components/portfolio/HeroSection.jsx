import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection({ id }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -250]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: y1 }}
      >
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-48 md:w-72 h-48 md:h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-48 md:w-72 h-48 md:h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-4 md:right-20 text-white/20"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Code size={40} className="md:w-[60px] md:h-[60px]" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-4 md:left-20 text-white/20"
        animate={{
          y: [-20, 20, -20]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Star size={30} className="md:w-[40px] md:h-[40px]" />
      </motion.div>

      <motion.div 
        className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        style={{ opacity }}
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
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white/30 text-white bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full hover:bg-white/20 transition-all duration-300 group"
            onClick={() => {
              const target = document.getElementById('portfolio');
              if (target) {
                if (window.lenis) {
                  window.lenis.scrollTo(target);
                } else {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
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
          <div className="text-center min-w-[80px]">
            <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
            <div className="text-xs sm:text-sm">Projects Delivered</div>
          </div>
          <div className="text-center min-w-[80px]">
            <div className="text-xl sm:text-2xl font-bold text-white">99%</div>
            <div className="text-xs sm:text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center min-w-[80px]">
            <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
            <div className="text-xs sm:text-sm">Support</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div> */}
    </section>
  );
}