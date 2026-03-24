import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import profile1 from "../assets/images/1.svg";
import profile2 from "../assets/images/2.svg";

export default function Hero() {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            {t("hero.name")}
          </h1>

          <h2 className="text-xl text-gray-500 mt-2">
            {t("hero.role")}
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
            {t("hero.description")}
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 bg-primary text-white rounded-xl shadow-soft hover:scale-105 transition"
            >
              {t("hero.ctaProject")}
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 border border-primary rounded-xl hover:bg-teal-50 text-primary transition"
            >
              {t("hero.ctaContact")}
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* IMAGE 1 (DEFAULT) */}
            <img
              src={profile1}
              alt="profile"
              className="
                w-72 md:w-96 rounded-3xl object-cover
                group-hover:scale-105 transition duration-500
                group-hover:opacity-0
              "
            />

            {/* IMAGE 2 (HOVER) */}
            <img
              src={profile2}
              alt="profile hover"
              className="
                w-72 md:w-96 rounded-3xl object-cover
                absolute top-0 left-0
                opacity-0
                transition duration-500
                group-hover:scale-105
                group-hover:opacity-100
              "
            />

            {/* BACKGROUND */}
            <div className="absolute -z-10 w-full h-full bg-soft rounded-3xl top-6 left-6"></div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}