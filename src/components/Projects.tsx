import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'AI / ML', 'Web', 'Analytics', 'Automation'];

  const projects = [
    {
      id: 1,
      title: "Social Media Analytics Dashboard",
      description: "Interactive analytics platform for analyzing social media usage and user behavior with real-time tracking.",
      category: "Analytics",
      tags: ["Python", "Machine Learning", "Streamlit", "Power BI"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "E-Commerce Recommendation Engine",
      description: "AI-driven product recommendation system that increases conversion rates by suggesting relevant items.",
      category: "AI / ML",
      tags: ["TensorFlow", "FastAPI", "React", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Healthcare Clinic Portal",
      description: "Complete patient management web application with appointment booking and telemedicine integration.",
      category: "Web",
      tags: ["Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2076&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Invoice Processing Bot",
      description: "Automated OCR system that extracts data from PDF invoices and syncs directly into accounting software.",
      category: "Automation",
      tags: ["Python", "OpenCV", "UiPath", "AWS Textract"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-lb-black overflow-hidden">
      <BackgroundEffects section="projects" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-gray-400 text-lg">
              Take a look at some of the solutions we've built. We turn complex problems into practical, easy-to-use software.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter 
                    ? 'bg-lb-gold text-lb-black' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-lb-charcoal rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-lb-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <a href="#contact" className="p-2 bg-white/5 rounded-full hover:bg-lb-gold hover:text-lb-black transition-colors">
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                  
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 bg-lb-black rounded-md text-gray-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
