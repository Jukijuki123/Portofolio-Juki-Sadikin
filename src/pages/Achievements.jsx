import { achievements } from "../data/achievements";
import AchievementCard from "../components/AchievementCard";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Achievements() {
  const { t } = useTranslation();

  // duplicate untuk infinity loop
  const loopData = [...achievements, ...achievements];

  return (
    <section
      id="achievements"
      className="py-28 bg-soft overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-semibold mb-12 text-center">
          {t("achievement.title")}
        </h2>

        {/* SLIDER */}
        <div className="relative">

          <motion.div
            className="flex gap-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {loopData.map((item, index) => (
              <AchievementCard key={index} item={item} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}