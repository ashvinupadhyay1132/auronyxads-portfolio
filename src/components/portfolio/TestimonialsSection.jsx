import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import { testimonials } from '../../data/testimonials';
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection({ id }) {
  const [isPaused, setIsPaused] = useState(false);

  // Memoize the infinite testimonials array to prevent recreation on every render
  const infiniteTestimonials = useMemo(() => [...testimonials, ...testimonials], []);

  // Calculate animation distance based on actual testimonials length
  const animationDistance = useMemo(() => testimonials.length * (350 + 32), []);

  return (
    <section id={id} className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Client{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Love
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our happy clients have to say about working with Auronyxads.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div 
            className="flex space-x-8 px-8"
            style={{
              width: 'max-content',
              animation: `scroll 25s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${testimonial.company}-${index}`}
                className="flex-none w-[350px]"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  <CardContent className="p-8">
                    <MessageSquare className="absolute -top-4 -right-4 w-24 h-24 text-gray-200/50 group-hover:text-indigo-200/80 transition-all duration-500 transform group-hover:rotate-12" />
                    
                    <div className="flex items-center mb-6 relative z-10">
                      <img 
                        src={testimonial.avatar} 
                        alt={`${testimonial.name} from ${testimonial.company}`} 
                        className="w-16 h-16 rounded-full mr-4 border-4 border-white shadow-md" 
                      />
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                      "{testimonial.feedback}"
                    </p>
                    
                    <div className="flex items-center relative z-10">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-${animationDistance}px);
          }
        }
      `}</style>
    </section>
  );
}