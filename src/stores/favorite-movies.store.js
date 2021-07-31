export default {
  namespaced: true,
  state() {
    return {
      favoriteMovies: JSON.parse(localStorage.getItem("favorite-movies")) ?? [],
    };
  },
  getters: {
    isMovieInTheList: (state) => (movieId) =>
      state.favoriteMovies.some(
        (favoriteMovie) => favoriteMovie.id === parseInt(movieId)
      ),
  },
  mutations: {
    addMovieToFavorites(state, movie) {
      state.favoriteMovies.push(movie);
      localStorage.setItem(
        "favorite-movies",
        JSON.stringify(state.favoriteMovies)
      );
    },
    removeMovieFromFavorites(state, movieId) {
      state.favoriteMovies = state.favoriteMovies.filter(
        (favoriteMovie) => favoriteMovie.id !== parseInt(movieId)
      );
      localStorage.setItem(
        "favorite-movies",
        JSON.stringify(state.favoriteMovies)
      );
    },
  },
};
