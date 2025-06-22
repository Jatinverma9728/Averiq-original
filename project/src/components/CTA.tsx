import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { BorderBeam } from "./magicui/border-beam";
import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button";

// Removed AnimatedDots component

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [state, handleSubmit] = useForm("movwlqqp");
  const isInView = useInView();

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-gray-900"
    >
      {/* Elegant blurred accent behind form */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl z-0"></div>
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <motion.div className="inline-block text-[12rem] font-extralight text-white/[0.03] mb-8 leading-none">
          07
        </motion.div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start gap-16"
        >
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 mb-12 lg:mb-0"
          >
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6 leading-tight tracking-tight text-left">
              Let's Create <br />
              <span className="font-extralight text-white/60">
                Something Remarkable
              </span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-md leading-relaxed font-light text-left">
              Ready to transform your vision into reality? Let's discuss how we
              can craft a solution that defines the future of your business.
            </p>
            <div className="space-y-6 text-left">
              <div>
                <p className="text-sm font-light tracking-wide uppercase mb-1 text-white/40">
                  Email
                </p>
                <p className="text-white/80">hello.averiq@gmail.com</p>
              </div>
              <div>
                <p className="text-sm font-light tracking-wide uppercase mb-1 text-white/40">
                  Phone
                </p>
                <p className="text-white/80">+91 97283 49291</p>
              </div>
              <div>
                <p className="text-sm font-light tracking-wide uppercase mb-1 text-white/40">
                  Response
                </p>
                <p className="text-white/80">Within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Divider for desktop */}
          <div className="hidden lg:block h-[500px] w-px bg-gradient-to-b from-white/10 via-white/30 to-white/10 mx-2 mr-16 rounded-full"></div>

          {/* Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-xl mx-auto lg:mx-0 p-0"
          >
            <div className="relative rounded-3xl">
              <div className="relative z-10 rounded-3xl bg-black/20 backdrop-blur-lg p-10 border border-white/10 shadow-2xl ring-1 ring-white/5">
                <BorderBeam duration={8} size={100} />
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="peer w-full bg-transparent border-b border-white/20 pt-6 pb-2 focus:outline-none text-base text-white placeholder-transparent transition-all rounded-md"
                      placeholder="Full Name"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-2 text-xs tracking-wider font-medium text-white/60 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-xs peer-focus:text-white"
                    >
                      FULL NAME
                    </label>
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                    <span className="absolute top-6 right-2 text-white/60">
                      *
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="peer w-full bg-transparent border-b border-white/20 pt-6 pb-2 focus:outline-none text-base text-white placeholder-transparent transition-all rounded-md"
                        placeholder="Email"
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 top-2 text-xs tracking-wider font-medium text-white/60 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-xs peer-focus:text-white"
                      >
                        EMAIL
                      </label>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-400 text-xs mt-1"
                      />
                      <span className="absolute top-6 right-2 text-white/60">
                        *
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="peer w-full bg-transparent border-b border-white/20 pt-6 pb-2 focus:outline-none text-base text-white placeholder-transparent transition-all rounded-md"
                        placeholder="Phone"
                        required
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-0 top-2 text-xs tracking-wider font-medium text-white/60 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-xs peer-focus:text-white"
                      >
                        PHONE
                      </label>
                      <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                        className="text-red-400 text-xs mt-1"
                      />
                      <span className="absolute top-6 right-2 text-white/60">
                        *
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="peer w-full bg-transparent border-b border-white/20 pt-6 pb-2 focus:outline-none text-base text-white placeholder-transparent transition-all resize-none rounded-md"
                      placeholder="Message"
                      required
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 top-2 text-xs tracking-wider font-medium text-white/60 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-xs peer-focus:text-white"
                    >
                      MESSAGE
                    </label>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                    <span className="absolute top-6 right-2 text-white/60">
                      *
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {state.succeeded && (
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-green-400 text-sm"
                      >
                        Thank you! We'll be in touch soon.
                      </motion.p>
                    )}
                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      className="ml-auto group flex items-center justify-center bg-white/10 hover:bg-white/30 text-white rounded-full"
                    >
                      <AnimatedSubscribeButton className="bg-transparent">
                        <span>Send</span>
                        <span>Sent</span>
                      </AnimatedSubscribeButton>
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
