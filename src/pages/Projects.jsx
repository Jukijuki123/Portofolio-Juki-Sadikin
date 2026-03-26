import { useState, useEffect, useMemo } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";

export default function Projects() {
const { t, i18n } = useTranslation();
const lang = i18n.language.startsWith("id") ? "id" : "en";
const [search, setSearch] = useState("");
const [debouncedSearch, setDebouncedSearch] = useState("");
const [category, setCategory] = useState("All");

useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

const categories = useMemo(() => {
    const cats = projects.map((p) => p.category);
    return ["All", ...new Set(cats)];
  }, []);

const filtered = projects.filter((p) => {
  const matchSearch = p.name[lang].toLowerCase().includes(debouncedSearch.toLowerCase());
  const matchCategory = category === "All" || p.category === category;
  return matchSearch && matchCategory;
});

return (
<section id="projects" className="py-28 bg-soft">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-4xl font-semibold text-primary mb-8">Projects</h2>

    <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">
      <div className="relative w-full md:w-80">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Cari proyek..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              category === cat
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>

    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence>
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </AnimatePresence>
    </motion.div>

    {filtered.length === 0 && (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="flex flex-col items-center justify-center py-20 text-gray-500"
      >
        <FaSearch size={48} className="mb-4 text-gray-300" />
        <p className="text-lg">Proyek tidak ditemukan.</p>
      </motion.div>
    )}
  </div>
</section>
);
}