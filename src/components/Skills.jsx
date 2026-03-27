import { skillsData } from "../data/skills";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
const { t } = useTranslation();
const [skillTab, setSkillTab] = useState("techStack");

return (
<div className="w-full">
<h3 className="text-xl md:text-2xl font-space font-bold mb-6 text-primary">
{t("about.skillsTitle")}
</h3>

  <div className="flex flex-wrap bg-white rounded-xl p-1 shadow-sm w-full md:w-fit mb-8 gap-1">
    {["techStack", "tools"].map((tab) => (
      <button
        key={tab}
        onClick={() => setSkillTab(tab)}
        className={`flex-1 md:flex-none px-3 py-2 rounded-lg text-xs md:text-sm font-medium cursor-pointer transition-all duration-300 ${
          skillTab === tab
            ? "bg-primary text-white shadow-md"
            : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        {t(`about.${tab}`)}
      </button>
    ))}
  </div>

  <AnimatePresence mode="wait">
    <motion.div
      key={skillTab}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 w-full"
    >
      {skillsData[skillTab].map((skill) => (
        <div
          key={skill.name}
          className="flex flex-row items-center gap-3 bg-transparent rounded-xl p-4 border-2 border-gray-300 hover:border-primary transition-all duration-300 group w-full"
        >
          <div className="w-2 h-2 rounded-full bg-gray-800 group-hover:bg-primary shrink-0"></div>
          <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-primary wrap-break-word">
            {skill.name}
          </span>
        </div>
      ))}
    </motion.div>
  </AnimatePresence>
</div>
);
}