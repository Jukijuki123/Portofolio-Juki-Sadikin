export default function AchievementCard({ item }) {
  return (
    <div
      className="
      min-w-70
      bg-white
      rounded-2xl
      shadow-soft
      overflow-hidden
      hover:-translate-y-2
      hover:shadow-xl
      transition
    "
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover"
      />

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