<script setup lang="ts">
import { watchEffect, ref } from "vue";
import { useRoute } from "vue-router";
import { getRouterParamsID } from "@/tools";
import ShowPreviewCard from "@/components/async-components/ShowPreviewCard.vue";
import LoadingSpinner from "@/components/spinner/LoadingSpinner.vue";

const router = useRoute();
const showID = ref(getRouterParamsID(router.params));

watchEffect(async () => {
  const id = getRouterParamsID(router.params);
  if (id !== showID.value) {
    showID.value = id;
  }
});
</script>

<template>
  <Suspense>
    <template #default>
      <ShowPreviewCard :key="showID" :id="showID" />
    </template>
    <template #fallback>
      <LoadingSpinner></LoadingSpinner>
    </template>
  </Suspense>
</template>

<style></style>
