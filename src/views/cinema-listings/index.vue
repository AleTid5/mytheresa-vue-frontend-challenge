<template>
  <div class="search-input-bar">
    <SearchInput />
  </div>
  <div class="app-container movie-grid">
    <movie-card
      v-for="movie in movies"
      :movie="movie"
      :key="movie"
      with-categories-badges
      with-category-button
    />
  </div>
  <Loader v-if="showLoader" />
</template>

<script>
import Loader from "@/components/Loader";
import MovieCard from "@/components/MovieCard";
import SECTIONS from "@/constants/sections.constants";
import MovieListApiService from "@/services/api/movie-list.api";
import SearchInput from "../../components/SearchInput";

export default {
  name: "CinemaListingsView",
  components: { SearchInput, Loader, MovieCard },

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
        ...(await MovieListApiService.getListByCategoryId(
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
.search-input-bar {
  position: sticky;
  top: $margin-navbar;
  z-index: 1;
  background-color: rgba($main-bg-color, 0.9);
  backdrop-filter: blur(5px);
  padding: 1rem 0;
  display: flex;
  justify-content: center;
}

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
</style>
