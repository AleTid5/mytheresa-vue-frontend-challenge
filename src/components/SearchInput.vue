<template>
  <div class="search-input">
    <input
      type="text"
      class="input"
      placeholder="Search a movie..."
      v-model="value"
      @input="$emit('onChange', value)"
      data-testid="movie-search-input"
    />
    <div class="icon" @click="$emit('onChange', value)">
      <SearchIcon />
    </div>
  </div>
</template>

<script>
import SearchIcon from "@/assets/icons/SearchIcon";
export default {
  name: "SearchInput",
  components: { SearchIcon },
  data: () => ({
    value: "",
  }),
};
</script>

<style scoped lang="scss">
.search-input {
  position: relative;
  display: flex;
  align-items: center;

  .input {
    color: white;
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    border-color: transparent;
    background-color: $main-bg-color;
    box-shadow: 10px 10px 20px $dark-gray-1, -10px -10px 20px $dark-gray-1;

    @include media(md) {
      width: 285px;
    }

    &:focus {
      outline: 1px solid transparent;
      outline-offset: 1px;
    }

    &::placeholder {
      color: white;
      font-style: italic;
    }
  }

  .icon {
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $main-bg-color;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
