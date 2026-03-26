import { skillsData } from "../data/skills";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const [skillTab, setSkillTab] = useState("languages");

  return (
    <div>

      <h3 className="text-2xl font-semibold mb-6 text-primary">
        {t("about.skillsTitle")}
      </h3>

      {/* SWITCH */}
      <div className="flex bg-white rounded-full p-1 w-fit mb-8">
        {["languages", "frameworks", "tools"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSkillTab(tab)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              skillTab === tab
                ? "bg-primary text-white"
                : "text-gray-700"
            }`}
          >
            {t(`about.${tab}`)}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {skillsData[skillTab].map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="
                flex items-center gap-3
                bg-transparent rounded-xl p-4
                border border-primary
                hover:bg-white transition
              "
            >
              <Icon className="text-2xl text-primary" />
              <span className="text-gray-700">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}