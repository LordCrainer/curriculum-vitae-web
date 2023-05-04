<template>
  <q-page>
    <HomeInit style="height: 100vh"></HomeInit>
    <HomeAbout class="background" style="height: 100vh"></HomeAbout>
    <HomeTimeline style="height: 100vh"></HomeTimeline>
    <HomeContact class="background" style="height: 100vh"></HomeContact>
  </q-page>
</template>

<script setup="props, { emit }" lang="ts">
  import HomeAbout from 'src/components/home/home.about.vue'
  import HomeContact from 'src/components/home/home.contact.vue'
  import HomeInit from 'src/components/home/home.init.vue'
  import HomeTimeline from 'src/components/home/home.timeline.vue'
</script>
<style lang="scss" scoped>
  .background {
    background-color: $primary;
  }
</style>
