import { use, useMemo, useState } from "react";
import SearchBar from "../common/SearchBar";
import CategoryTabs from "../common/CategoryTabs";
import MovieGrid from "./MovieGrid";
import MovieModal from "./MovieModal";

function MoviesContent({ showsPromise }) {
  const shows = use(showsPromise);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return shows.filter((show) => {
      const matchesSearch = show.name.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" ||
        (category === "Movies" && show.type === "Movie") ||
        (category === "TV Shows" && show.type !== "Movie");

      return matchesSearch && matchesCategory;
    });
  }, [shows, search, category]);

  return (
    <>
      <section className="mx-auto min-h-[calc(100vh-128px)] max-w-375 px-4 py-7 sm:px-6 lg:px-8">
        <SearchBar value={search} onChange={setSearch} />

        <div className="mt-4 flex items-center justify-between gap-4">
          <CategoryTabs active={category} onChange={setCategory} />

          <span className="hidden text-xs text-slate-400 sm:block">
            Total: {filteredMovies.length}
          </span>
        </div>

        <div className="mt-5">
          <h2 className="text-lg font-bold text-white">
            {search ? `Search results for "${search}"` : "Popular Shows"}
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            {filteredMovies.length} shows found
          </p>
        </div>

        <MovieGrid movies={filteredMovies} onDetails={setSelectedMovie} />
      </section>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </>
  );
}

export default MoviesContent;
