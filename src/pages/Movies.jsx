import { useEffect, useState } from "react";

import SearchBar from "../components/common/SearchBar";
import CategoryTabs from "../components/common/CategoryTabs";
import MovieGrid from "../components/movie/MovieGrid";
import MovieModal from "../components/movie/MovieModal";

import {
  getMovies,
  getTVShows,
  searchMovies,
  searchTVShows,
} from "../services/movieApi";

function Movies() {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError("");

        let data = [];

        // SEARCH
        if (search.trim() !== "") {
          if (category === "Movies") {
            data = await searchMovies(search);
          } else if (category === "TV Shows") {
            data = await searchTVShows(search);
          } else {
            const moviesData = await searchMovies(search);
            const tvData = await searchTVShows(search);

            data = [...moviesData, ...tvData];
          }
        }

        // NO SEARCH
        else {
          if (category === "Movies") {
            data = await getMovies();
          } else if (category === "TV Shows") {
            data = await getTVShows();
          } else {
            const moviesData = await getMovies();
            const tvData = await getTVShows();

            data = [...moviesData, ...tvData];
          }
        }

        setMovies(data);
      } catch (error) {
        console.error(error);

        setError("Failed to load data.");

        setMovies([]);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [search, category]);

  return (
    <>
      <section className="mx-auto min-h-[calc(100vh-128px)] max-w-[1500px] px-4 py-7 sm:px-6 lg:px-8">
        {/* Search */}
        <SearchBar value={search} onChange={setSearch} />

        {/* Categories */}
        <div className="mt-4 flex items-center justify-between">
          <CategoryTabs active={category} onChange={setCategory} />

          <span className="hidden text-xs text-slate-400 sm:block">
            Total: {movies.length}
          </span>
        </div>

        {/* Heading */}
        <div className="mt-5">
          <h2 className="text-lg font-bold text-white">
            {search
              ? `Search results for "${search}"`
              : category === "All"
                ? "Popular Movies & TV Shows"
                : category}
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            {movies.length} results found
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-violet-500" />
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-10 rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
            <h2 className="font-bold text-red-400">Something went wrong</h2>

            <p className="mt-2 text-sm text-slate-400">{error}</p>
          </div>
        )}

        {/* Results */}
        {!loading && !error && (
          <MovieGrid movies={movies} onDetails={setSelectedMovie} />
        )}
      </section>

      {/* Modal */}
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </>
  );
}

export default Movies;
