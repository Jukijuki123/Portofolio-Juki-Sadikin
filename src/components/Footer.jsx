import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Juki Sadikin. All rights reserved.
        </div>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#home" className="hover:text-primary transition">{t("nav.home")}</a>
          <a href="#projects" className="hover:text-primary transition">{t("nav.projects")}</a>
          <a href="#contact" className="hover:text-primary transition">{t("nav.contact")}</a>
        </div>
      </div>
    </footer>
  );
}
