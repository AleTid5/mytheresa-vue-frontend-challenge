<template>
  <div class="no-results">
    <h1 class="no-results-title">Don't give up yet!</h1>
    <ul class="no-results-list">
      <li>
        Double check that your searched item(s) didn't include any typos or
        spelling mistakes
      </li>
      <li>Perhaps try searching with a more general term</li>
      <li>Perhaps try searching with similar terms</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MoviesNotFound",
};
</script>

<style scoped lang="scss">
.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-title {
    color: $title-color;
    text-transform: uppercase;
  }

  &-list {
    color: $title-color;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
}
</style>
