<script setup lang="ts">
import { useTVShowsStore } from "../stores/tvShows";
import SlidingCarousel from "@/components/carousel/SlidingCarousel.vue";
const tvShowsStore = useTVShowsStore();
</script>

<template>
  <div>
    <SlidingCarousel
      v-for="(data, i) in tvShowsStore.allShows"
      :key="i"
      :shows="data"
    />
  </div>
</template>

<style></style>
