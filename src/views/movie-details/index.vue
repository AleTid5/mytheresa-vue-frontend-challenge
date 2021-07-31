<template>
  <div class="app-container movie-details">
    <router-link to="/">
      <Button>Go to cinema listings</Button>
    </router-link>
    <MovieDescriptionCard :movie="movie" />
  </div>
</template>

<script>
import Button from "@/components/Button";
import MovieDescriptionCard from "@/components/MovieDescriptionCard";
import MovieListApiService from "@/services/api/movie-list.api";

export default {
  name: "MovieDetailsView",
  components: { MovieDescriptionCard, Button },
  data: () => ({
    movie: {},
  }),
  created() {
    (async () => {
      this.movie = await MovieListApiService.getMovieById(
        this.$route.params.movieId
      );
    })();
  },
};
</script>

<style scoped lang="scss">
.movie-details {
  padding: 2rem 0;
}
</style>
