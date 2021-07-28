import { createWebHistory, createRouter } from "vue-router";
import CinemaListings from "@/views/cinema-listings";

const routes = [
  {
    path: "/",
    name: "CinemaListings",
    component: CinemaListings,
  },
];

const index = createRouter({
  history: createWebHistory(),
  routes,
});

export default index;
