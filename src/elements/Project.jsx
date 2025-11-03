/* eslint-disable no-unused-vars */
import { ButtonWithIcon } from "@/css/Props/Button";
import { IconGitBranch } from "@tabler/icons-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/me.png";

export default function Project() {
  return (
    <section className="w-full bg-linear-to-b from-black to-[#181C14] flex flex-col justify-start items-start py-10 md:py-32 md:px-9 px-6">
      <div className="flex flex-col md:flex-row justify-between w-full items-center md:items-start gap-10">
        
        <div className="max-w-5xl txt-color">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-extrabold inline-block relative"
          >
            🚀{" "}
            <span className="relative inline-block px-3">
              <span className="relative z-10">Highlighted Projects</span>
              <span className="absolute inset-0 -skew-y-3 bg-[#FE7743]/40 rounded-md z-0"></span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 text-sm md:text-2xl max-w-2xl mx-auto py-2 md:py-6"
          >
            I've worked on variety projects, ranging from small to full-scale applications, also developed a wide array of features and functionalities in projects. 👀
          </motion.p>

          <div className="w-full flex py-3 justify-center md:justify-start">
            <ButtonWithIcon
              icon={IconGitBranch}
              text="Open my Github"
              link="https://github.com/tyoprataama"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={profileImg}
            alt="Profile"
            className="w-72 h-72"
          />
        </div>

      </div>
    </section>
  );
}
