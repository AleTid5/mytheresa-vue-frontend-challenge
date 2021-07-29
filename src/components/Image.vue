<template>
  <img loading="lazy" :src="baseUrl + src" :alt="alt" />
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
  },
  data: () => ({
    baseUrl: process.env.VUE_APP_TMDB_IMAGE_URL,
  }),
};
</script>
