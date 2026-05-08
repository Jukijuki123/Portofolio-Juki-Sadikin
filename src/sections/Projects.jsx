import { useState, useEffect, useMemo, useRef } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaSearch, FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || "id").startsWith("id") ? "id" : "en";
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, category]);

  const categories = useMemo(() => {
    const cats = projects.map((p) => p.category);
    return ["All", ...new Set(cats)];
  }, []);

  const filtered = projects.filter((p) => {
    const matchSearch = p.name[lang].toLowerCase().includes(debouncedSearch.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedProjects = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="w-full md:max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-grotesk font-semibold text-primary mb-8 ">Projects</h2>

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

          <div className="relative w-full md:w-56 shrink-0" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between pl-4 pr-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-700 transition shadow-sm"
            >
              <span className="truncate">{category}</span>
              <FaChevronDown className={`text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="max-h-60 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setCategory(cat);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition ${category === cat
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-gray-700 hover:bg-gray-50"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-full"
            >
              {paginatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-soft"
              aria-label="Halaman Sebelumnya"
            >
              <FaChevronLeft />
            </button>

            <span className="text-gray-600 font-medium">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-soft"
              aria-label="Halaman Selanjutnya"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

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