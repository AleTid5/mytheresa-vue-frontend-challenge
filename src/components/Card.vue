<template>
  <div class="card" :class="className"><slot /></div>
</template>

<script>
export default {
  name: "Card",
  props: {
    className: String,
  },
};
</script>

<style scoped lang="scss">
.card {
  padding: 1rem;
  border-radius: 1rem;
  background-color: $main-bg-color;
  box-shadow: 10px 10px 20px $dark-gray-1, -10px -10px 20px $dark-gray-1;
}
</style>
