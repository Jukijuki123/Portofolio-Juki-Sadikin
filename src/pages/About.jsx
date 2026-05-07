import { useTranslation } from "react-i18next";
import Journey from "../components/Journey";
import Skills from "../components/Skills";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="w-full md:max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-grotesk font-semibold mb-6 text-primary">
          {t("about.title")}
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-3xl text-gray-600 mb-10">
          {t("about.description")}
        </p>

        {/* JOURNEY */}
        <Journey />

        {/* SKILLS */}
        <Skills />

      </div>
    </section>
  );
}  