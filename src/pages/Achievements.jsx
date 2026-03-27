import { useRef, useState } from "react";
import { achievements } from "../data/achievements";
import AchievementCard from "../components/AchievementCard";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Achievements() {
const { t } = useTranslation();
const [selected, setSelected] = useState(null);
const sliderRef = useRef(null);

const slide = (offset) => {
  if (sliderRef.current) {
    sliderRef.current.scrollBy({ left: offset, behavior: "smooth" });
  }
};

const handleScroll = () => {
  if (sliderRef.current) {
    const scrollLeft = sliderRef.current.scrollLeft;
    const scrollWidth = sliderRef.current.scrollWidth;
    const totalItems = achievements.length;
    const itemWidth = scrollWidth / totalItems;
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(newIndex);
}
};

return (
<section id="achievements" className="py-20 md:py-28 overflow-hidden">
<div className="max-w-6xl mx-auto px-6">

    <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-4">
      <h2 className="text-3xl md:text-4xl font-grotesk font-semibold text-primary text-center md:text-left">
        {t("achievement.title")}
      </h2>

      <div className="flex gap-3">
        <button
          onClick={() => slide(-320)}
          className="p-3 bg-primary rounded-full hover:bg-primary/60 transition text-soft"
          aria-label="Geser ke kiri"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={() => slide(320)}
          className="p-3 bg-primary rounded-full hover:bg-primary/60 transition text-soft"
          aria-label="Geser ke kanan"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>

    <div
      ref={sliderRef}
      onScroll={handleScroll}
      className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {achievements.map((item, index) => (
        <AchievementCard
          key={item.id || index}
          item={item}
          onClick={() => setSelected(item)}
        />
      ))}
    </div>


    <AnimatePresence>
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-3xl w-full relative flex flex-col items-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition text-gray-800"
              onClick={() => setSelected(null)}
              aria-label="Tutup modal"
            >
              <FiX size={20} />
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[70vh] object-contain rounded-xl"
            />

            <h3 className="mt-4 font-semibold text-lg md:text-xl text-center">
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