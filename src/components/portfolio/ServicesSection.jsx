
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, TrendingUp, Target, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Memoized feature item component
const FeatureItem = React.memo(({ feature, color, index, parentIndex }) => (
  <motion.div
    className="flex items-center space-x-3 text-gray-700"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: parentIndex * 0.1 + index * 0.05 }}
  >
    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}></div>
    <span className="font-medium">{feature}</span>
  </motion.div>
));

// Memoized service icon component
const ServiceIcon = React.memo(({ Icon, color }) => (
  <motion.div
    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center mb-6`}
    whileHover={{ rotate: 360, scale: 1.1 }}
    transition={{ duration: 0.8 }}
  >
    <Icon size={28} />
  </motion.div>
));

// Memoized additional feature component
const AdditionalFeature = React.memo(({ Icon, title, description }) => (
  <div className="text-center">
    <Icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
    <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
));

// Memoized service card component
const ServiceCard = React.memo(({ service, index, animationVariants }) => (
  <motion.div
    {...animationVariants.card(index)}
    viewport={{ once: true }}
  >
    <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
      <CardContent className="p-8 relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        <div className="relative z-10">
          <ServiceIcon Icon={service.icon} color={service.color} />

          <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

          <div className="space-y-2">
            {service.features.map((feature, featureIndex) => (
              <FeatureItem
                key={feature}
                feature={feature}
                color={service.color}
                index={featureIndex}
                parentIndex={index}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
));

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
  // Memoize animation variants
  const animationVariants = useMemo(() => ({
    header: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
    },
    card: (index) => ({
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: index * 0.1 },
      whileHover: { y: -10 }
    }),
    features: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
    }
  }), []);

  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          {...animationVariants.header}
          viewport={{ once: true }}
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
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              animationVariants={animationVariants}
            />
          ))}
        </div>

        {/* Additional features section */}
        <motion.div
          className="mt-20 text-center"
          {...animationVariants.features}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AdditionalFeature
              Icon={Zap}
              title="Lightning Fast"
              description="Optimized for speed and performance"
            />
            <AdditionalFeature
              Icon={Globe}
              title="Global Reach"
              description="Scalable solutions worldwide"
            />
            <AdditionalFeature
              Icon={Target}
              title="Results Driven"
              description="Measurable outcomes and ROI"
            />
            <AdditionalFeature
              Icon={Code}
              title="Clean Code"
              description="Maintainable and scalable"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
