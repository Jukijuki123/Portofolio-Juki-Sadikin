import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filtered = projects.filter((p) => {
        return (
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || p.category === category)
        );
    });

    return (
        <section id="projects" className="min-h-screen">
            <section className="max-w-6xl mx-auto p-6">

                <input
                    placeholder="Search project..."
                    className="border p-2 rounded"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex gap-2 my-4">
                    {["All", "Web"].map((cat) => (
                    <button key={cat} onClick={() => setCategory(cat)}>
                        {cat}
                    </button>
                    ))}
                </div>

                <motion.div layout className="grid md:grid-cols-3 gap-6">
                    {filtered.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </section>

        </section>
    );
}