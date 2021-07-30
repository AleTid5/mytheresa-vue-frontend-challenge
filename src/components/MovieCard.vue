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
      <div class="categories">
        <category-badge
          v-for="categoryId in movie.genre_ids"
          :key="categoryId"
          :category-id="categoryId"
          @onClick="goToCategory"
        />
      </div>
      <button class="button remove-from-favorites" v-if="withRemoveButton">
        <span>Remove movie</span>
      </button>
      <router-link
        :to="`/movie/${movie.id}`"
        class="at-bottom"
        v-if="withCategoryButton"
      >
        <button class="button see-category">
          <span>See description</span>
        </button>
      </router-link>
    </div>
  </card>
</template>

<script>
import router from "@/router";
import StarIcon from "@/assets/icons/StarIcon";
import Card from "./Card";
import Image from "./Image";
import CategoryBadge from "./CategoryBadge";

export default {
  name: "MovieCard",
  components: { CategoryBadge, Image, StarIcon, Card },
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
  },
  methods: {
    goToCategory: (categoryId) => {
      router.push(`/category/${categoryId}`)
    },
  },
};
</script>

<style scoped lang="scss">
.favorite-movie-card {
  $image-size: 5rem;
  margin-top: 4rem;
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
    grid-template-rows: repeat(4, auto);
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
    }

    .overview {
      margin-top: 0.5rem;
      font-size: 1.3rem;
      font-style: italic;
      max-height: 3.5rem;
      color: $title-color;
      overflow: auto;
    }

    .button {
      @extend .items-center;
      cursor: pointer;
      height: 40px;
      color: white;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      font-weight: 700;
      border-radius: 0.375rem;
      background-color: transparent;
      margin: 2rem auto 1rem auto;

      span {
        font-size: 0.8rem;
      }

      &:hover {
        filter: brightness(0.9);
      }

      &.remove-from-favorites {
        border: 1px solid tomato;
        box-shadow: 0 0 10px tomato;
      }

      &.see-category {
        border: 1px solid $main-app-color;
        box-shadow: 0 0 10px $main-app-color;
      }
    }
  }
}
</style>
