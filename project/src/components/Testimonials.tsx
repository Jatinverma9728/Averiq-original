import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      company: "Nexus Ventures",
      role: "CEO",
      content:
        "Averiq transformed our ambitious vision into a platform that exceeded every expectation. Their attention to detail and strategic thinking is unparalleled.",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      company: "Digital Dynamics",
      role: "CTO",
      content:
        "Working with Averiq was transformative. They delivered a solution that drove 300% growth while maintaining the elegance we demanded.",
      avatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
    },
    {
      id: 3,
      name: "Emily Thompson",
      company: "HealthTech Solutions",
      role: "Founder",
      content:
        "The sophistication and thoughtfulness of their approach revolutionized how our patients interact with our services.",
      avatar:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    },
    {
      id: 4,
      name: "David Kim",
      company: "Commerce Plus",
      role: "Director",
      content:
        "Their platform increased our conversion rates by 150%. The team delivers excellence with remarkable consistency.",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-950">
      {/* Section Number */}
      <motion.div
        // variants={itemVariants}
        className="inline-block text-[12rem] font-extralight text-white/[0.03] mb-8 leading-none"
      >
        06
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
            Client Voices
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto font-light">
            The trust our clients place in us drives everything we do. Here's
            what they have to say about our partnership.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-700"
            >
              {/* Quote */}
              <div className="mb-8">
                <p className="text-white/70 text-lg leading-relaxed font-light">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative mr-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                  />
                </div>

                <div>
                  <h4 className="text-white font-light tracking-wide">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/40 text-sm font-light">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Subtle accent line */}
              <div className="absolute top-8 left-8 w-8 h-[1px] bg-white/20"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
