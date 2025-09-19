import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function ContactSection({ id }) {
  const { ref: formRef, isIntersecting: formVisible } = useIntersectionObserver();
  const { ref: infoRef, isIntersecting: infoVisible } = useIntersectionObserver();

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
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
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={formVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                  <input type="hidden" name="access_key" value="19995c52-1190-4fa8-b965-af53f0becfb4" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white text-sm font-medium">Name *</label>
                      <Input
                        name="name"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white text-sm font-medium">Email *</label>
                      <Input
                        name="email_address"
                        type="email"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Subject</label>
                    <Input
                      name="subject"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Message *</label>
                    <Textarea
                      name="message"
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-pink-400 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold py-3 rounded-full hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            ref={infoRef}
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={infoVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="text-white/80 text-lg mb-8">
                We're here to help bring your digital vision to life. Contact us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div className="flex items-center space-x-4 text-white" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-white/80">auronyxads@gmail.com</div>
                </div>
              </motion.div>

              <motion.div className="flex items-center space-x-4 text-white" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-white/80">+91 9284555378 | +91 8003478344</div>
                </div>
              </motion.div>
            </div>

            <div className="pt-4">
              <h4 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h4>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full"></div>
                  <span>Free consultation and project estimation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full"></div>
                  <span>24/7 support and maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full"></div>
                  <span>Quick turnaround and delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full"></div>
                  <span>Proven track record of success</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}