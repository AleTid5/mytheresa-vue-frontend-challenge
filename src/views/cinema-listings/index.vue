<template>
  <div class="movie-grid">
    <movie-card
      v-for="movie in movies"
      :movie="movie"
      :key="movie"
      with-category-button
    />
  </div>
  <Loader v-if="showLoader" />
</template>

<script>
import MovieCard from "@/components/MovieCard";
import SECTIONS from "@/constants/sections.constants";
import MovieListApiService from "@/services/api/movie-list.api";
import Loader from "../../components/Loader";

export default {
  name: "CinemaListings",
  components: { Loader, MovieCard },
  props: {
    msg: String,
  },

  computed: {
    showLoader() {
      return this.sectionRetrievingIndex < SECTIONS.length;
    },
  },

  data: () => ({
    movies: [],
    sectionRetrievingIndex: 0,
    bottomReached: false,
  }),

  watch: {
    bottomReached(bottomReached) {
      if (!bottomReached || !this.showLoader) {
        return;
      }

      this.retrieveMovies();
    },
  },

  methods: {
    async retrieveMovies() {
      this.movies.push(
        ...(await MovieListApiService.getListByGenreId(
          SECTIONS[this.sectionRetrievingIndex++].id
        ))
      );
    },
    scroll() {
      window.onscroll = () => {
        this.bottomReached =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;
      };
    },
  },

  created() {
    this.retrieveMovies();
  },

  mounted() {
    this.scroll();
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

  @include media(md) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include media(lg) {
    grid-template-columns: repeat(4, 1fr);
  }

  @include media(xl) {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
