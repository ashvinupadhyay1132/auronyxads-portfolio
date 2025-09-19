
import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, TrendingUp, Target, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Fast Loading"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    features: ["iOS & Android", "Flutter", "React Native", "UI/UX Design"],
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive meaningful engagement.",
    features: ["Social Media", "Content Strategy", "Brand Building", "Analytics"],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Data-driven marketing campaigns focused on measurable results and maximum return on investment.",
    features: ["PPC Campaigns", "Conversion Tracking", "A/B Testing", "ROI Optimization"],
    color: "from-orange-500 to-red-600"
  }
];

export default function ServicesSection({ id }) {
  return (
    <section id={id} className="py-20 bg-white">
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
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern landscape
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <CardContent className="p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <service.icon size={28} />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-3 text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span className="font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional features section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Lightning Fast</h4>
              <p className="text-sm text-gray-600">Optimized for speed and performance</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Global Reach</h4>
              <p className="text-sm text-gray-600">Scalable solutions worldwide</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Results Driven</h4>
              <p className="text-sm text-gray-600">Measurable outcomes and ROI</p>
            </div>
            <div className="text-center">
              <Code className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Clean Code</h4>
              <p className="text-sm text-gray-600">Maintainable and scalable</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
