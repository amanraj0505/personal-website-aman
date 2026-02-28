import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="pb-10 pt-6">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl"
      >
        Experience
      </motion.h2>
      <div className="space-y-7">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="flex flex-wrap gap-6 rounded-2xl border border-slate-800/80 bg-black/35 px-4 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] lg:items-start lg:px-6"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-4/12 lg:w-1/4"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full flex-1 lg:w-3/4"
            >
              <h3 className="mb-2 text-base font-semibold tracking-tight text-slate-50 md:text-lg">
                {experience.role} -{" "}
                <span className="text-xs font-normal uppercase tracking-[0.2em] text-slate-400">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-300/90 md:text-base">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 inline-flex items-center rounded-full border border-slate-700/80 bg-slate-950/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
