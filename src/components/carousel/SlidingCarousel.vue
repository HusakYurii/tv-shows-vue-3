<script setup lang="ts">
import type { Ref } from "vue";
import { ref, defineProps } from "vue";

import CarouselItem from "./CarouselItem.vue";
import CarouselButtonNext from "./CarouselButtonNext.vue";
import CarouselButtonPrevious from "./CarouselButtonPrevious.vue";
import type { TVShowData } from "@/transport";

type CarouselProps = {
  shows: Readonly<TVShowData[]>;
};
defineProps<CarouselProps>();

const carousel = ref<HTMLDivElement>(document.createElement("div"));
const carouselItems = ref<Ref<HTMLDivElement>[]>([]);
const currentIndex = ref(0);

const move = (direction: number) => {
  const nextIndex = currentIndex.value + direction;
  if (nextIndex < 0 || nextIndex > carouselItems.value.length - 1) {
    return;
  }

  const item = carouselItems.value[0].value;
  const ItemWidth = item.clientWidth || 0;

  carousel.value.scrollBy({
    behavior: "smooth",
    left: ItemWidth * direction,
  });

  currentIndex.value += direction;
};

const showPreviousCard = () => move(-1);
const showNextCard = () => move(1);
</script>

<template>
  <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner" ref="carousel">
      <CarouselItem
        v-for="(data, i) in shows"
        ref="carouselItems"
        :key="data.id"
        :data="data"
        :is-active="i === currentIndex"
      />
    </div>
    <CarouselButtonPrevious @click="showPreviousCard" />
    <CarouselButtonNext @click="showNextCard" />
  </div>
</template>

<style></style>
