import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  testimonials,
  className = '',
  duration = 15,
}) => {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <motion.div
        className="flex flex-col gap-6"
        animate={{
          y: ['0%', `-${100 - 100 / testimonials.length}%`],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="bg-black-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-white/30 transition-all duration-300 shadow-lg"
          >
            <div className="relative">
              <svg
                className="absolute -top-2 -left-2 w-8 h-8 text-white/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-200 text-sm sm:text-base pl-6">
                {testimonial.text}
              </p>
            </div>
            <div className="flex items-center mt-6 gap-3 pt-4 border-t border-gray-700/50">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/30"
              />
              <div>
                <p className="font-medium text-white">{testimonial.name}</p>
                <p className="text-sm text-blue-300/80">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
