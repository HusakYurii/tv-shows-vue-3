<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";

import { useTVShowsStore } from "./stores/tvShows";
import { getAllShows } from "./transport";
import type { TVShowData } from "./transport";

import NavigationBar from "./components/navigation/NavigationBar.vue";
import { fixMissingImages, splitInThreeGroups } from "./tools";

const tvShowsStore = useTVShowsStore();

onBeforeMount(async () => {
  const fetchedShows: TVShowData[] = await getAllShows();
  const shows: TVShowData[] = fetchedShows
    .map((show) => fixMissingImages(show))
    .sort((a, b) => b.rating.average - a.rating.average);

  tvShowsStore.allShows = splitInThreeGroups(shows);
});
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <RouterView />
</template>

<style scoped></style>
