<script setup lang="ts">
  import RokuControl from '../components/rokuControlDevice.vue'
</script>
<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <div class="v-container">
    <div class="v-row">
      <div class="v-col-md-2 v-col-2"></div>
      <div class="v-col-md-8 v-col-8">
        <div class="mb-8">
          <RokuControl/>
        </div>
        <div class="mb-8">
          <RokuControl/>
        </div>
        <div class="mb-8">
          <RokuControl/>
        </div>
      </div>
      <div class="v-col-md-2 v-col-2"></div>
    </div>
  </div>
</template>