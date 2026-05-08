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
      bg-soft
      border-b border-gray-200
    "
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <motion.a
          href="#home"
          className="relative group block"
          // Animasi Framer Motion untuk 'Heining Pulse'
          animate={{
            // Mengubah kekuatan shadow/glow
            filter: [
              "drop-shadow(0 0 2px rgba(20, 184, 166, 0.3))", // Redup awal
              "drop-shadow(0 0 8px rgba(20, 184, 166, 0.8))", // Terang puncak
              "drop-shadow(0 0 2px rgba(20, 184, 166, 0.3))"  // Redup akhir
            ],
          }}
          transition={{
            duration: 3,        // Waktu satu siklus (3 detik)
            ease: "easeInOut",  // Halus saat transisi
            repeat: Infinity,   // Terus menerus
          }}
        >
          {/* Teks Logo */}
          <span className="text-2xl md:text-3xl font-bold text-primary font-mono tracking-tighter">
            &lt;JS /&gt;
          </span>

          {/* Efek Hover Garis Bawah (Opsional, Tambahan UX) */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </motion.a>

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
              backdrop-blur-md
              bg-white/60
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
