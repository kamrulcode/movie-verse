import { useEffect } from "react";

function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const title = movie.title || movie.name;

  const year =
    movie.release_date?.slice(0, 4) ||
    movie.first_air_date?.slice(0, 4) ||
    "N/A";

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
    : "https://placehold.co/1000x500/0d1a2a/ffffff?text=No+Poster";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-600 bg-[#0b1726] shadow-2xl">
        {/* Backdrop */}

        <div className="relative h-64 overflow-hidden sm:h-80">
          <img
            src={poster}
            alt={title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#0b1726] via-[#0b1726]/40 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-2 text-white"
          >
            ✕
          </button>
        </div>

        {/* Content */}

        <div className="p-5 sm:p-7">
          <h2 className="text-2xl font-black text-white">{title}</h2>

          {/* Rating + Year */}

          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="text-yellow-400">
              ★ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
            </span>

            <span>•</span>

            <span>{year}</span>

            <span>•</span>

            <span className="capitalize">
              {movie.media_type === "tv" ? "TV Show" : "Movie"}
            </span>
          </div>

          {/* Description */}

          <div className="mt-5">
            <h3 className="mb-2 font-bold text-white">Overview</h3>

            <p className="text-sm leading-6 text-slate-300">
              {movie.overview || "No description available."}
            </p>
          </div>

          {/* Information */}

          <div className="mt-6 space-y-2 text-sm text-slate-400">
            <p>
              <strong className="text-slate-200">Language:</strong>{" "}
              {movie.original_language || "N/A"}
            </p>

            <p>
              <strong className="text-slate-200">Popularity:</strong>{" "}
              {movie.popularity ? movie.popularity.toFixed(1) : "N/A"}
            </p>

            <p>
              <strong className="text-slate-200">Votes:</strong>{" "}
              {movie.vote_count || "N/A"}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-6 rounded-lg bg-linear-to-r from-violet-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
