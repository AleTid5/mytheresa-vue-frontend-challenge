<template>
  <div class="movie-grid">
    <movie-card v-for="movie in movies" :movie="movie" :key="movie" />
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";
import SECTIONS from "@/constants/sections.constants";
import MovieListApiService from "@/services/api/movie-list.api";

export default {
  name: "CinemaListings",
  components: { MovieCard },
  props: {
    msg: String,
  },

  data: () => ({
    movies: [],
  }),

  created() {
    SECTIONS.forEach(async ({ id }) =>
      this.movies.push(...(await MovieListApiService.getListByGenreId(id)))
    );
  },
};
</script>

<style scoped lang="scss">
.movie-grid {
  padding: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @include media(sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media(lg) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include media(xl) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
