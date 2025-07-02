import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 500, label: "Projects Delivered", suffix: "+" },
    { number: 40, label: "Team Members", suffix: "+" },
    { number: 300, label: "Happy Clients", suffix: "+" },
    { number: 5, label: "Years Experience", suffix: "" },
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-2 bg-gradient-to-b from-black to-gray-950 relative"
    >
      <Helmet>
        <meta name="description" content="Learn about Averiq, a top software agency specializing in web development, custom software, and all types of software-related services for businesses worldwide." />
        <meta name="keywords" content="about software agency, web development, software services, custom software, IT solutions, Averiq" />
      </Helmet>
      {/* Minimal Grid Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
      {/* Section Number */}
      <motion.div
        variants={itemVariants}
        className="inline-block text-[12rem] font-extralight text-white/[0.03]  leading-none relative"
      >
        01
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-24"
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-light text-white mb-8 tracking-tight"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            Defining Excellence
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="700"
          >
            We are Averiq — a leading software agency and web development company. Our team of visionaries, architects, and craftspeople is dedicated to creating custom software solutions and all types of software-related services that transcend expectations and shape tomorrow's digital landscape.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div
                className="text-5xl sm:text-6xl font-extralight text-white mb-4 tracking-tight"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 2, delay: index * 0.1 }}
              >
                {inView && (
                  <CountUp end={stat.number} duration={2} delay={index * 0.1} />
                )}
                {stat.suffix}
              </motion.div>

              <div className="w-12 h-[1px] bg-white/20 mx-auto mb-4"></div>

              <p className="text-white/40 font-light tracking-wide text-sm uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Simple CountUp component
const CountUp = ({ end, duration = 2, delay = 0 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const increment = end / (duration * 60);
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return <span>{count}</span>;
};

export default About;
