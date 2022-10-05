<script setup lang="ts">
import { createShowLink } from "@/router";
import { RouterLink } from "vue-router";
import { defineProps } from "vue";
import type { TVShowData } from "@/transport";

type RouterLinkSlotProps = {
  id: TVShowData["id"];
};

defineProps<RouterLinkSlotProps>();
</script>

<template>
  <RouterLink :to="createShowLink(id)">
    <slot></slot>
  </RouterLink>
</template>

<style></style>
