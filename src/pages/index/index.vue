<template>
  <q-page>
    <OwnHome style="height: 100vh"></OwnHome>
    <Aboutme style="height: 100vh"></Aboutme>
  </q-page>
</template>

<script setup="props, { emit }" lang="ts">
  import Aboutme from 'src/components/home/aboutme.vue'
  import OwnHome from 'src/components/home/ownHome.vue'
</script>
