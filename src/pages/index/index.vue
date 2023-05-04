<template>
  <q-page>
    <HomeInit style="height: 100vh"></HomeInit>
    <HomeAbout style="height: 100vh"></HomeAbout>
    <HomeTimeline style="height: 100vh"></HomeTimeline>
  </q-page>
</template>

<script setup="props, { emit }" lang="ts">
  import HomeAbout from 'src/components/home/home.about.vue'
  import HomeInit from 'src/components/home/home.init.vue'
  import HomeTimeline from 'src/components/home/home.timeline.vue'
</script>
