<template>
  <HomeInit style="height: 100vh"></HomeInit>
  <HomeAbout class="background" style="height: 100vh"></HomeAbout>
  <HomeTimeline style="height: 100vh"></HomeTimeline>
  <HomeContact class="background" style="height: 100vh"></HomeContact>
</template>

<script setup lang="ts">
import HomeAbout from 'src/components/home/view/home.about.vue'
import HomeContact from 'src/components/home/view/home.contact.vue'
import HomeInit from 'src/components/home/view/home.init.vue'
import HomeTimeline from 'src/components/home/view/home.timeline.vue'
</script>

<style lang="scss" scoped>
.background {
  background-color: $primary;
}
</style>