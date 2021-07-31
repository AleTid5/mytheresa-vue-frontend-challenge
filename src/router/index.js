import { createWebHistory, createRouter } from "vue-router";
import CinemaListings from "@/views/cinema-listings";
import Category from "@/views/category";

const routes = [
  {
    path: "/",
    name: "CinemaListings",
    component: CinemaListings,
  },
  {
    path: "/category/:categoryId",
    name: "Category",
    component: Category,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
