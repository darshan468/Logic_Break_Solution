import React, { useState } from 'react';
import { Globe, Brain, BarChart3, Settings2, MessageSquareText, Code2, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  bullets: string[];
}

const Services: React.FC = () => {
  const [expandedServices, setExpandedServices] = useState<Record<number, boolean>>({});

  const toggleService = (index: number) => {
    setExpandedServices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const services: ServiceItem[] = [
    {
      title: "WEBSITES & WEB APPS",
      description: "Modern, responsive websites and web applications tailored for businesses, startups, and personal projects.",
      icon: <Globe className="w-8 h-8 text-lb-gold" />,
      bullets: [
        "Custom website and web application development",
        "Responsive designs for mobile, tablet, and desktop",
        "Modern frontend and backend development",
        "API and third-party service integration",
        "Performance, load speed, and SEO optimization",
        "Website maintenance and ongoing support"
      ]
    },
    {
      title: "AI & MACHINE LEARNING",
      description: "AI-powered solutions for prediction, automation, chatbots, NLP, computer vision, and intelligent applications.",
      icon: <Brain className="w-8 h-8 text-lb-gold" />,
      bullets: [
        "Custom machine learning model development and integration",
        "Predictive analytics and data forecasting solutions",
        "Natural Language Processing (NLP) & text processing",
        "Computer vision for automated image and video analysis",
        "Process automation powered by artificial intelligence",
        "Model deployment, monitoring, and performance tuning"
      ]
    },
    {
      title: "DATA ANALYTICS",
      description: "Interactive dashboards and analytics solutions that turn raw data into clear, actionable business insights.",
      icon: <BarChart3 className="w-8 h-8 text-lb-gold" />,
      bullets: [
        "Interactive business intelligence dashboards & reports",
        "Data collection, cleaning, and ETL pipeline setup",
        "Real-time KPI and operational metric tracking",
        "Customer behavior and business trend analytics",
        "Data visualization using modern interactive charts",
        "Data-driven decision support systems"
      ]
    },
    {
      title: "AUTOMATION",
      description: "Automate repetitive tasks and complex workflows to save valuable time and eliminate manual work.",
      icon: <Settings2 className="w-8 h-8 text-lb-gold" />,
      bullets: [
        "End-to-end business process and workflow automation",
        "Repetitive task elimination & efficiency boosting",
        "Automated data synchronization across platforms",
        "Web scraping, data extraction, and scheduled background jobs",
        "Custom API integration with legacy & modern tools",
        "Automated error logging and instant alert notifications"
      ]
    },
    {
      title: "CHATBOTS & AI ASSISTANTS",
      description: "Smart conversational assistants for 24/7 customer support, information retrieval, and team productivity.",
      icon: <MessageSquareText className="w-8 h-8 text-lb-gold" />,
      bullets: [
        "24/7 automated customer support and instant query resolution",
        "Natural conversational flow design and intent detection",
        "Multi-platform deployment (Website, WhatsApp, Slack, Telegram)",
        "CRM and database integration for context-aware responses",
        "Knowledge base retrieval & RAG document assistants",
        "Continuous intent training and conversation analytics"
      ]
    },
    {
      title: "CUSTOM SOFTWARE",
      description: "Software applications designed and engineered specifically around your unique business requirements.",
      icon: <Code2 className="w-8 h-8 text-lb-gold" />,
      bullets: [
        "Bespoke software solutions tailored to your business needs",
        "Scalable cloud-native and microservice architecture",
        "Cross-platform desktop, web, and mobile software",
        "Secure database architecture design and optimization",
        "End-to-end software development lifecycle (SDLC)",
        "Security auditing, role authentication, and access control"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-lb-charcoal/30 overflow-hidden">
      <BackgroundEffects section="services" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">What Can We Build For You?</h2>
          <p className="text-gray-400 text-lg">
            We focus on understanding your needs and building the right solution to solve your problems and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {services.map((service, index) => {
            const isExpanded = !!expandedServices[index];

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-lb-charcoal p-8 rounded-2xl border border-white/5 hover:border-lb-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="bg-lb-black w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-lb-gold/30 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Expandable Bullet Points Section */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden pt-4 border-t border-white/10 mt-4"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold tracking-wider text-lb-gold uppercase">Learn More</span>
                          <span className="h-px bg-lb-gold/20 flex-1"></span>
                        </div>
                        <ul className="space-y-2.5 mb-2">
                          {service.bullets.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="flex items-start text-xs sm:text-sm text-gray-300 leading-snug">
                              <CheckCircle2 className="w-4 h-4 text-lb-gold shrink-0 mt-0.5 mr-2.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => toggleService(index)}
                    className="flex items-center text-lb-gold font-medium text-sm hover:underline cursor-pointer group-hover:gap-1.5 transition-all focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Show Less' : 'Learn More'}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:translate-y-0.5" />
                    )}
                  </button>
                  <a 
                    href="#contact" 
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Get Started <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-lb-charcoal to-lb-black border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Not sure what you need?</h3>
            <p className="text-gray-400 max-w-xl">
              Tell us what you're trying to achieve. We'll help you identify the right technology solution.
            </p>
          </div>
          <a href="#contact" className="shrink-0 bg-white text-lb-black font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition-colors">
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;


