import { achievements } from "../data/achievements";
import AchievementCard from "../components/AchievementCard";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function Achievements() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState(null);

  const loopData = [...achievements, ...achievements];

  return (
    <section id="achievements" className="py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-semibold mb-12 text-center text-primary">
          {t("achievement.title")}
        </h2>

        {/* SLIDER */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
            style={{
              animationPlayState: isHovered ? "paused" : "running",
            }}
          >
            {loopData.map((item, index) => (
              <AchievementCard
                key={index}
                item={item}
                onClick={() => setSelected(item)}
              />
            ))}
          </motion.div>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 max-w-3xl w-full relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-1 right-1"
                  onClick={() => setSelected(null)}
                >
                  <FiX size={24} />
                </button>

                <img
                  src={selected.image}
                  className="w-full rounded-xl"
                />

                <h3 className="mt-4 font-semibold">
                  {selected.title}
                </h3>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}