<template>
  <div class="app-container">
    <div class="title-container">
      <div class="title">
        <div>{{ genreName }}</div>
      </div>
      <router-link to="/">
        <Button>Go back</Button>
      </router-link>
    </div>
    <div>
      <div class="movie-grid" v-if="!error">
        <movie-card
          v-for="movie in movies"
          :movie="movie"
          :key="movie"
          with-movie-button
        />
      </div>
      <MediaNotFound v-else media="category" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import MediaNotFound from "@/components/MediaNotFound";
import MovieCard from "@/components/MovieCard";
import SECTIONS from "@/constants/sections.constants";
import MovieListApiService from "@/services/api/movie-list.api";

export default {
  name: "CategoryView",
  components: { MediaNotFound, Button, MovieCard },

  computed: {
    genreName() {
      return (
        SECTIONS.find(
          ({ id }) => id === parseInt(this.$route.params.categoryId)
        )?.name ?? "Category not found"
      );
    },
  },

  data: () => ({
    movies: [],
    error: false,
  }),

  methods: {
    async retrieveMovies() {
      try {
        this.movies = await MovieListApiService.getListByCategoryId(
          this.$route.params.categoryId
        );
      } catch (e) {
        this.error = true;
      }
    },
  },

  created() {
    this.retrieveMovies();
  },

  beforeRouteUpdate() {
    this.retrieveMovies();
  },
};
</script>

<style scoped lang="scss">
.title-container {
  position: sticky;
  top: $margin-navbar;
  background-color: rgba($main-bg-color, 0.9);
  backdrop-filter: blur(5px);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .title {
    padding: 2rem 0 1rem;
    color: $title-color;
    text-transform: uppercase;
    font-size: 2.5rem;

    @include media(xl) {
      font-size: 3rem;
    }
  }
}

.movie-grid {
  padding-bottom: 2rem;
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
</style>
