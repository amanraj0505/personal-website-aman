import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pb-10 pt-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="space-y-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap gap-6 rounded-2xl border border-slate-800/80 bg-black/35 px-4 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] lg:items-center lg:px-6"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="flex w-full items-center justify-center sm:w-4/12 lg:w-1/4"
            >
              <img
                src={project.image}
                width={320}
                height={220}
                alt={project.title}
                className="h-auto max-h-[140px] w-auto max-w-full rounded-2xl object-contain"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full flex-1 lg:w-2/3"
            >
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-300/90 md:text-base">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
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

export default Projects;
