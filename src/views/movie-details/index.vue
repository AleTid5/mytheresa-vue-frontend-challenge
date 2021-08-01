<template>
  <div class="app-container movie-details">
    <router-link to="/">
      <Button>Go to cinema listings</Button>
    </router-link>
    <MovieDescriptionCard :movie="movie" v-if="movie.id" />
    <MediaNotFound v-else media="movie" />
  </div>
</template>

<script>
import Button from "@/components/Button";
import MediaNotFound from "@/components/MediaNotFound";
import MovieDescriptionCard from "@/components/MovieDescriptionCard";
import MovieListApiService from "@/services/api/movie-list.api";

export default {
  name: "MovieDetailsView",
  components: { MediaNotFound, MovieDescriptionCard, Button },
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
