<template>
  <div class="no-results">
    <h1 class="no-results-title">The URL wasn't found</h1>
    <ul class="no-results-list">
      <li>Double check you copy/paste the correct URL</li>
      <li>Check if the "path" is OK</li>
      <li>
        May be we deprecated the URL. Go to the home page and navigate again!
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RouteNotFound",
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
