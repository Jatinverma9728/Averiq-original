import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Timeline scroll progress state
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      // Calculate how much of the timeline is in view
      const start = Math.max(0, windowHeight - rect.top);
      const end = Math.min(totalHeight, windowHeight);
      let percent = (start - end * 0.2) / (totalHeight - end * 0.2);
      percent = Math.max(0, Math.min(1, percent));
      setProgress(percent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper: calculate when each step should appear (as timeline grows)
  const getStepReveal = (idx: number, total: number) => {
    // Evenly distribute reveal points along the timeline
    return (idx + 1) / (total + 1);
  };

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We immerse ourselves in your vision, understanding every nuance of your business objectives and user needs.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Crafting a comprehensive roadmap that aligns technology choices with your strategic goals.',
    },
    {
      number: '03',
      title: 'Creation',
      description: 'Building with precision and artistry, where every line of code serves a purpose.',
    },
    {
      number: '04',
      title: 'Evolution',
      description: 'Launching with confidence and evolving continuously to exceed expectations.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
      id="process"
      className="py-2 bg-gradient-to-b from-gray-950 to-black"
    >
      {/* Section Number */}
      <motion.div
        // variants={itemVariants}
        className="inline-block text-[12rem] font-extralight text-white/[0.03]  leading-none"
      >
        05
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
            Our Approach
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto font-light">
            A refined methodology that transforms complex challenges into
            elegant solutions through thoughtful collaboration.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
          ref={timelineRef}
        >
          {/* Animated Timeline Line */}
          <motion.div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform -translate-x-1/2"
            style={{
              transformOrigin: 'top',
              scaleY: progress,
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 30 }}
          ></motion.div>

          <div className="space-y-32">
            {steps.map((step, index) => {
              const revealAt = getStepReveal(index, steps.length);
              const isVisible = progress >= revealAt;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    className="flex-1 lg:px-16"
                    initial={{ opacity: 0, y: 60 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 0.7, delay: isVisible ? 0.1 : 0 }}
                  >
                    <div
                      className={`text-center ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <motion.div
                        className="inline-block mb-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.7, delay: isVisible ? 0.15 : 0 }}
                      >
                        <span className="text-8xl font-extralight text-white/[0.08] tracking-wider">
                          {step.number}
                        </span>
                      </motion.div>

                      <motion.h3
                        className="text-3xl font-light text-white mb-6 tracking-wide"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.7, delay: isVisible ? 0.2 : 0 }}
                      >
                        {step.title}
                      </motion.h3>

                      <motion.p
                        className="text-white/50 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.7, delay: isVisible ? 0.25 : 0 }}
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Center Point (Animated Dot) */}
                  <motion.div
                    className="relative my-12 lg:my-0"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: isVisible ? 0.18 : 0 }}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                    <motion.div
                      className="absolute inset-0 w-4 h-4 bg-white rounded-full opacity-20"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isVisible ? { scale: 1.8, opacity: 0.2 } : { scale: 0, opacity: 0 }}
                      transition={{ duration: 0.7, delay: isVisible ? 0.22 : 0 }}
                      style={{ pointerEvents: 'none' }}
                    />
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 lg:px-16 hidden lg:block"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;