function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center rounded-xl border border-slate-700 bg-[#1b2b42] px-4">
      <span className="text-xl text-slate-300">⌕</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie or show..."
        className="w-full bg-transparent px-3 py-3.5 text-sm text-white outline-none placeholder:text-slate-400"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="text-slate-400 hover:text-white"
        >
          ✕
        </button>
      )}
    </div>
  );
}
export default SearchBar;
