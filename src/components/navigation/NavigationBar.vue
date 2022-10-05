<script setup lang="ts">
import RouterLinkSlot from "@/components/slot-components/RouterLinkSlot.vue";
import { RouterLink } from "vue-router";
import { ref, computed, watch } from "vue";

import { searchByName } from "@/transport";
import type { TVShowData, TVShowSearchResult } from "@/transport";
import { fixMissingImages } from "@/tools";

const foundShows = ref<TVShowData[]>([]);
const searchQuery = ref("");

const hasShowsAvailable = computed(() => !!foundShows.value.length);

watch(searchQuery, () => {
  if (searchQuery.value.length === 0) {
    foundShows.value = [];
  }
});

const sendQuery = async (): Promise<void> => {
  const data: TVShowSearchResult[] = await searchByName(searchQuery.value);
  foundShows.value = data.map(({ show }) => fixMissingImages(show));
};

const resetSearch = () => {
  searchQuery.value = "";
};
</script>

<template>
  <div class="container-fluid bg-dark p-2">
    <div class="row">
      <div class="col-4 col-lg-3 d-none d-sm-block m-1">
        <RouterLink to="/"
          ><span class="text-white h3">TV Shows</span>
        </RouterLink>
      </div>
      <div class="col col-lg-7 me-auto">
        <div class="input-group input-group-lg">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchQuery"
          />
          <button class="btn btn-success text-white" @click="sendQuery">
            Search
          </button>
          <div
            class="dropdown-menu mt-5 w-100"
            :class="{ show: hasShowsAvailable }"
            @click="resetSearch"
          >
            <RouterLinkSlot
              class="dropdown-item"
              v-for="show in foundShows"
              :key="show.id"
              :id="show.id"
            >
              <span><img :src="show.image.medium" /></span>
              <span>{{ show.name }}</span>
            </RouterLinkSlot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
