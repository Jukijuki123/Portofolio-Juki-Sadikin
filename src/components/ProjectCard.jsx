import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-soft
        transition
        border
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.name}
          className="
            w-full h-52 object-cover
            transition duration-500
            group-hover:scale-110
          "
        />

        {/* OVERLAY BUTTONS */}
        <div
          className="
          absolute inset-0
          bg-black/40
          flex items-center justify-center gap-4
          opacity-0
          group-hover:opacity-100
          transition
        "
        >
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              bg-white text-black
              px-4 py-2 rounded-lg
              text-sm font-medium
              hover:scale-105 transition
            "
          >
            <FaExternalLinkAlt />
            Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-2
              bg-black text-white
              px-4 py-2 rounded-lg
              text-sm font-medium
              hover:scale-105 transition
            "
          >
            <FaGithub />
            Github
          </a>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h3 className="text-lg font-semibold">
          {project.name}
        </h3>

        <p className="text-sm text-gray-600 mt-2">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                text-xs
                px-3 py-1
                bg-gray-200
                rounded-full
              "
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}