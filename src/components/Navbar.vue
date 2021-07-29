<template>
  <header class="header-navbar header-navbar-background">
    <nav>
      <router-link to="/" class="items-center">
        <img alt="Mytheresa Logo" src="@/assets/images/logo.png" />
      </router-link>
      <router-link to="/favorite-movies" class="icon items-center">
        <heart-icon />
        <div class="icon-badge" v-if="favoriteMovies.length > 0">
          <div>{{ favoriteMovies.length }}</div>
        </div>
      </router-link>
    </nav>
  </header>
</template>

<script>
import HeartIcon from "@/assets/icons/HeartIcon";

export default {
  name: "Navbar",
  components: { HeartIcon },
  data: () => {
    return {
      favoriteMovies: [],
    };
  },
};
</script>

<style lang="scss">
.header-navbar {
  @extend .middle-align;
  width: 100%;
  height: $margin-navbar;
  background-color: $main-app-color;
  position: sticky;
  top: 0;
  z-index: 1;

  nav {
    @extend .app-container, .space-between, .items-center;

    img {
      max-width: $margin-navbar * 2;

      @include media(lg) {
        max-width: $margin-navbar * 2 + 30px;
      }
    }

    .icon {
      position: relative;

      svg {
        height: $margin-navbar / 2 - 5px;
        width: $margin-navbar / 2 - 5px;
      }

      &-badge {
        @extend .middle-align;
        background-color: tomato;
        color: white;
        position: absolute;
        top: -8px;
        right: -8px;
        min-height: 18px;
        min-width: 18px;
        border-radius: 50%;

        div {
          margin-top: 4px;
        }
      }
    }
  }
}
</style>
