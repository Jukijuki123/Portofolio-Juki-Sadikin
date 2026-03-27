import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function ProjectCard({ project }) {
const { i18n } = useTranslation();
const lang = i18n.language.startsWith("id") ? "id" : "en";
const [showPopup, setShowPopup] = useState(false);

const popupText = {
  id: "Maaf, tautan ini belum tersedia. Proyek ini bersifat privat atau sedang dalam tahap pembaruan. Terima kasih atas pengertian Anda.",
  en: "Sorry, this link is currently unavailable. This project is private or undergoing updates. Thank you for your understanding."
};

const handleLinkClick = (e, url) => {
  if (url === "#") {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  }
};

return (
  <motion.div
  layout
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.3 }}
  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-xl transition flex flex-col relative"
  >
  <div className="relative overflow-hidden h-52 bg-gray-100">

  <img
    src={project.image}
    alt={project.name[lang]}
    loading="lazy"
    className="w-full h-full object-cover transition duration-500 hover:scale-105"
  />
  
  </div>

    <div className="p-6 flex flex-col grow relative">
      <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
        {project.name[lang]}
      </h3>

      <p className="text-sm text-gray-500 mt-2 line-clamp-2 grow">
        {project.description[lang]}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.slice(0, 3).map((tech) => (
          <span key={tech} className="text-xs px-4 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
            {tech}
          </span>
        ))}
        
        {project.tech.length > 3 ? (
          <span className="text-xs px-3 py-1 bg-gray-50 text-gray-500 border border-gray-200 rounded-full font-medium">
            +{project.tech.length - 3}
          </span>
        ) : null}
      </div>

      <div className="flex gap-3 mt-6">
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buka demo proyek"
            onClick={(e) => handleLinkClick(e, project.demo)}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded-xl text-sm font-medium hover:bg-opacity-90 transition"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        ) : null}

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buka kode sumber di GitHub"
            onClick={(e) => handleLinkClick(e, project.github)}
            className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition"
          >
            <FaGithub /> GitHub
          </a>
        ) : null}
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-20 left-4 right-4 bg-gray-800 text-white text-xs p-4 rounded-xl shadow-xl z-10 text-center leading-relaxed"
          >
            {popupText[lang]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);
}