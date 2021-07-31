import { createApp } from "vue";
import App from "./App";
import Router from "./router";
import FavoriteMoviesStore from "./stores/favorite-movies.store";

createApp(App).use(Router).use(FavoriteMoviesStore).mount("#app");
