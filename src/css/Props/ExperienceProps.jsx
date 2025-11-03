/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function ExperienceProps({
  logo,
  company,
  username,
  roles = [],
  color = "blue",
}) {
  const colors = {
    blue: {
      bg: "bg-blue-400/10",
      border: "border-blue-300/20",
      text: "text-blue-100",
      subtext: "text-blue-200",
    },
    orange: {
      bg: "bg-orange-400/10",
      border: "border-orange-300/20",
      text: "text-orange-100",
      subtext: "text-orange-200",
    },
    green: {
      bg: "bg-[#B9E3C6]/10",
      border: "border-green-300/20",
      text: "text-green-100",
      subtext: "text-green-200",
    },
    purple: {
      bg: "bg-purple-400/10",
      border: "border-purple-300/20",
      text: "text-purple-100",
      subtext: "text-purple-200",
    },
  };

  const c = colors[color] || colors.blue;

  return (
    <div
      className={`w-full max-w-3xl mx-auto my-6 p-6 rounded-2xl backdrop-blur-md shadow-lg ${c.bg} ${c.border}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            src={logo}
            alt={company}
            className={`w-14 h-14 rounded-4xl object-cover border ${c.border}`}
          />
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-xl font-semibold ${c.text}`}
            >
              {company}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-sm ${c.subtext}`}
            >
              @{username}
            </motion.p>
          </div>
        </div>

        <div className="space-y-5 py-4">
          {roles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <div
                  className={`px-4 py-2 rounded-xl shadow-inner font-medium backdrop-blur-lg border ${c.border} ${c.text} ${c.bg}`}
                >
                  {item.title}
                </div>
                <p className={`text-sm font-medium ${c.subtext}`}>{item.date}</p>
              </div>

              {Array.isArray(item.description) ? (
                <ul
                  className={`mt-3 list-disc list-inside space-y-1 px-5 ${c.text}`}
                >
                  {item.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.1 * (i + 1),
                        duration: 0.5,
                      }}
                      viewport={{ once: true }}
                      className="text-sm md:text-base leading-relaxed"
                    >
                      {desc}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`mt-2 ${c.text} text-sm md:text-base leading-relaxed py-3`}
                >
                  {item.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
