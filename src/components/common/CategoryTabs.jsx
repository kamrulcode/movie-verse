function CategoryTabs({ active, onChange }) {
  const categories = ["All", "Movies", "TV Shows"];

  return (
    <div className="flex gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={
            active === category
              ? "rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 text-xs font-semibold text-white"
              : "rounded-full bg-[#142238] px-4 py-2 text-xs text-slate-300 hover:bg-[#1b2b42]"
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
