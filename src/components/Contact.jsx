import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="border-t border-slate-800/80 pb-14 pt-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="mx-auto max-w-md text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-3 text-sm text-slate-300/90 md:text-base"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-3 text-sm text-slate-300/90 md:text-base"
        >
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="border-b border-dotted border-slate-600 pb-[1px] text-slate-100 transition hover:border-slate-300"
          >
            {CONTACT.phoneNo}
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mt-1 text-sm text-slate-300/90 md:text-base"
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b border-dotted border-slate-600 pb-[1px] text-slate-100 transition hover:border-slate-300"
          >
            {CONTACT.email}
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
