import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import { testimonials } from '../../data/testimonials'; //new added
import { Card, CardContent } from "@/components/ui/card";

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     company: "CEO, Innovate Inc.",
//     feedback: "Auronyxads transformed our online presence. Their team delivered a stunning website and a marketing strategy that doubled our leads in just three months. Truly exceptional!",
//     rating: 5,
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     name: "Michael Chen",
//     company: "Founder, Tech Startup",
//     feedback: "The mobile app they developed for us is flawless. It's intuitive, fast, and has received amazing feedback from our users. Their expertise in Flutter is top-notch.",
//     rating: 5,
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     name: "Emily Rodriguez",
//     company: "Marketing Director, Lifestyle Co.",
//     feedback: "Working with Auronyxads has been a game-changer. Their performance marketing campaigns are data-driven and have consistently delivered an impressive ROI.",
//     rating: 5,
//     avatar: "https://randomuser.me/api/portraits/women/68.jpg"
//   },
//   {
//     name: "David Lee",
//     company: "CTO, Global Solutions",
//     feedback: "Auronyxads delivered a complex web application ahead of schedule and under budget. Their technical proficiency and project management were outstanding. Highly recommended!",
//     rating: 5,
//     avatar: "https://randomuser.me/api/portraits/men/47.jpg"
//   },
//   {
//     name: "Jessica White",
//     company: "Owner, Green Eats",
//     feedback: "Our digital marketing efforts finally paid off thanks to Auronyxads. They helped us reach new customers and significantly boosted our online sales. Fantastic results!",
//     rating: 4,
//     avatar: "https://randomuser.me/api/portraits/women/70.jpg"
//   },
// ];

// Create multiple copies for seamless infinite scroll
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialsSection({ id }) {
  const [isPaused, setIsPaused] = useState(false);

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
            className="flex space-x-8 px-8 infinite-scroll"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              width: 'max-content'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="flex-none w-[350px]"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  <CardContent className="p-8">
                    <MessageSquare className="absolute -top-4 -right-4 w-24 h-24 text-gray-200/50 group-hover:text-indigo-200/80 transition-all duration-500 transform group-hover:rotate-12" />
                    
                    <div className="flex items-center mb-6 relative z-10">
                      <img loading="lazy" decoding="async" src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-4 border-white shadow-md" />
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
        
        <motion.div
          className="mt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Hover to pause */}
        </motion.div>
      </div>

      <style jsx>{`
        .infinite-scroll {
          animation: scroll 40s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(testimonials.length * 366)}px);
          }
        }
      `}</style>
    </section>
  );
}