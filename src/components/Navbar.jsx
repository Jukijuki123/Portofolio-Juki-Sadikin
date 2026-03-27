// Navbar.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };

  const navItem = "text-base font-medium text-gray-600 hover:text-primary transition";

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/60 border-b border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <motion.a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="relative group block"
          animate={{
            filter: [
              "drop-shadow(0 0 2px rgba(20, 184, 166, 0.3))",
              "drop-shadow(0 0 8px rgba(20, 184, 166, 0.8))",
              "drop-shadow(0 0 2px rgba(20, 184, 166, 0.3))"
            ],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <span className="font-space text-2xl md:text-3xl font-bold text-primary tracking-tighter">
            &lt;JS /&gt;
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          <button className={navItem} onClick={() => scrollTo("home")}>
            {t("nav.home")}
          </button>
          <button className={navItem} onClick={() => scrollTo("about")}>
            {t("nav.about")}
          </button>
          <button className={navItem} onClick={() => scrollTo("projects")}>
            {t("nav.projects")}
          </button>
          <button className={navItem} onClick={() => scrollTo("contact")}>
            {t("nav.contact")}
          </button>
          <LanguageSwitcher />
        </div>

        {/* PERBAIKAN: Jarak antar elemen Navbar mobile diperlebar */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button onClick={() => setOpen(!open)} className="text-gray-800">
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            {/* PERBAIKAN: Jarak padding horizontal Navbar mobile */}
            <div className="flex flex-col items-center gap-6 py-6 px-6">
              <button className={navItem} onClick={() => scrollTo("home")}>
                {t("nav.home")}
              </button>
              <button className={navItem} onClick={() => scrollTo("about")}>
                {t("nav.about")}
              </button>
              <button className={navItem} onClick={() => scrollTo("projects")}>
                {t("nav.projects")}
              </button>
              <button className={navItem} onClick={() => scrollTo("contact")}>
                {t("nav.contact")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}