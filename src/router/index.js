import { createWebHistory, createRouter } from "vue-router";
import RouteNotFound from "@/components/RouteNotFound";
import CategoryView from "@/views/category";
import CinemaListingsView from "@/views/cinema-listings";
import FavoriteMoviesView from "@/views/favorite-movies";
import MovieDetailsView from "@/views/movie-details";

const redirects = [
  {
    path: "/mytheresa-vue-frontend-challenge",
    redirect: "/",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: RouteNotFound,
  },
];

const routes = [
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
  {
    path: "/",
    name: "CinemaListingsRoute",
    component: CinemaListingsView,
  },
  ...redirects,
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
