import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { FcAndroidOs } from "react-icons/fc";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section className="pb-20 pt-6">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mb-10 text-center text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/70 shadow-[0_10px_35px_rgba(15,23,42,0.9)]"
        >
          <RiReactjsLine className="text-5xl text-cyan-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/70"
        >
          <IoLogoJavascript className="text-5xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/70"
        >
          <SiTypescript className="text-4xl text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/70"
        >
          <TbBrandRedux className="text-5xl text-violet-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/70"
        >
          <FcAndroidOs className="text-5xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/70"
        >
          <IoLogoFirebase className="text-5xl text-amber-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;
