import { FaEye } from "react-icons/fa";

export default function AchievementCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="min-w-[280px] md:min-w-[320px] snap-center bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer group hover:shadow-soft transition"
    >
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-40 md:h-48 object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition">
            <FaEye />
            Lihat
          </div>
        </div>
      </div>

      <div className="p-4 md:p-5">
        <h3 className="font-semibold text-sm md:text-base line-clamp-2">
          {item.title}
        </h3>
        <p className="text-gray-500 text-xs md:text-sm mt-1">
          {item.issuer}
        </p>
      </div>
    </div>
  );
}