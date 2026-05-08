import { workData, educationData } from "../data/journey";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Journey() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("work");

  const lang = (i18n.language || "id").startsWith("id") ? "id" : "en";
  const data = activeTab === "work" ? workData : educationData;

  return (
    <div className="w-full mb-6">
      <h3 className="text-xl md:text-2xl font-space font-bold mb-6 text-primary">
        {t("about.journeyTitle")}
      </h3>

      <div className="flex flex-wrap bg-white rounded-xl p-1 shadow-sm w-full md:w-fit mb-8 gap-1">
        {["work", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs md:text-sm font-medium cursor-pointer transition-all duration-300 ${activeTab === tab
                ? "bg-primary text-white shadow-md"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
          >
            {t(`about.${tab}`)}
          </button>
        ))}
      </div>

      <div className="w-full overflow-hidden pr-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {data.map((item, index) => (
              <div key={index} className="relative border-l-2 border-gray-200 pl-5 py-1 w-full ml-2">

                <div className="absolute -left-2.25 top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm shrink-0" />

                <h4 className="font-space font-bold text-base md:text-lg text-gray-900 wrap-break-word">
                  {activeTab === "work" ? item.company[lang] : item.school[lang]}
                </h4>

                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                  <span className="text-[10px] md:text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full shrink-0">
                    {item.year}
                  </span>
                  <span className="text-[10px] md:text-xs text-gray-500 flex items-center wrap-break-word">
                    {activeTab === "work" ? item.location[lang] : item.major[lang]}
                  </span>
                </div>

                {item.role && (
                  <p className="font-medium text-gray-800 text-xs md:text-sm mb-2 wrap-break-word">
                    {item.role[lang]}
                  </p>
                )}

                {item.points && (
                  <ul className="text-gray-600 space-y-1 text-xs md:text-sm leading-relaxed">
                    {item.points.map((p, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-primary mt-0.5 shrink-0">•</span>
                        <span className="wrap-break-word">{p[lang]}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}