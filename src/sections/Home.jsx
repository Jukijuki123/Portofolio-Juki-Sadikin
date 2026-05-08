import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
  const { t } = useTranslation();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig = {
    fullScreen: { enable: false },

    particles: {
      color: { value: "#30b3a1" },

      links: {
        color: "#30b3a1",
        distance: 150,
        enable: true,
        opacity: 1,
        width: 1,
      },

      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },

      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100,
      },

      opacity: {
        value: 0.3,
      },

      shape: {
        type: "circle",
      },

      size: {
        value: { min: 2, max: 4 },
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },

      modes: {
        repulse: {
          distance: 120,
          duration: 0.4,
        },
      },
    },

    detectRetina: true,
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 md:pt-32 pb-16 relative"
    >
      {init && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
          className="absolute inset-0 z-0"
        />
      )}
      <div className="w-full md:max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row gap-12 items-center justify-between relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-grotesk text-primary leading-tight">
            {t("hero.name")}
          </h1>

          <h2 className="text-xl text-gray-600 font-medium mt-2">
            {t("hero.role")}
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => scrollTo("projects")}
              aria-label="Lihat Proyek Saya"
              className="px-6 py-3 bg-primary text-white rounded-xl shadow-soft hover:scale-105 focus:ring-4 focus:ring-primary/30 outline-none transition"
            >
              {t("hero.ctaProject")}
            </button>

            <a
              href="/CV_jukisadikin.pdf"
              download="CV_jukisadikin.pdf"
              aria-label="Unduh CV"
              className="px-6 py-3 border border-primary rounded-xl hover:bg-teal-50 hover:scale-105  text-primary focus:ring-4 focus:ring-primary/30 outline-none transition inline-block text-center"
            >
              {t("hero.ctaResume")}
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <div className="relative group aspect-square w-72 md:w-96">

            <Image
              src="/assets/profil1.png"
              alt="Foto Profil"
              priority
              fetchPriority="high"
              decoding="async"
              width={384}
              height={384}
              className="w-full h-full rounded-3xl object-cover group-hover:scale-105 transition duration-500 group-hover:opacity-0"
            />

            <Image
              src="/assets/profil2.png"
              alt=""
              aria-hidden="true"
              width={384}
              height={384}
              loading="lazy"
              className="w-full h-full rounded-3xl object-cover absolute top-0 left-0 opacity-0 transition duration-500 group-hover:scale-[102%] group-hover:opacity-100"
            />

          </div>
        </div>

      </div>
    </section>
  );
}