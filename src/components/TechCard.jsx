// Badge name - color

const BADGE_COLORS = {
  Popular: "bg-sky-100 text-sky-700",
  Versatile: "bg-emerald-100 text-emerald-700",
  Fast: "bg-orange-100 text-orange-700",
  Standard: "bg-teal-100 text-teal-700",
  "Top SQL": "bg-blue-100 text-blue-700",
  Cache: "bg-rose-100 text-rose-700",
  Ubiquitous: "bg-amber-100 text-amber-700",
  Essential: "bg-indigo-100 text-indigo-700",
  Robust: "bg-lime-100 text-lime-700",
  Modern: "bg-cyan-100 text-cyan-700",
  Containers: "bg-blue-100 text-blue-700",
  Flexible: "bg-green-100 text-green-700",
  Efficient: "bg-purple-100 text-purple-700",
};

// Fallback colors
const FALLBACK_COLORS = [
  "bg-sky-100 text-sky-700",
  "bg-emerald-100 text-emerald-700",
  "bg-orange-100 text-orange-700",
  "bg-rose-100 text-rose-700",
  "bg-amber-100 text-amber-700",
  "bg-indigo-100 text-indigo-700",
];

function getBadgeColor(badge) {
  if (BADGE_COLORS[badge]) return BADGE_COLORS[badge];
  let hash = 0;
  for (let i = 0; i < badge.length; i++) hash += badge.charCodeAt(i);
  return FALLBACK_COLORS[hash % FALLBACK_COLORS.length];
}

export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <img
          src={icon}
          alt={name}
          className="w-9 h-9 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-50 text-slate-400">
          {badge}
        </span> */}
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getBadgeColor(badge)}`}>
          {badge}
        </span>
      </div>

      <h3 className="font-bold text-lg text-slate-900">{name}</h3>
      <p className="mt-2 text-sm text-slate-500 flex-1">{description}</p>

      <div className="mt-4 flex items-center gap-2 text-xs flex-wrap">
        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
          {category}
        </span>
        <span className="text-slate-500">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-slate-700">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="#F59E0B">
            <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
          </svg>
          {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${
          isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}