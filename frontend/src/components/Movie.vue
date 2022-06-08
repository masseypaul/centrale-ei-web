<template>
  <div class="MovieAlone">
    <img
      :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
      alt=""
      width="200"
    />
    <p style="OurText">{{ movie.original_title }},{{ movie.release_date }}</p>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    movie: Object,
  },
};
</script>

<style>
.MovieAlone {
  width: 200px;
}

.OurText {
  text-shadow: 0 0 0.2em #87f, 0 0 0.2em #87f, 0 0 0.2em #87f;
}
</style>
