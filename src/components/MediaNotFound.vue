<template>
  <h1 class="media-not-found">
    We are sorry, the provided <span>{{ media }}</span> ID was not found.
  </h1>
</template>

<script>
export default {
  name: "MediaNotFound",
  props: {
    media: String,
  },
};
</script>

<style scoped lang="scss">
.media-not-found {
  margin-top: 3rem;
  color: #ff856d;

  @include media(sm) {
    text-align: center;
  }

  span {
    text-transform: capitalize;
  }
}
</style>
