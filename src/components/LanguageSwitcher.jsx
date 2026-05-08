import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { IoLanguage } from "react-icons/io5";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const langString = i18n.language || "en";
  const currentLang = langString.startsWith("id") ? "id" : "en";

  const idClass = currentLang === "id" ? "text-white" : "text-gray-500 hover:text-gray-800";
  const enClass = currentLang === "en" ? "text-white" : "text-gray-500 hover:text-gray-800";

  return (
    <div className="flex items-center gap-2" title="Ganti Bahasa">
      <IoLanguage className="text-gray-500 text-xl" />
      <div className="relative flex items-center bg-gray-100 rounded-full p-1 w-24 shadow-inner border border-gray-200">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute top-1 bottom-1 w-11 bg-primary rounded-full shadow-sm"
          style={{
            left: currentLang === "id" ? "4px" : "48px",
          }}
        />

        <button
          onClick={() => changeLang("id")}
          className={"z-10 w-1/2 text-xs font-bold py-1 transition-colors " + idClass}
        >
          ID
        </button>

        <button
          onClick={() => changeLang("en")}
          className={"z-10 w-1/2 text-xs font-bold py-1 transition-colors " + enClass}
        >
          EN
        </button>
      </div>
    </div>
  );
}