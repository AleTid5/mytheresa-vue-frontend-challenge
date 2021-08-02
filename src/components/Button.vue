<template>
  <button
    class="button"
    :class="{ [className]: className, [type]: type }"
    @click="$emit('onClick')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
    },
    type: {
      type: String,
      default: "default",
      validator: (value) =>
        ["default", "red", "yellow", "blue"].includes(value),
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  @extend .items-center;
  display: inline;
  cursor: pointer;
  height: 40px;
  color: white;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  font-weight: 700;
  border-radius: 0.375rem;
  background-color: transparent;
  font-size: 0.8rem;

  &:hover {
    filter: brightness(0.9);
  }

  &.default {
    border: 1px solid #a5a5a5;
    box-shadow: 0 0 10px #a5a5a5;
  }

  &.red {
    border: 1px solid tomato;
    box-shadow: 0 0 10px tomato;
  }

  &.yellow {
    border: 1px solid $main-app-color;
    box-shadow: 0 0 10px $main-app-color;
  }

  &.blue {
    border: 1px solid #85c8ff;
    box-shadow: 0 0 10px #85c8ff;
  }
}
</style>
