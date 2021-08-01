<template>
  <img loading="lazy" :src="imageSource" :alt="alt" :class="className" />
</template>

<script>
export default {
  name: "Image",
  computed: {
    imageSource() {
      return this.src
        ? process.env.VUE_APP_TMDB_BASE_IMAGE_URL + this.src
        : process.env.VUE_APP_TMDB_DEFAULT_IMAGE_URL;
    },
  },
  props: {
    src: String,
    alt: {
      type: String,
      default: "",
    },
    className: String,
  },
};
</script>
