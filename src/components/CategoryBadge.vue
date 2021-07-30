<template>
  <span :class="`badge badge-${categoryId}`" @click="$emit('onClick', categoryId)">{{
    genreName
  }}</span>
</template>

<script>
import SECTIONS from "@/constants/sections.constants";

export default {
  props: {
    categoryId: Number,
    onClick: Function,
  },
  computed: {
    genreName() {
      return SECTIONS.find(({ id }) => id === this.categoryId).name;
    },
  },
};
</script>

<style scoped lang="scss">
.badge {
  $active-opacity: 0.2;
  $hover-opacity: 0.1;
  border: 1px solid transparent;
  border-radius: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  font-size: 12px;
  font-weight: 500;
  padding: 0 10px;
  margin: 1rem 0.2rem 0 0.2rem;
  cursor: pointer;
  user-select: none;

  &-28 {
    color: $category-action-color;
    background-color: rgba($category-action-color, $active-opacity);

    &:hover {
      background-color: rgba($category-action-color, $hover-opacity);
    }
  }

  &-12 {
    color: $category-adventure-color;
    background-color: rgba($category-adventure-color, $active-opacity);

    &:hover {
      background-color: rgba($category-adventure-color, $hover-opacity);
    }
  }

  &-16 {
    color: $category-animation-color;
    background-color: rgba($category-animation-color, $active-opacity);

    &:hover {
      background-color: rgba($category-animation-color, $hover-opacity);
    }
  }

  &-35 {
    color: $category-comedy-color;
    background-color: rgba($category-comedy-color, $active-opacity);

    &:hover {
      background-color: rgba($category-comedy-color, $hover-opacity);
    }
  }

  &-80 {
    color: $category-crime-color;
    background-color: rgba($category-crime-color, $active-opacity);

    &:hover {
      background-color: rgba($category-crime-color, $hover-opacity);
    }
  }

  &-99 {
    color: $category-documentary-color;
    background-color: rgba($category-documentary-color, $active-opacity);

    &:hover {
      background-color: rgba($category-documentary-color, $hover-opacity);
    }
  }

  &-18 {
    color: $category-drama-color;
    background-color: rgba($category-drama-color, $active-opacity);

    &:hover {
      background-color: rgba($category-drama-color, $hover-opacity);
    }
  }

  &-10751 {
    color: $category-family-color;
    background-color: rgba($category-family-color, $active-opacity);

    &:hover {
      background-color: rgba($category-family-color, $hover-opacity);
    }
  }

  &-14 {
    color: $category-fantasy-color;
    background-color: rgba($category-fantasy-color, $active-opacity);

    &:hover {
      background-color: rgba($category-fantasy-color, $hover-opacity);
    }
  }

  &-36 {
    color: $category-history-color;
    background-color: rgba($category-history-color, $active-opacity);

    &:hover {
      background-color: rgba($category-history-color, $hover-opacity);
    }
  }

  &-27 {
    color: $category-horror-color;
    background-color: rgba($category-horror-color, $active-opacity);

    &:hover {
      background-color: rgba($category-horror-color, $hover-opacity);
    }
  }

  &-10402 {
    color: $category-music-color;
    background-color: rgba($category-music-color, $active-opacity);

    &:hover {
      background-color: rgba($category-music-color, $hover-opacity);
    }
  }

  &-9648 {
    color: $category-mystery-color;
    background-color: rgba($category-mystery-color, $active-opacity);

    &:hover {
      background-color: rgba($category-mystery-color, $hover-opacity);
    }
  }

  &-10749 {
    color: $category-romance-color;
    background-color: rgba($category-romance-color, $active-opacity);

    &:hover {
      background-color: rgba($category-romance-color, $hover-opacity);
    }
  }

  &-878 {
    color: $category-science-fiction-color;
    background-color: rgba($category-science-fiction-color, $active-opacity);

    &:hover {
      background-color: rgba($category-science-fiction-color, $hover-opacity);
    }
  }

  &-10770 {
    color: $category-tv-movie-color;
    background-color: rgba($category-tv-movie-color, $active-opacity);

    &:hover {
      background-color: rgba($category-tv-movie-color, $hover-opacity);
    }
  }

  &-53 {
    color: $category-thriller-color;
    background-color: rgba($category-thriller-color, $active-opacity);

    &:hover {
      background-color: rgba($category-thriller-color, $hover-opacity);
    }
  }

  &-10752 {
    color: $category-war-color;
    background-color: rgba($category-war-color, $active-opacity);

    &:hover {
      background-color: rgba($category-war-color, $hover-opacity);
    }
  }

  &-37 {
    color: $category-western-color;
    background-color: rgba($category-western-color, $active-opacity);

    &:hover {
      background-color: rgba($category-western-color, $hover-opacity);
    }
  }
}
</style>
