<template>
  <div class="search-input">
    <input
      type="text"
      class="input"
      placeholder="Search a movie..."
      v-model="value"
      data-testid="movie-search-input"
    />
    <div class="icon" :class="{ close: value.length > 0 }" @click="cleanInput">
      <SearchIcon v-if="value.length === 0" />
      <CloseIcon v-else />
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/assets/icons/CloseIcon";
import SearchIcon from "@/assets/icons/SearchIcon";

export default {
  name: "SearchInput",
  components: { CloseIcon, SearchIcon },
  props: {
    initialValue: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      value: this.initialValue,
    };
  },

  watch: {
    value(value) {
      this.$emit("onChange", value);
    },
  },

  methods: {
    cleanInput() {
      this.value = "";
    },
  },

  created() {
    if (this.value !== "") {
      this.$emit("onChange", this.value);
    }
  },
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
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $main-bg-color;
    user-select: none;

    svg {
      width: 20px;
      height: 20px;
    }

    &.close {
      cursor: pointer;
    }
  }
}
</style>
