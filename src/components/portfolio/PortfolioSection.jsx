import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Smartphone, TrendingUp, Star, Calendar, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {portfolioItems} from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";


const categories = ["All", "Web Development", "App Development", "Digital Marketing", "Performance Marketing"];

export default function PortfolioSection({ id }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id={id} className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our latest projects and success stories across various industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-white hover:bg-indigo-50 text-gray-700 border-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  <AnimatePresence mode="wait">
    {filteredItems.map((item, index) => (
      <motion.div
        key={item.id}
        layout
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative h-full"
      >
        {/* Card */}
        <motion.div
          className="relative h-full bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md"
          whileHover={{
            scale: 1.02,
            y: -6,
            boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
          }}
          transition={{ duration: 0.35 }}
        >
          {/* Featured Badge */}
          {item.featured && (
            <motion.div
              className="absolute top-3 left-3 z-20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
            >
              <div className="px-2 py-1 bg-gradient-to-r from-amber-400 to-red-400 text-white text-xs font-bold rounded-full shadow-md">
                ✨ Featured
              </div>
            </motion.div>
          )}

          {/* Image */}
          <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden rounded-2xl m-3 md:m-4">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-2xl  transition duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Card Body */}
          <div className="px-4 pb-4 flex flex-col gap-3 md:gap-4">
            {/* Title (color change on hover) */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight transition-colors group-hover:text-indigo-600">
              {item.title}
            </h3>

            {/* Description (always clear) */}
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {/* Tags (always clear) */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl border border-gray-200 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer Buttons (always clear) */}
            <div className="flex items-center gap-4 pt-3 border-t border-gray-100 mt-auto">
              <a
                href={item.demoLink || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={item.githubLink || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900"
              >
                <Code className="w-4 h-4" />
                Source
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>


        {/* Results Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </motion.div>
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </motion.div>
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
            <div className="text-gray-600">Average ROI</div>
          </motion.div>
          <motion.div 
            className="p-6 bg-white rounded-xl shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}