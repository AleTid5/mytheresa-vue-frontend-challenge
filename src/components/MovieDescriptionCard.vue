<template>
  <Card class-name="movie-card">
    <Image :src="movie.poster_path" />
    <div class="description">
      <div class="stars">
        <StarIcon v-for="a in parseInt(movie.vote_average)" :key="a" />
        <HalfStarIcon v-if="movie.vote_average % 2 !== 0" />
        <sup>({{ movie.vote_average }})</sup>
      </div>
      <div class="title">{{ movie.title }}</div>
      <div class="overview">“ {{ movie.overview }} ”</div>
      <Button type="blue" class-name="button-add-to-favorites"
        >Add to favorites</Button
      >
    </div>
  </Card>
</template>

<script>
import HalfStarIcon from "@/assets/icons/HalfStarIcon";
import StarIcon from "@/assets/icons/StarIcon";
import MovieListApiService from "@/services/api/movie-list.api";
import Card from "./Card";
import Image from "./Image";
import Button from "./Button";

export default {
  name: "MovieDescriptionCard",
  components: { HalfStarIcon, StarIcon, Button, Image, Card },
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
.movie-card {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @include media(sm) {
    grid-template-columns: max-content 1fr;
  }

  img {
    border-radius: 10px;
    margin: auto;

    @include media(sm) {
      margin: unset;
    }
  }

  .description {
    color: white;

    .stars {
      color: $main-app-color;
    }

    .title {
      font-size: 2rem;

      @include media(sm) {
        font-size: 3rem;
      }
    }

    .overview {
      font-size: 1.3rem;
      font-style: italic;
    }

    .button-add-to-favorites {
      margin-top: 2rem;
    }
  }
}
</style>
