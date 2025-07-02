import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VelocityScroll } from "./magicui/scroll-based-velocity";
import { GlowingEffect } from "./magicui/glowing-effect";
import { cn } from "../lib/utils";
import { Helmet } from 'react-helmet-async';

// Using standard img tags for icons

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  
  return (
    <section
      id="services"
      className="py-2 bg-gradient-to-b from-gray-950 to-black"
    >
      <Helmet>
        <meta name="description" content="Discover Averiq's full range of services: web development, custom software, mobile apps, enterprise systems, digital experiences, and IT solutions for businesses." />
        <meta name="keywords" content="services, software agency, web development, custom software, IT solutions, mobile app development, enterprise systems, digital experiences, Averiq" />
      </Helmet>
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
            Averiq is a software agency specializing in web development, custom software, and IT solutions. We create digital solutions that combine technical excellence, thoughtful design, and strategic thinking to help businesses grow and succeed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ul className=" grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={
                <div className="relative h-20 w-20">
                  <img src="/icons/rocket.png" alt="Web Development" className="h-20 w-20 object-contain" />
                </div>
              }
              title="Web Development"
              description="Sophisticated web applications built with modern architecture and exceptional performance."
            />
            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={
                <div className="relative h-20 w-20">
                  <img src="/icons/star.png" alt="Mobile Applications" className="h-20 w-20 object-contain" />
                </div>
              }
              title="Mobile Applications"
              description="Native and cross-platform solutions that deliver seamless user experiences."
            />
            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={
                <div className="relative h-20 w-20">
                  <img src="/icons/folder.png" alt="Enterprise Systems" className="h-20 w-20 object-contain" />
                </div>
              }
              title="Enterprise Systems"
              description="Custom CRM and ERP solutions designed to optimize your business operations."
            />
            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={
                <div className="relative h-20 w-20">
                  <img src="/icons/star2.png" alt="Digital Experiences" className="h-20 w-20 object-contain" />
                </div>
              }
              title="Digital Experiences"
              description="Intuitive interfaces and motion design that captivate and engage users."
            />
            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={
                <div className="relative h-20 w-20">
                  <img src="/icons/heart.png" alt="Innovation Labs" className="h-20 w-20 object-contain" />
                </div>
              }
              title="Innovation Labs"
              description="Cutting-edge 3D experiences and emerging technology implementations."
            />
          </ul>
        </motion.div>
      </div>
      <VelocityScroll className="mt-20">
        Website ● App ● SaaS ● SEO ●
      </VelocityScroll>
    </section>
  );
};

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem]  md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-transparent p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance font-light text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-white/60">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Services;