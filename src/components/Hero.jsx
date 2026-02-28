import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/aman_avatar.jpg";
import resume from "../assets/resume_amanraj.pdf";
import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const [isHoveringResume, setIsHoveringResume] = useState(false);

  return (
    <section className="pb-12 pt-4 lg:mb-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={childVariants}
            className="pb-2 text-4xl tracking-tight text-slate-50 md:text-5xl lg:text-6xl"
          >
            Aman Raj
          </motion.h2>
          <motion.span
            variants={childVariants}
            className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-xs font-semibold uppercase tracking-[0.3em] text-transparent md:text-sm"
          >
            Software Engineer II
          </motion.span>
          <motion.p
            variants={childVariants}
            className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300/90 md:text-base"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            variants={childVariants}
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 55px rgba(15,23,42,0.95)",
              backgroundColor: "#f9fafb",
              borderColor: "#bfdbfe",
            }}
            whileTap={{
              scale: 0.96,
              y: 1,
              boxShadow: "0 10px 30px rgba(15,23,42,0.85)",
              backgroundColor: "#e5e7eb",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            onHoverStart={() => setIsHoveringResume(true)}
            onHoverEnd={() => setIsHoveringResume(false)}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="relative mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-slate-400/80 bg-slate-100 px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-900"
          >
            <span className="relative z-10">Download Resume</span>
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
              animate={
                isHoveringResume
                  ? { x: ["-120%", "120%"], opacity: [0, 1, 0] }
                  : { x: "-120%", opacity: 0 }
              }
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          </motion.a>
        </motion.div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative inline-flex rounded-[2rem] border border-slate-800/80 bg-gradient-to-b from-slate-900/70 to-slate-950/95 p-2 shadow-[0_22px_60px_rgba(15,23,42,0.95)]"
          >
            <motion.img
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              width={420}
              height={420}
              src={profilePic}
              alt="Aman Raj"
              className="max-h-[420px] w-auto rounded-[1.7rem]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
