function MovieCard({ movie, onDetails }) {
  const title = movie.title || movie.name;

  const year =
    movie.release_date?.slice(0, 4) ||
    movie.first_air_date?.slice(0, 4) ||
    "N/A";

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750/0d1a2a/ffffff?text=No+Poster";

  return (
    <article className="group overflow-hidden rounded-xl border border-ctmBorder bg-card shadow-lg transition hover:-translate-y-1 hover:border-blue-400/50">
      <div className="relative aspect-2/3 overflow-hidden bg-slate-900">
        <img
          src={poster}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Information */}

      <div className="p-3.5">
        <h3 className="truncate text-sm font-bold text-white">{title}</h3>

        <div className="mt-1 flex items-center justify-between text-xs text-slate-400">
          <span>{year}</span>

          <span className="flex items-center gap-1 text-slate-200">
            <span className="text-yellow-400">★</span>

            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onDetails(movie)}
          className="mt-3 w-full rounded-full  py-2 text-xs font-bold transition hover:brightness-110 border border-[#29415f]
        bg-[#07111f32] "
        >
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
