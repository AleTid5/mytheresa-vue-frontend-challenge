import { createStore } from "vuex";
import FavoriteMoviesStore from "./favorite-movies.store";
import FilterStore from "./filter.store";

export default createStore({
  modules: {
    "favorite-movies-module": FavoriteMoviesStore,
    "filter-module": FilterStore,
  },
});
