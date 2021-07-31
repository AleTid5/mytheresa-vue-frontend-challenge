import { createWebHistory, createRouter } from "vue-router";
import CinemaListingsView from "@/views/cinema-listings";
import CategoryView from "@/views/category";
import MovieDetailsView from "@/views/movie-details";

const routes = [
  {
    path: "/",
    name: "CinemaListingsRoute",
    component: CinemaListingsView,
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
