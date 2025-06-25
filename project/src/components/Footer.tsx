import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { InteractiveGridPattern } from './magicui/interactive-grid-pattern';
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

const Footer = () => {
  const quickLinks = [
    { label: 'Work', href: '#portfolio', description: 'Our Portfolio' },
    { label: 'Services', href: '#services', description: 'What We Offer' },
    { label: 'Process', href: '#process', description: 'How We Work' },
    { label: 'About', href: '#about', description: 'Our Story' },
  ];

  const services = [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Applications', href: '#services' },
    { label: 'Enterprise Systems', href: '#services' },
    { label: 'SaaS Platforms', href: '#services' },
    { label: 'Digital Strategy', href: '#services' },
    { label: 'Technical Consulting', href: '#services' },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/Averiq196428", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jatinverma9728/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Jatinverma9728",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/averiq.in?igsh=MTB3d3JudXpqamhpaA==",
      label: "Instagram",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "hello.averiq@gmail.com",
      href: "mailto:hello.averiq@gmail.com",
    },
    { icon: Phone, label: "+91 97283 49291", href: "tel:9728349291" },
    { icon: MapPin, label: "Bharat Nagar Bhiwani, Haryana, IN", href: "#" },
  ];

  // Modal state
  const [modal, setModal] = useState<null | "privacy" | "terms">(null);

  // Modal content
  const modalContent = {
    privacy: {
      title: "Privacy Policy",
      body: (
        <div className="space-y-4 text-white/80 text-base font-light">
          <p>
            We value your privacy. Your information is never shared with third parties. We only use your data to provide and improve our services. By using our website, you consent to our privacy practices.
          </p>
          <p>
            For more details, please contact us at <a href="mailto:hello.averiq@gmail.com" className="underline text-white/90">hello.averiq@gmail.com</a>.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms of Service",
      body: (
        <div className="space-y-4 text-white/80 text-base font-light">
          <p>
            By accessing or using our services, you agree to be bound by these terms. All content is provided for informational purposes only. We reserve the right to update these terms at any time.
          </p>
          <p>
            For questions, contact us at <a href="mailto:hello.averiq@gmail.com" className="underline text-white/90">hello.averiq@gmail.com</a>.
          </p>
        </div>
      ),
    },
  };

  // Modal component
  const Modal = ({ open, onClose, title, children }: { open: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
    if (!open) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="bg-gradient-to-b from-gray-950 to-black rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 relative border border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white/90 text-2xl font-light"
            aria-label="Close"
          >
            &times;
          </button>
          <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
          <div>{children}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Modals */}
      <Modal
        open={modal === "privacy"}
        onClose={() => setModal(null)}
        title={modalContent.privacy.title}
      >
        {modalContent.privacy.body}
      </Modal>
      <Modal
        open={modal === "terms"}
        onClose={() => setModal(null)}
        title={modalContent.terms.title}
      >
        {modalContent.terms.body}
      </Modal>
      <footer className="relative bg-gradient-to-b from-black to-gray-950 overflow-hidden">
        {/* Interactive Grid Pattern */}
        <InteractiveGridPattern className="opacity-50 [mask-image:linear-gradient(to_bottom,transparent,black_40%,black)]" />

        {/* Existing background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="pt-24 pb-16">
            {/* Top Section - Brand and CTA */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              {/* Brand Column */}
              <div>
                <motion.div
                  className="flex items-center space-x-4 mb-8 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <img
                      src="/Averiq-Branding-kit/logo+branding-white.png"
                      alt="Averiq Logo"
                      className="w-52 rounded-xl shadow-lg object-contain "
                    />
                    {/* Optionally keep the glow effect */}
                    {/* <div className="absolute inset-0 w-12 h-12 bg-white/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div> */}
                  </div>
                  {/* <div className="flex flex-col">
                    <span className="text-3xl font-light text-white tracking-[0.02em] leading-none">
                      Averiq
                    </span>
                    <span className="text-sm text-white/40 font-light tracking-widest uppercase">
                      Software Agency
                    </span>
                  </div> */}
                </motion.div>

                <p className="text-white/60 mb-8 leading-relaxed font-light max-w-md text-lg">
                  Crafting digital excellence through thoughtful design, strategic
                  thinking, and technical mastery that transforms businesses.
                </p>

                {/* Contact Information */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center space-x-4 text-white/50 hover:text-white/80 transition-colors duration-300 group"
                      whileHover={{ x: 4 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-10 h-10 bg-white/[0.05] rounded-full flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                        <contact.icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <span className="font-light">{contact.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA Column */}
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-light text-white mb-6 tracking-tight leading-tight">
                  Ready to start your
                  <br />
                  <span className="text-white/60">next project?</span>
                </h3>

                <p className="text-white/50 mb-8 font-light text-lg">
                  Let's discuss how we can bring your vision to life with
                  exceptional software solutions.
                </p>

                {/* <motion.button
                  className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-lg overflow-hidden w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>Let's Work Together</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 group-hover:from-gray-50 group-hover:to-white transition-all duration-300"></div>
                </motion.button> */}
                <a href="#contact">
                  <InteractiveHoverButton className="w-fit">
                    Let's Work Together
                  </InteractiveHoverButton>
                </a>
              </div>
            </div>

            {/* Middle Section - Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-16 border-t border-b border-white/[0.06]">
              {/* Navigation */}
              <div>
                <h4 className="text-white font-light text-lg mb-8 tracking-wide">
                  Navigation
                </h4>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className="group flex items-center justify-between text-white/50 hover:text-white/80 transition-colors duration-300 py-2"
                      >
                        <div>
                          <div className="font-light">{link.label}</div>
                          <div className="text-white/30 text-sm font-light">
                            {link.description}
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-white font-light text-lg mb-8 tracking-wide">
                  Services
                </h4>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <motion.li
                      key={service.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={service.href}
                        className="text-white/50 hover:text-white/80 transition-colors duration-300 font-light block py-1"
                      >
                        {service.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Social & Newsletter */}
              <div>
                <h4 className="text-white font-light text-lg mb-8 tracking-wide">
                  Stay Connected
                </h4>

                {/* Social Links */}
                <div className="flex space-x-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-white/[0.05] rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.1] transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon className="w-5 h-5" strokeWidth={1.5} />
                    </motion.a>
                  ))}
                </div>

                {/* Newsletter */}
                <div>
                  <p className="text-white/50 text-sm font-light mb-4">
                    Subscribe to our newsletter for insights and updates.
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-l-full text-white placeholder-white/40 focus:outline-none focus:border-white/[0.2] transition-colors font-light"
                    />
                    <button className="px-6 py-3 bg-white text-black rounded-r-full hover:bg-white/90 transition-colors font-medium">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-12 flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-white/40">
                <p className="font-light">
                  &copy; 2025 Averiq. All rights reserved.
                </p>
                <div className="flex space-x-8">
                  <button
                    type="button"
                    onClick={() => setModal("privacy")}
                    className="hover:text-white/60 transition-colors font-light text-sm bg-transparent border-0 p-0 m-0 cursor-pointer"
                    style={{ background: "none" }}
                  >
                    Privacy Policy
                  </button>
                  <button
                    type="button"
                    onClick={() => setModal("terms")}
                    className="hover:text-white/60 transition-colors font-light text-sm bg-transparent border-0 p-0 m-0 cursor-pointer"
                    style={{ background: "none" }}
                  >
                    Terms of Service
                  </button>
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-white/40 text-sm font-light">
                  All systems operational
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;