<template>
  <div class="search-input-bar">
    <SearchInput @onChange="onSearchChange" :initial-value="searchValue" />
  </div>
  <div class="app-container movie-grid">
    <movie-card
      v-for="movie in filteredMovies ?? movies"
      :movie="movie"
      :key="movie"
      with-categories-badges
      with-movie-button
    />
  </div>
  <Loader v-if="showLoader" />
  <MoviesNotFound v-if="filteredMovies?.length === 0" />
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Loader from "@/components/Loader";
import MovieCard from "@/components/MovieCard";
import MoviesNotFound from "@/components/MoviesNotFound";
import SearchInput from "@/components/SearchInput";
import SECTIONS from "@/constants/sections.constants";
import MovieListApiService from "@/services/api/movie-list.api";

export default {
  name: "CinemaListingsView",
  components: { MoviesNotFound, SearchInput, Loader, MovieCard },

  computed: {
    ...mapState("search-filter-module", ["searchValue"]),
    showLoader() {
      return (
        this.sectionRetrievingIndex < SECTIONS.length && !this.filteredMovies
      );
    },
  },

  data: () => ({
    movies: [],
    filteredMovies: null,
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
    ...mapMutations("search-filter-module", ["onChangeSearchValue"]),
    async retrieveMovies() {
      this.movies.push(
        ...(await MovieListApiService.getListByCategoryId(
          SECTIONS[this.sectionRetrievingIndex++].id
        ))
      );
    },
    scroll() {
      window.onscroll = () => {
        const loaderHeight = 70;

        const scrolledPosition =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) + window.innerHeight;

        const documentHeight = document.documentElement.offsetHeight;

        this.bottomReached = documentHeight - scrolledPosition < loaderHeight;
      };
    },
    async onSearchChange(search) {
      const isAValidSearch = search.length > 2;

      this.filteredMovies = isAValidSearch
        ? await MovieListApiService.getListByQuery(search)
        : null;

      this.onChangeSearchValue(search);
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
