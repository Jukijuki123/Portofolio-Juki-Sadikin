import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ project }) {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("id") ? "id" : "en";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name[lang]}
          className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="bg-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
          >
            <FaExternalLinkAlt /> Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
          >
            <FaGithub /> Github
          </a>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">
          {project.name[lang]}
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          {project.description[lang]}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs px-3 py-1 bg-gray-100 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}