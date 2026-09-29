import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, MessagesSquare, Code, Rocket, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Tell Us Your Idea",
      description: "Reach out with your concept or problem. You don't need technical knowledge—just tell us what you want to achieve.",
      icon: <Lightbulb className="w-6 h-6 text-lb-black" />
    },
    {
      num: "02",
      title: "Discuss Requirements",
      description: "We'll chat to understand your goals, timeline, and budget, then propose the best technical approach.",
      icon: <MessagesSquare className="w-6 h-6 text-lb-black" />
    },
    {
      num: "03",
      title: "We Build Your Solution",
      description: "Our team gets to work. We'll keep you updated on progress and make adjustments based on your feedback.",
      icon: <Code className="w-6 h-6 text-lb-black" />
    },
    {
      num: "04",
      title: "You Receive the Final Product",
      description: "We deliver a polished, tested solution ready for you to use. We also provide guidance on how to manage it.",
      icon: <Rocket className="w-6 h-6 text-lb-black" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-lb-black/40 backdrop-blur-[2px] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How Does It Work?</h2>
          <p className="text-gray-400 text-lg">
            We've made our process as simple as possible. You don't need to be a tech expert to work with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[1px] bg-white/10 border-dashed border-t border-white/20" />
              )}
              
              <div className="bg-lb-charcoal p-8 rounded-2xl border border-white/5 h-full relative z-10 hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-lb-gold rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-black text-white/5">{step.num}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-white text-lb-black font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            Start Your Project
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
