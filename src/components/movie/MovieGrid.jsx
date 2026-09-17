import MovieCard from "./MovieCard";

function MovieGrid({ movies, onDetails }) {
  if (movies.length === 0) {
    return (
      <div className="mt-10 rounded-2xl border border-dashed border-slate-700 bg-[#0b1726] px-6 py-16 text-center">
        <div className="text-4xl">🔎</div>

        <h3 className="mt-4 text-lg font-bold text-white">No results found</h3>

        <p className="mt-2 text-sm text-slate-400">
          Try another movie or TV show.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {movies.map((movie) => (
        <MovieCard
          key={`${movie.id}-${movie.media_type || movie.title || movie.name}`}
          movie={movie}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
}

export default MovieGrid;
