<script setup lang="ts">
import type { Ref } from "vue";
import { ref, defineProps, defineExpose } from "vue";
import RouterLinkSlot from "@/components/slot-components/RouterLinkSlot.vue";
import type { TVShowData } from "@/transport";

type CardProps = {
  data: Readonly<TVShowData>;
  isActive: boolean;
};
type CardExpos = {
  value: Ref<HTMLDivElement>;
};

const element = ref<HTMLDivElement>(document.createElement("div"));

defineProps<CardProps>();
defineExpose<CardExpos>({
  value: element,
});
</script>

<template>
  <div class="carousel-item" :class="{ active: isActive }" ref="element">
    <div class="card">
      <div class="img-wrapper">
        <img :src="data.image.medium" class="d-block w-100" :alt="data.name" />
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ data.name }}</h5>
        <p>{{ data.rating.average }} / 10</p>
        <RouterLinkSlot class="btn btn-dark" :id="data.id"
          >Watch</RouterLinkSlot
        >
      </div>
    </div>
  </div>
</template>

<style></style>
