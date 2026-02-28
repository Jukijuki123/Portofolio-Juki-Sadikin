import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const currentLang = i18n.language;

  return (
    <div className="relative flex items-center bg-gray-100 rounded-full p-1 w-24">

      {/* SLIDING BACKGROUND */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="absolute top-1 bottom-1 w-1/2 bg-black rounded-full"
        style={{
          left: currentLang === "id" ? "4px" : "50%",
        }}
      />

      {/* ID BUTTON */}
      <button
        onClick={() => changeLang("id")}
        className={`z-10 w-1/2 text-sm font-medium transition ${
          currentLang === "id"
            ? "text-white"
            : "text-gray-600"
        }`}
      >
        ID
      </button>

      {/* EN BUTTON */}
      <button
        onClick={() => changeLang("en")}
        className={`z-10 w-1/2 text-sm font-medium transition ${
          currentLang === "en"
            ? "text-white"
            : "text-gray-600"
        }`}
      >
        EN
      </button>
    </div>
  );
}