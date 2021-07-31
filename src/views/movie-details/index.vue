<template>
  <div class="app-container movie-details">
    <router-link to="/">
      <Button>Go to cinema listings</Button>
    </router-link>
    <MovieDescriptionCard />
  </div>
</template>

<script>
import Button from "@/components/Button";
import MovieDescriptionCard from "@/components/MovieDescriptionCard";

export default {
  name: "MovieDetailsView",
  components: { MovieDescriptionCard, Button },
};
</script>

<style scoped lang="scss">
.movie-details {
  padding: 2rem 0;
}
</style>
