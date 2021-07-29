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
      <button class="button-remove-from-favorites" v-if="withRemoveButton">
        <span>Remove movie</span>
      </button>
    </div>
  </card>
</template>

<script>
import Card from "@/components/Card";
import StarIcon from "@/assets/icons/StarIcon";
import Image from "@/components/Image";

export default {
  name: "MovieCard",
  components: { Image, StarIcon, Card },
  props: {
    movie: Object,
    withRemoveButton: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.favorite-movie-card {
  $image-size: 8rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;

  img {
    width: $image-size;
    height: $image-size;
    margin-top: -($image-size / 2) - 1rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    border-radius: 50%;
  }

  .description {
    margin-top: 1rem;
    text-align: center;
    color: white;

    .stars {
      color: $main-app-color;

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

    .overview {
      margin-top: 0.5rem;
      font-size: 1.3rem;
      font-style: italic;
      max-height: 5rem;
      overflow: auto;
    }

    .button-remove-from-favorites {
      @extend .items-center;
      cursor: pointer;
      height: 40px;
      color: white;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
      font-weight: 700;
      border-radius: 0.375rem;
      background-color: transparent;
      border: 1px solid tomato;
      box-shadow: 0 0 10px tomato;
      margin: 2rem auto 1rem auto;

      span {
        font-size: 0.8rem;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
}
</style>
