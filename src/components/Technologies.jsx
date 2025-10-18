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
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=""
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <IoLogoJavascript className="text-7xl" color="yellow" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiTypescript className="text-6xl" color="#3178c6" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <TbBrandRedux className="text-7xl" color="#764abc" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FcAndroidOs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <IoLogoFirebase className="text-7xl" color="#ffa000" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
