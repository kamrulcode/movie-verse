const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export async function getMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  );

  if (!response.ok) {
    throw new Error("Failed to load movies");
  }

  const data = await response.json();

  return data.results;
}

export async function getTVShows() {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  );

  if (!response.ok) {
    throw new Error("Failed to load TV shows");
  }

  const data = await response.json();

  return data.results;
}

export async function searchMovies(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }

  const data = await response.json();

  return data.results;
}

export async function searchTVShows(query) {
  const response = await fetch(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to search TV shows");
  }

  const data = await response.json();

  return data.results;
}

export async function getMovieDetails(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to load movie details");
  }

  return response.json();
}

export async function getTVDetails(id) {
  const response = await fetch(
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`,
  );

  if (!response.ok) {
    throw new Error("Failed to load TV details");
  }

  return response.json();
}
