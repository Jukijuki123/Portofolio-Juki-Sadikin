import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import {
  SiJavascript,
  SiPhp,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

export default function About() {
  const { t } = useTranslation();

  const education = t("about.education", {
    returnObjects: true,
  });

  const skills = [
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
  ];

  return (
    <section
      id="about"
      className="py-28 bg-soft"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold mb-10"
        >
          {t("about.title")}
        </motion.h2>

        {/* BIO */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl text-gray-600 leading-relaxed mb-16"
        >
          {t("about.description")}
        </motion.p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              {t("about.educationTitle")}
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-soft"
                >
                  <h4 className="font-semibold">
                    {edu.school}
                  </h4>

                  <p className="text-gray-600">
                    {edu.major}
                  </p>

                  <span className="text-sm text-gray-400">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              {t("about.skillsTitle")}
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center
                  bg-white rounded-2xl shadow-soft p-6
                  hover:scale-105 transition"
                >
                  <div className="text-4xl mb-2">
                    {skill.icon}
                  </div>

                  <span className="text-sm text-gray-600">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}