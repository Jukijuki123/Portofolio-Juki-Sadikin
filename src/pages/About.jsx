import { useTranslation } from "react-i18next";
import Journey from "../components/Journey";
import Skills from "../components/Skills";
import { motion } from "framer-motion";

export default function About() {
const { t } = useTranslation();

return (
<section id="about" className="py-20 md:py-28 bg-soft overflow-hidden w-full">
<div className="w-full max-w-4xl mx-auto px-4 md:px-6">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-space font-bold mb-4 md:mb-6 text-primary">
        {t("about.title")}
      </h2>
      <p className="text-gray-600 text-sm md:text-lg leading-relaxed break-words">
        {t("about.description")}
      </p>
    </motion.div>

    <div className="flex flex-col gap-16 md:gap-24 w-full">
      <div className="w-full min-w-0">
        <Journey />
      </div>
      <div className="w-full min-w-0">
        <Skills />
      </div>
    </div>

  </div>
</section>
);
}