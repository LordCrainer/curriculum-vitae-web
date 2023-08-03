<template>
  <q-layout view="hHh lpR fFf">
    <toolbar :tabs-list="tabsList">
      <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->
    </toolbar>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <!-- <transition name="slide-fade" mode="out-in"> -->
        <component :is="Component" />
        <!-- </transition> -->
      </router-view>
      <q-footer reveal elevated bordered>
        Prueba</q-footer>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// import { matLanguage } from '@quasar/extras/material-icons'
import { TabsList } from 'src/components/shared/layout/layout.interface'
import toolbar from 'src/components/shared/layout/toolbar.vue'
import { Ref, ref } from 'vue'

const tabsList: Ref<TabsList[]> = ref([
  {
    name: 'Home',
    slug: 'home',
    path: '/',
  },
  {
    name: 'Portafolio',
    slug: 'briefcase',
    path: '/briefcase',
  },
  {
    name: 'Sobre Mi',
    slug: 'about',
    path: '/about',
  },
])
const leftDrawerOpen = ref<boolean>(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<style lang="scss">
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
