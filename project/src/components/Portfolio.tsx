import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Nexus Commerce',
      category: 'Web',
      description: 'Next-generation e-commerce platform with AI-driven personalization',
      image: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg',
      year: '2024',
    },
    {
      id: 2,
      title: 'Vault Financial',
      category: 'App',
      description: 'Secure digital banking with biometric authentication',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
      year: '2024',
    },
    {
      id: 3,
      title: 'MedFlow CRM',
      category: 'Enterprise',
      description: 'Healthcare management system for modern practices',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg',
      year: '2023',
    },
    {
      id: 4,
      title: 'Quantum Analytics',
      category: 'SaaS',
      description: 'Real-time data visualization and business intelligence',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      year: '2024',
    },
    {
      id: 5,
      title: 'Supply Chain Pro',
      category: 'Enterprise',
      description: 'Smart inventory management with IoT integration',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg',
      year: '2023',
    },
    {
      id: 6,
      title: 'Creative Studio',
      category: 'Web',
      description: 'Portfolio platform for creative professionals',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      year: '2024',
    },
  ];

  const filters = ['All', 'Web', 'App', 'Enterprise', 'SaaS'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Enhanced animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.98,
      rotateX: 5,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1,
        delay: i * 0.08,
        ease: [0.25, 0.25, 0, 1],
      }
    }),
  };

  return (
    <section
      id="portfolio"
      className="py-2 bg-gradient-to-b from-black to-gray-950"
    >
      {/* Section Number */}
      <motion.div
        // variants={itemVariants}
        className="inline-block text-[12rem] font-extralight text-white/[0.03]  leading-none"
      >
        03
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-6xl font-light text-white mb-8 tracking-tight">
            Selected Work
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto mb-16 font-light">
            A curated collection of projects that showcase our commitment to
            excellence and innovation in digital craftsmanship.
          </p>

          {/* Minimal Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-light text-sm tracking-wide transition-all duration-500 ${
                  activeFilter === filter
                    ? "bg-white text-black"
                    : "bg-white/[0.05] text-white/60 hover:bg-white/[0.1] hover:text-white/80"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
            style={{
              perspective: "1000px",
              perspectiveOrigin: "50% 50%"
            }}
          >
            {filteredProjects.map((project, index) => {
              const [cardRef, cardInView] = useInView({
                threshold: 0.1,
                triggerOnce: true,
                margin: "-50px"
              });

              return (
                <motion.div
                  key={project.id}
                  ref={cardRef}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={cardInView ? "visible" : "hidden"}
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.01,
                    transition: { 
                      duration: 0.3, 
                      ease: [0.25, 0.25, 0, 1]
                    }
                  }}
                  className="group relative bg-black/20 backdrop-blur-lg rounded-[24px] overflow-hidden border border-white/5"
                >
                  <div className="p-4"> {/* Reduced padding */}
                    <div className="relative h-[200px] rounded-[20px] overflow-hidden"> {/* Reduced height */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-700"
                      />
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      {/* Glossy effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative px-6 pb-6"> {/* Reduced padding */}
                    {/* Project Info */}
                    <div className="flex items-center justify-between mb-3"> {/* Reduced margin */}
                      <h3 className="text-xl font-light text-white">{project.title}</h3> {/* Smaller text */}
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Stats */}
                    <div className="flex items-center gap-4 mb-4"> {/* Reduced gap and margin */}
                      <div className="flex flex-col">
                        <span className="text-white/50 text-xs">Year</span>
                        <span className="text-white font-light text-sm">{project.year}</span>
                      </div>
                      <div className="h-8 w-[1px] bg-white/10" />
                      <motion.button
                        className="flex items-center gap-2 text-white/80 hover:text-white group/btn"
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-xs font-light">View Details</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </motion.button>
                    </div>

                    {/* Description - Made shorter */}
                    <p className="text-white/60 font-light text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;