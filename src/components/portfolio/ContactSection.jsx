import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection({ id }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoize static data to prevent recreation on every render
  const contactInfo = useMemo(() => [
    {
      icon: Mail,
      title: "Email",
      value: "auronyxads@gmail.com",
      gradient: "from-pink-500 to-yellow-500"
    },
    {
      icon: Phone,
      title: "Phone", 
      value: "+91 9284555378 | +91 8003478344",
      gradient: "from-purple-500 to-pink-500"
    }
  ], []);

  const benefits = useMemo(() => [
    "Free consultation and project estimation",
    "24/7 support and maintenance", 
    "Quick turnaround and delivery",
    "Proven track record of success"
  ], []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        // Handle success - you might want to show a success message
        e.target.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch with us to discuss your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="access_key" value="19995c52-1190-4fa8-b965-af53f0becfb4" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-white text-sm font-medium">Name *</label>
                      <Input
                        id="name"
                        name="name"
                        required
                        disabled={isSubmitting}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white text-sm font-medium">Email *</label>
                      <Input
                        id="email"
                        name="email_address"
                        type="email"
                        required
                        disabled={isSubmitting}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-white text-sm font-medium">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      disabled={isSubmitting}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-white text-sm font-medium">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      disabled={isSubmitting}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold py-3 rounded-full hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 disabled:opacity-50"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="text-white/80 text-lg mb-8">
                We're here to help bring your digital vision to life. Contact us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={contact.title}
                  className="flex items-center space-x-4 text-white" 
                  whileHover={{ x: 10 }} 
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center`}>
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">{contact.title}</div>
                    <div className="text-white/80">{contact.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h4>
              <div className="space-y-3 text-white/80">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-3 right-4 text-[10px] text-white/60 tracking-wide z-20">
        © {new Date().getFullYear()} Developed by{" "}
        <span className="font-semibold text-white">Ashvin Upadhyay</span>
      </div>
    </section>
  );
}