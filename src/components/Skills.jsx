import { skillsData } from "../data/skills";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
const { t } = useTranslation();
const [skillTab, setSkillTab] = useState("languages");

return (
<div className="w-full">
<h3 className="text-xl md:text-2xl font-space font-bold mb-6 text-primary">
{t("about.skillsTitle")}
</h3>

  <div className="flex flex-wrap bg-white rounded-xl p-1 shadow-sm w-full md:w-fit mb-8 gap-1">
    {["languages", "frameworks", "tools"].map((tab) => (
      <button
        key={tab}
        onClick={() => setSkillTab(tab)}
        className={`flex-1 md:flex-none px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
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
      {skillsData[skillTab].map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all duration-300 group w-full"
          >
            <Icon className="text-3xl text-gray-400 group-hover:text-primary transition-colors duration-300 shrink-0" />
            <span className="text-xs md:text-sm font-medium text-gray-700 text-center break-words">
              {skill.name}
            </span>
          </div>
        );
      })}
    </motion.div>
  </AnimatePresence>
</div>
);
}