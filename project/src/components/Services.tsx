import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VelocityScroll } from "./magicui/scroll-based-velocity";

import { 
  Globe, 
  Smartphone, 
  Database, 
  Palette, 
  Layers, 
  Box 
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Sophisticated web applications built with modern architecture and exceptional performance.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform solutions that deliver seamless user experiences.',
    },
    {
      icon: Database,
      title: 'Enterprise Systems',
      description: 'Custom CRM and ERP solutions designed to optimize your business operations.',
    },
    {
      icon: Palette,
      title: 'SaaS Platforms',
      description: 'Scalable software-as-a-service solutions from concept to market deployment.',
    },
    {
      icon: Layers,
      title: 'Digital Experiences',
      description: 'Intuitive interfaces and motion design that captivate and engage users.',
    },
    {
      icon: Box,
      title: 'Innovation Labs',
      description: 'Cutting-edge 3D experiences and emerging technology implementations.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="services"
      className="py-2 bg-gradient-to-b from-gray-950 to-black"
    >
      {/* Section Number */}
      <motion.div
        // variants={itemVariants}
        className="inline-block text-[12rem] font-extralight text-white/[0.03] mb-8 leading-none"
      >
        02
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
            Our Craft
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto font-light">
            We specialize in creating digital solutions that combine technical
            excellence with thoughtful design and strategic thinking.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-700"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-8 text-white/60 group-hover:text-white transition-colors duration-500">
                <service.icon className="w-full h-full" strokeWidth={1} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Subtle hover line */}
              <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <VelocityScroll className="mt-20">
        Website ● App ● SaaS ● SEO ●
      </VelocityScroll>
    </section>
  );
};

export default Services;