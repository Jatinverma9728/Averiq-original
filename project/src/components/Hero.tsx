import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";
import { SparklesText } from "./magicui/sparkles-text";
import { MorphingText } from "./magicui/morphing-text";
// import { RetroGrid } from "./magicui/retro-grid";
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";
import { Helmet } from 'react-helmet-async';

const AnimatedBackground = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* SVG Blobs */}
    <motion.svg
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 2 }}
      className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw]"
      style={{ filter: "blur(60px)" }}
    >
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="50%" cy="50%" rx="45%" ry="40%" fill="url(#grad1)" />
    </motion.svg>
    <motion.svg
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw]"
      style={{ filter: "blur(80px)" }}
    >
      <defs>
        <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="50%" cy="50%" rx="40%" ry="35%" fill="url(#grad2)" />
    </motion.svg>

    <InteractiveGridPattern> </InteractiveGridPattern>
  </div>
);

const Modal = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center mb-4">
            <Play className="w-7 h-7 text-blue-400 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Our Work</h2>
          </div>
          <p className="text-gray-700 mb-2">
            Here you can showcase your portfolio, case studies, or a video demo.
          </p>
          <div className="rounded-lg bg-gray-100 h-40 flex items-center justify-center text-gray-400">
            {/* Placeholder for demo content */}
            <span>Demo Content / Portfolio Preview</span>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Averiq - Software Agency | Web Development & Software Services</title>
        <meta name="description" content="Averiq offers premium software solutions, web development, and all types of software-related services for businesses." />
        <meta name="keywords" content="software agency, web development, software services, custom software, app development, IT solutions, Averiq" />
        <meta property="og:title" content="Averiq - Software Agency | Web Development & Software Services" />
        <meta property="og:description" content="Averiq offers premium software solutions, web development, and all types of software-related services for businesses." />
        <meta property="og:image" content="/Averiq-Branding-kit/original-logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Elegant Background */}
        {/* Place the gradient background first */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900 z-0"></div>

        {/* SVG Blobs and Particles */}
        <AnimatedBackground />

        {/* Subtle Glow Effects */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Elegant Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-8 sm:mb-12"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wide">
              PREMIUM SOFTWARE SOLUTIONS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white mb-8 leading-[1.05] tracking-tight"
          >
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-3 flex-wrap w-full">
              <span className="block min-w-0 break-words">We Build</span>
              <SparklesText className="block md:inline min-w-0 break-words text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white mx-0 md:mx-2">
                Digital
              </SparklesText>
              <span className="block min-w-0 break-words">That Moves</span>
            </div>
            <span className="font-extralight text-white/60 block mt-2 text-2xl xs:text-3xl sm:text-4xl">
              <MorphingText texts={["Website", "App", "SaaS", "SEO", "UI/UX"]} />
            </span>
          </motion.h1>

          {/* Refined Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-white/50 mb-16 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Transforming ambitious visions into sophisticated software solutions
            that define the future of business.
          </motion.p>

          {/* Minimal CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <motion.button
              className="group px-4 py-2 bg-white text-black rounded-full font-medium text-md flex items-center space-x-3 hover:bg-white/90 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="#contact">Start Your Project</a>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              className="group px-4 py-2 border border-white/20 text-white rounded-full font-medium text-md flex items-center space-x-3 hover:border-white/40 hover:bg-white/[0.02] transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setModalOpen(true)}
            >
              <Play className="w-5 h-5" />
              <span>View Our Work</span>
            </motion.button>
          </motion.div>

          {/* Elegant Scroll Indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
            </div>
          </motion.div> */}
        </div>

        {/* Animated Modal */}
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
      </section>
    </>
  );
};

export default Hero;
