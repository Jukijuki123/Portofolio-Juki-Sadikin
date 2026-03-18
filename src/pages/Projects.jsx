import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(t);
  }, [search]);

  const filtered = projects.filter((p) => {
    return (
      p.name.en.toLowerCase().includes(debouncedSearch.toLowerCase()) &&
      (category === "All" || p.category === category)
    );
  });


  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-semibold mb-8">Projects</h2>

        {/* FILTER */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <input
            placeholder="Search project..."
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-xl shadow-soft w-full md:w-80"
          />

          <div className="flex gap-2">
            {["All", "Web", "Game"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm ${
                  category === cat
                    ? "bg-black text-white"
                    : "bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            Project tidak ditemukan
          </p>
        )}
      </div>
    </section>
  );
}