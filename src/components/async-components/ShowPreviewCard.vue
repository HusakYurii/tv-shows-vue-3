<script setup lang="ts">
import { defineProps, ref } from "vue";
import { searchByID, getFallbackTVShowData } from "@/transport";
import type { TVShowData } from "@/transport";

type ShowPreviewCardProps = {
  id: TVShowData["id"];
};

const props = defineProps<ShowPreviewCardProps>();
const showData = ref<TVShowData>(getFallbackTVShowData());

showData.value = (await searchByID(props.id)) || getFallbackTVShowData();
</script>

<template>
  <div class="card mt-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          class="img-fluid rounded-start w-100"
          :src="showData.image.medium"
          :alt="showData.name"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <p class="h1">{{ showData.name }}</p>
          <p class="h3 card-text">Rating: {{ showData.rating.average }}/10</p>
          <p class="card-text pt-2 pb-2" v-html="showData.summary"></p>
          <p class="card-text">
            <small class="text-muted">{{ showData.genres.join(", ") }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
