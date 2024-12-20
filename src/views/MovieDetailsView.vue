<script setup>
import { defineProps, onMounted } from 'vue';
import { useMovieStore } from '@/stores/movies';
const movieStore = useMovieStore();

const props = defineProps({
  movieId: {
    type: Number,
    required: true,
  },
});

onMounted(async () => {
  await movieStore.getMovieDetail(props.movieId);
});
</script>

<template>

<div class="movie-details-container">
  <div class="movie-info">
      <img :src="`https://image.tmdb.org/t/p/w185${movieStore.currentMovie.poster_path}`"
        :alt="movieStore.currentMovie.title" class="movie-poster" />

        <div class="movie-details">
        <h1 class="movie-title">Filme: {{ movieStore.currentMovie.title }}</h1>
        <p>{{ movieStore.currentMovie.tagline }}</p>
        <p class="movie-overview">{{ movieStore.currentMovie.overview }}</p>
        <p>Orçamento: ${{ movieStore.currentMovie.budget }}</p>
        <p>Avaliação: {{ movieStore.currentMovie.vote_average }}</p>
      </div>
    </div>
  </div>

  <h2 style="text-align: center; margin-top: 5vh; margin-bottom: 3vh;">Produtoras</h2>
  <div class="companies">
    <template v-for="company in movieStore.currentMovie.production_companies" :key="company.id">
      <img v-if="company.logo_path" :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`" :alt="company.name" class="company-logo" />
      <p v-else>{{ company.name }}</p>
    </template>
  </div>

</template>

<style scoped>
.movie-details-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.movie-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.movie-info {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.movie-poster {
  width: 200px;
  border-radius: 8px;
}

.movie-details {
  flex: 1;
}

.movie-overview {
  margin-bottom: 1rem;
}

.movie-release-date,
.movie-genres {
  margin-bottom: 0.5rem;
}

h2 {
  color: white;
}

.companies {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

.company-logo {
  width: 92px;
  height: auto;
  margin-right: 1rem;
}
</style>
