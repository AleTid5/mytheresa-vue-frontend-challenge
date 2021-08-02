import { createStore } from "vuex";
import FavoriteMoviesStore from "./favorite-movies.store";
import SearchFilterStore from "./search-filter.store";

export default createStore({
  modules: {
    "favorite-movies-module": FavoriteMoviesStore,
    "search-filter-module": SearchFilterStore,
  },
});
