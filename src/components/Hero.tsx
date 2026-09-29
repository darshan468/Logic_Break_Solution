import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Effects */}
      <BackgroundEffects />

      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lb-gold/30 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-lb-gold animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-gray-300">
            AI • SOFTWARE • DATA • AUTOMATION
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1] mb-6"
        >
          Turning Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-lb-gold via-amber-300 to-lb-gold-light">Intelligent</span> Digital Solutions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          We design and build websites, software, AI solutions, data dashboards and automation systems tailored to your needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
        >
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-lb-gold text-lb-black font-bold px-8 py-4 rounded-full hover:bg-lb-gold-light transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            Start a Project
            <ArrowRight size={20} />
          </a>
          <a
            href="#services"
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Explore Services
            <ChevronDown size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm text-gray-500 max-w-md"
        >
          <p>Have an idea? Tell us what you need — we'll help you turn it into a working solution.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
