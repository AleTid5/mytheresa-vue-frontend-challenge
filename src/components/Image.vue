<template>
  <img loading="lazy" :src="baseUrl + src" :alt="alt" :class="className" />
</template>

<script>
export default {
  name: "Image",
  props: {
    src: String,
    alt: {
      type: String,
      default: "",
    },
    className: String,
    baseUrl: {
      type: String,
      default: process.env.VUE_APP_TMDB_IMAGE_URL,
    },
  },
};
</script>
