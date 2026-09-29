import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const About = () => {
  const trustIndicators = [
    "AI & Data Science Expertise",
    "Modern Technology Stack",
    "Customized Solutions",
    "Direct Communication",
    "Flexible Project Approach",
    "Student-driven Innovation"
  ];

  return (
    <section id="about" className="relative py-24 bg-lb-charcoal/30 overflow-hidden">
      <BackgroundEffects section="about" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Who Is Logic Break Solutions?</h2>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                We are a collaborative technology team from the Artificial Intelligence & Data Science domain, focused on turning ideas and real-world problems into practical digital solutions.
              </p>
              <p>
                As a young technology team, we are driven by problem-solving and client success. We don't just write code; we understand your objectives to build software that actually matters.
              </p>
              <p>
                Whether you're a small business looking to automate tasks, a startup needing a modern web app, or someone with a great idea but no technical background, we are here to help.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-lb-charcoal rounded-full border border-white/10 flex items-center justify-center font-bold text-3xl">
                  <span className="text-lb-gold">L</span><span className="text-white">B</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl">Logic Break Team</h4>
                  <p className="text-gray-400 text-sm">Founders & Developers</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-lb-black p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lb-gold/5 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-2xl font-bold mb-8">Why Work With Us?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-lb-gold shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-medium">{indicator}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-lb-charcoal rounded-xl border border-white/5">
              <p className="text-gray-400 text-sm italic">
                "We prioritize clear communication and practical results. No confusing jargon, just technology that works for you."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
