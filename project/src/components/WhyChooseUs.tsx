import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: 'Transparent Partnership',
      description: 'Clear communication, honest timelines, and pricing that respects your investment in excellence.',
    },
    {
      title: 'Performance Obsessed',
      description: 'Every solution is architected for speed, scalability, and the demands of tomorrow.',
    },
    {
      title: 'Lifetime Commitment',
      description: 'Our relationship extends beyond launch with ongoing support and strategic evolution.',
    },
    {
      title: 'Strategic Growth',
      description: 'Solutions designed not just for today, but to scale with your ambitions and market evolution.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-32 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Gradient Blobs Background */}
      <div className="absolute top-42 right-1  w-[40vw] h-[40vw] bg-gradient-to-br from-blue-900/50 via-purple-900/20 to-transparent rounded-full blur-3xl z-0"></div>
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-400/20 via-blue-400/20 to-transparent rounded-full blur-2xl z-0"></div> */}
      {/* Section Number */}
      <motion.div
        // variants={itemVariants}
        className="inline-block text-[12rem] font-extralight text-white/[0.03]  leading-none relative z-10"
      >
        04
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          {/* Removed previous gradient blobs here, now in section background */}
          <h2 className="text-4xl sm:text-6xl font-light text-white mb-8 tracking-tight">
            Why Averiq
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto font-light">
            We don't just build software — we forge partnerships that drive
            meaningful transformation and lasting success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              {/* Number */}
              <div className="text-6xl font-extralight text-white/[0.08] mb-6 tracking-wider">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-light text-white mb-4 tracking-wide">
                {feature.title}
              </h3>

              <p className="text-white/50 leading-relaxed font-light">
                {feature.description}
              </p>

              {/* Subtle line */}
              <div className="w-12 h-[1px] bg-white/20 mt-8 group-hover:w-24 transition-all duration-700"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;