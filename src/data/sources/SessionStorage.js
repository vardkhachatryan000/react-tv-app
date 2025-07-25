const MOVIE_ID_KEY = "selectedMovieID";

export function setSelectedMovieId(id) {
  sessionStorage.setItem(MOVIE_ID_KEY, id);
}

export function getSelectedMovieId() {
  return sessionStorage.getItem(MOVIE_ID_KEY);
}