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

  const sendWhatsApp = () => {
    if (!form.name || !form.message) {
      alert("Harap isi nama dan pesan.");
      return;
    }

    const text = `
Halo, saya ${form.name}

Email: ${form.email}

Pesan:
${form.message}
`;

    const url =
      `https://wa.me/${phoneNumber}?text=` +
      encodeURIComponent(text);

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-28 bg-soft"
    >
      <div className="max-w-xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold mb-10 text-center"
        >
          {t("contact.title")}
        </motion.h2>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
            bg-white
            shadow-soft
            rounded-3xl
            p-8
            space-y-4
          "
        >
          <input
            name="name"
            placeholder={t("contact.name")}
            onChange={handleChange}
            className="
              w-full
              border
              rounded-xl
              p-3
              focus:outline-none
              focus:ring-2
              focus:ring-black/20
            "
          />

          <input
            name="email"
            placeholder={t("contact.email")}
            onChange={handleChange}
            className="
              w-full
              border
              rounded-xl
              p-3
              focus:outline-none
              focus:ring-2
              focus:ring-black/20
            "
          />

          <textarea
            name="message"
            rows="4"
            placeholder={t("contact.message")}
            onChange={handleChange}
            className="
              w-full
              border
              rounded-xl
              p-3
              focus:outline-none
              focus:ring-2
              focus:ring-black/20
            "
          />

          {/* SEND BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            onClick={sendWhatsApp}
            className="
              w-full
              flex items-center justify-center gap-2
              bg-black text-white
              py-3
              rounded-xl
              font-medium
              shadow-soft
            "
          >
            <FaWhatsapp />
            {t("contact.send")}
          </motion.button>
        </motion.div>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6 mt-10 text-2xl text-gray-600">
          <a
            href="https://github.com/username"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </section>
  );
}