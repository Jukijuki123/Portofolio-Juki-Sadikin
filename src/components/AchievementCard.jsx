import { FaEye } from "react-icons/fa";

export default function AchievementCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        min-w-[280px]
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-soft
        border border-gray-100
        cursor-pointer
        group
        hover:shadow-xl
        transition
      "
    >
      {/* IMAGE WRAPPER */}
      <div className="relative overflow-hidden">

        <img
          src={item.image}
          alt={item.title}
          className="
            w-full h-40 object-cover
            transition duration-500
            group-hover:scale-105
          "
        />

        {/* OVERLAY ONLY ON IMAGE */}
        <div
          className="
            absolute inset-0
            bg-white/20
            flex items-center justify-center
            opacity-0
            group-hover:opacity-100
            transition
          "
        >
          <div
            className="
              flex items-center gap-2
              bg-primary text-white
              px-4 py-2 rounded-2xl
              text-sm font-medium
              shadow-soft
              hover:scale-105 transition
            "
          >
            <FaEye />
            Lihat
          </div>
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="font-semibold text-sm">
          {item.title}
        </h3>

        <p className="text-gray-500 text-xs mt-1">
          {item.issuer}
        </p>
      </div>
    </div>
  );
}