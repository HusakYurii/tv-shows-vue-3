<script setup lang="ts"></script>

<template>
  <div id="spinner">
    <span
      class="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
    Loading...
  </div>
</template>

<style scoped>
#spinner {
  position: absolute;
  left: 50%;
  top: 50vh;
  transform: translate(-50%, -50%);
}
</style>
