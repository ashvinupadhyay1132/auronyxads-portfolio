import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Star, Award, Users, Coffee, CheckCircle, Code, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection({ id }) {
  // Memoize static data arrays to prevent recreation on every render
  const features = useMemo(() => [
    { icon: CheckCircle, title: "Custom Solutions", desc: "Tailored to your specific needs" },
    { icon: Code, title: "Agile Development", desc: "Fast, iterative methodology" },
    { icon: Heart, title: "24/7 Support", desc: "Always here when you need us" },
    { icon: Users, title: "Transparent Process", desc: "Clear communication throughout" }
  ], []);

  const stats = useMemo(() => [
    { icon: Users, number: "10+", label: "Expert Team Members", color: "from-blue-500 to-indigo-600" },
    { icon: Award, number: "5+", label: "Industry Awards", color: "from-purple-500 to-pink-600" },
    { icon: Star, number: "4.9/5", label: "Client Rating", color: "from-green-500 to-teal-600" },
    { icon: Coffee, number: "∞", label: "Cups of Coffee", color: "from-orange-500 to-red-600" }
  ], []);

  const values = useMemo(() => [
    {
      icon: Star,
      title: "Innovation",
      description: "We stay ahead of the curve with the latest technologies and creative approaches to solve complex challenges.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring transparency and alignment throughout every project.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Quality is at the heart of everything we do. We deliver solutions that exceed expectations and drive results.",
      color: "from-orange-500 to-red-600"
    }
  ], []);

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
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Auronyxads
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of digital experts dedicated to transforming businesses through innovative technology and creative solutions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Crafting Digital Excellence Since 2024
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Building Tomorrow's Digital Experiences Today
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that great design and powerful technology should work hand-in-hand to create experiences that not only look amazing but deliver real results for your business.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Our team combines creativity with technical expertise to build solutions that stand the test of time, helping businesses thrive in the digital landscape.
            </p>
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${stat.color} text-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <stat.icon size={28} />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} text-white rounded-xl flex items-center justify-center mx-auto mb-6 relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon size={28} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
