export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="bg-white border border-slate-200 rounded-2xl p-5 h-fit md:sticky md:top-24">
      <div className="flex items-center justify-between mb-1 ">
        <h3 className="font-bold text-slate-900">Your Stack</h3>
        {/* {count > 0 && (
          <button
            onClick={onRemoveAll}
            className="mt-4 w-24 text-sm font-semibold text-pink-600 border border-pink-200 border-x-pink-400 rounded-lg py-2 hover:bg-pink-50 transition-colors"
          >
            Remove All
          </button>
        )} */}
      </div>

      <p className="text-sm text-slate-400 mb-4">
        {count === 0
          ? "No technologies selected yet."
          : `${count} ${count === 1 ? "Technology" : "Technologies"} Selected`}
      </p>

      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl py-8 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 border border-slate-100 rounded-xl p-3 hover:shadow-md hover:-translate-x-1.5"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-7 h-7 object-contain"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">
                  {tech.name}
                </p>
                <p className="text-xs text-slate-400">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="text-slate-400 hover:text-pink-600 text-lg leading-none px-1"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
      {count > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-4 w-full items- text-sm font-semibold text-pink-600 border border-pink-200 border-x-pink-500 rounded-lg py-2 hover:bg-pink-50 transition-colors hover:shadow-md"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
