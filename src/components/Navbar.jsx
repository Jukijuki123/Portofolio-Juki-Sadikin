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

    setOpen(false); // auto close mobile menu
  };

  const navItem =
    "text-base font-medium text-gray-600 hover:text-primary transition";

  return (
    <nav
      className="
      fixed w-full z-50
      backdrop-blur-md
      bg-white/60
      border-b border-gray-200
    "
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <h1 className="font-bold text-2xl text-primary tracking-tight">
          JS
        </h1>

        {/* DESKTOP NAV */}
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

        {/* MOBILE RIGHT SIDE */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />

          <button onClick={() => setOpen(!open)}>
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              bg-white
              border-t
              border-gray-200
            "
          >
            <div className="flex flex-col items-center gap-6 py-6">

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
