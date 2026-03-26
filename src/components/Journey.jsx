import { workData, educationData } from "../data/journey";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Journey() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("work");

  const lang = i18n.language.startsWith("id") ? "id" : "en";

  const data = activeTab === "work" ? workData : educationData;

  return (
    <div className="mb-20">

      <h3 className="text-2xl font-semibold mb-6 text-primary">
        {t("about.journeyTitle")}
      </h3>

      {/* SWITCH */}
      <div className="flex bg-white rounded-full p-1 w-fit mb-8">
        {["work", "education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeTab === tab
                ? "bg-primary text-white"
                : "text-gray-700"
            }`}
          >
            {t(`about.${tab}`)}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {data.map((item, index) => (
          <div
            key={index}
            className="bg-transparent rounded-2xl p-6 border border-primary"
          >
            <h4 className="font-semibold text-lg">
              {(item.company || item.school)[lang]}
            </h4>

            <p className="text-sm text-gray-500">
              {(item.location || item.major)[lang]}
            </p>

            <span className="text-sm text-primary">
              {item.year}
            </span>

            {item.role && (
              <p className="mt-2 font-medium">
                {item.role[lang]}
              </p>
            )}

            {item.points && (
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                {item.points.map((p, i) => (
                  <li key={i}>• {p[lang]}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}