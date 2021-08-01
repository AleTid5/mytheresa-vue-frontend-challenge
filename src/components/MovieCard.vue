<template>
  <card class-name="favorite-movie-card">
    <Image :src="movie.poster_path" />
    <div class="description">
      <div class="stars">
        <star-icon />
        <sup>({{ movie.vote_average }})</sup>
      </div>
      <div class="title">{{ movie.title }}</div>
      <div class="overview">¡{{ movie.overview }}</div>
      <div class="categories" v-if="withCategoriesBadges">
        <category-badge
          v-for="categoryId in movie.genre_ids"
          :key="categoryId"
          :category-id="categoryId"
          @onClick="goToCategory"
        />
      </div>
      <div class="at-bottom">
        <Button
          type="red"
          v-if="withRemoveButton"
          @onClick="removeMovieFromFavorites(movie.id)"
          >Remove movie</Button
        ><router-link :to="`/movie/${movie.id}`" v-if="withCategoryButton">
          <Button type="yellow">See description</Button>
        </router-link>
      </div>
    </div>
  </card>
</template>

<script>
import { mapMutations } from "vuex";
import StarIcon from "@/assets/icons/StarIcon";
import Card from "./Card";
import Image from "./Image";
import CategoryBadge from "./CategoryBadge";
import Button from "./Button";

export default {
  name: "MovieCard",
  components: { Button, CategoryBadge, Image, StarIcon, Card },
  props: {
    movie: Object,
    withRemoveButton: {
      type: Boolean,
      default: false,
    },
    withCategoryButton: {
      type: Boolean,
      default: false,
    },
    withCategoriesBadges: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapMutations("favorite-movies-module", ["removeMovieFromFavorites"]),
    goToCategory(categoryId) {
      this.$router.push(`/category/${categoryId}`);
    },
  },
};
</script>

<style scoped lang="scss">
.favorite-movie-card {
  $image-size: 5rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  img {
    width: $image-size;
    height: $image-size;
    margin-top: -($image-size / 2) - 1rem;
    display: flex;
    border-radius: 50%;
  }

  .description {
    position: relative;
    text-align: center;
    color: white;
    display: grid;
    height: 100%;

    .stars {
      color: $main-app-color;
      position: absolute;
      top: -1.5rem;
      right: 0.5rem;

      sup {
        margin-left: 0.25rem;
      }
    }

    .title {
      font-family: var(--title-font-family);
      font-size: 1.8rem;
      margin-top: 0.5rem;

      @include media(sm) {
        font-size: 2rem;
      }
    }

    .categories {
      display: flex;
      margin-top: 0.5rem;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    .at-bottom {
      display: flex;
      align-items: flex-end;
      margin: 2rem auto 1rem auto;
    }

    .overview {
      margin-top: 0.5rem;
      font-size: 1rem;
      font-style: italic;
      max-height: 5rem;
      color: $title-color;
      overflow: auto;

      @include media(sm) {
        max-height: 3.5rem;
        font-size: 1.3rem;
      }
    }
  }
}
</style>
