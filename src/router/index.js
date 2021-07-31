import { createWebHistory, createRouter } from "vue-router";
import CategoryView from "@/views/category";
import CinemaListingsView from "@/views/cinema-listings";
import FavoriteMoviesView from "@/views/favorite-movies";
import MovieDetailsView from "@/views/movie-details";

const routes = [
  {
    path: "/",
    name: "CinemaListingsRoute",
    component: CinemaListingsView,
  },
  {
    path: "/favorite-movies",
    name: "FavoriteMoviesRoute",
    component: FavoriteMoviesView,
  },
  {
    path: "/category/:categoryId",
    name: "CategoryRoute",
    component: CategoryView,
  },
  {
    path: "/movie/:movieId",
    name: "MovieDetailsRoute",
    component: MovieDetailsView,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
