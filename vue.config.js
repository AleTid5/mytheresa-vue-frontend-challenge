module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/mytheresa-vue-frontend-challenge/"
      : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/index.scss";`,
      },
    },
  },
};
