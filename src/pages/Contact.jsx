import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phoneNumber = "6285707393495";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const text = `Halo, saya ${form.name}\n\nEmail: ${form.email}\n\nPesan:\n${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=` + encodeURIComponent(text);

    window.open(url, "_blank");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl grotesk font-semibold mb-10 text-primary text-center"
        >
          {t("contact.title")}
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={sendWhatsApp}
          className="bg-white shadow-soft rounded-3xl p-8 space-y-4"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            required
            placeholder={t("contact.name")}
            onChange={handleChange}
            aria-label="Nama Lengkap"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            required
            placeholder={t("contact.email")}
            onChange={handleChange}
            aria-label="Alamat Email"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />

          <textarea
            name="message"
            value={form.message}
            required
            rows="4"
            placeholder={t("contact.message")}
            onChange={handleChange}
            aria-label="Pesan"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="w-full flex items-center justify-center gap-2 border border-primary bg-primary hover:bg-white hover:text-primary text-white py-3 rounded-xl font-medium shadow-soft transition"
          >
            <FaWhatsapp size={20} />
            {t("contact.send")}
          </motion.button>
        </motion.form>

        <div className="flex justify-center gap-6 mt-10 text-2xl text-primary/60">
          <a
            href="https://github.com/jukijuki123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub"
            className="hover:text-black hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/juki-sadikin-54b415345"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn"
            className="hover:text-[#0a66c2] hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </section>
  );
}