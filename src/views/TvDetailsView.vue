<script setup>
import { defineProps, onMounted } from 'vue';
import { useTvStore } from '@/stores/tv';
const tvStore = useTvStore();

const props = defineProps({
  tvId: {
    type: Number,
    required: true,
  },
});

onMounted(async () => {
  await tvStore.getTvDetail(props.tvId);
});
</script>

<template>

<div class="tv-details-container">
  <div class="tv-info">
      <img :src="`https://image.tmdb.org/t/p/w185${tvStore.currentTv.poster_path}`"
        :alt="tvStore.currentTv.title" class="tv-poster" />

        <div class="tv-details">
        <h1 class="tv-title">Filme: {{ tvStore.currentTv.title }}</h1>
        <p>{{ tvStore.currentTv.tagline }}</p>
        <p class="tv-overview">{{ tvStore.currentTv.overview }}</p>
        <p>Orçamento: ${{ tvStore.currentTv.budget }}</p>
        <p>Avaliação: {{ tvStore.currentTv.vote_average }}</p>
      </div>
    </div>
  </div>

  <h2 style="text-align: center; margin-top: 7vh">Produtoras</h2>
  <div class="produtoras">
  <div class="companies">
    <template v-for="company in tvStore.currentTv.production_companies" :key="company.id">
      <img v-if="company.logo_path" :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`" :alt="company.name" class="company-logo" />
      <p v-else>{{ company.name }}</p>
    </template>
  </div>
  </div>

</template>

<style scoped>
.tv-details-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.produtoras {
  margin-top: 3vh;
  display: flex;
  justify-content: center;
}

.tv-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.tv-info {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.tv-poster {
  width: 200px;
  border-radius: 8px;
}

.tv-details {
  flex: 1;
}

.tv-overview {
  margin-bottom: 1rem;
}

.tv-release-date,
.tv-genres {
  margin-bottom: 0.5rem;
}

h2 {
  color: white;
}
.companies {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.company-logo {
  width: 92px;
  height: auto;
  margin-right: 1rem;
}
</style>
