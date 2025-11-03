/* eslint-disable no-unused-vars */
import ComingSoonCard from "@/css/Props/ComingSoon";
import { motion } from "framer-motion";

export default function Writings() {
  return (
    <section className="relative w-full bg-linear-to-b from-[#0f3543] to-black grid justify-center items-start py-10 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl text-center justify-center mb-8 md:mb-12">
        <motion.h2
          className="text-2xl md:text-5xl font-extrabold text-white inline-block relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ✍️{" "}
          <span className="relative inline-block px-3">
            <span className="relative z-10">Latest Writings</span>
            <span className="absolute inset-0 -skew-y-3 bg-[#B9E3C6]/40 rounded-md z-0"></span>
          </span>
        </motion.h2>

        <motion.p
          className="py-3 text-white/70 text-sm md:text-2xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          I love writings my experience, tips and resources related to anything not only about web development.
        </motion.p>

        <motion.span
          className="block text-sm md:text-2xl max-w-2xl mx-auto text-transparent underline decoration-wavy decoration-3 md:decoration-1 decoration-[#B9E3C6] py-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          ---------------
        </motion.span>

        <div className="flex justify-center w-full py-3">
          <ComingSoonCard
            title="Blog Writing"
            subtitle="Articles & essays"
            note="I share somes of my thoughts about anything in my blog ~coming soon👀"
          />
        </div>
      </div>
    </section>
  );
}
