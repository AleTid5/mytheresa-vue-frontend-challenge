<template>
  <div class="app-container favorite-movies">
    <div class="movie-grid" v-if="favoriteMovies.length">
      <movie-card
        v-for="movie in favoriteMovies"
        :movie="movie"
        :key="movie"
        with-remove-button
      />
    </div>
    <h1 class="no-movies-selected" v-else>
      There are no favorite movies selected
    </h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MovieCard from "@/components/MovieCard";

export default {
  name: "FavoriteMoviesView",
  components: { MovieCard },

  computed: mapState("favorite-movies-module", ["favoriteMovies"]),
};
</script>

<style scoped lang="scss">
.favorite-movies {
  padding: 2rem 0;

  .movie-grid {
    padding: 2rem 0;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;

    @include media(sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include media(md) {
      grid-template-columns: repeat(3, 1fr);
    }

    @include media(lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .no-movies-selected {
    color: $title-color;
    text-transform: uppercase;
    text-align: center;
  }
}
</style>
