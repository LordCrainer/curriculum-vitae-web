<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white text-left">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar square size="48px">
            <!-- <q-img src="/src/assets/img/cagm_white.svg" spinner-color="white" style="height: 54px; max-width: 150px"/> -->
            <img src="/src/assets/img/cagm_white.svg" />
          </q-avatar>
          <!-- Curriculum Vitae -->
        </q-toolbar-title>
        <q-space />

        <q-select v-model="locale" :options="availableLocales" label="label">
          <!-- <template v-slot:prepend>
            <q-icon :name="matLanguage" />
          </template> -->
        </q-select>

        <q-tabs v-model="tab" shrink>
          <q-tab
            v-for="tab in tabsList"
            :key="tab.slug"
            :name="tab.slug"
            :label="t(`layout.tabs.${tab.slug}`)"
            @click="router.push({ path: tab.path })" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-list bordered separator class="min-w-25 pa-4">
        <template v-for="(item, index) in generatedRoutes">
          <q-item clickable :key="index" v-if="item.name != 'index'" class="flex-col">
            <q-item-section class="cursor-pointer" @click="router.push({ path: item.path })">
              {{ item.name }}
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- <div class="py-2 mx-auto text-center text-sm">[Default Layout]</div> -->
      <router-view v-slot="{ Component }">
        <!-- <transition name="slide-fade" mode="out-in"> -->
        <component :is="Component" />
        <!-- </transition> -->
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { matLanguage } from '@quasar/extras/material-icons'
  import { Ref, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'
  import generatedRoutes from '~pages'
  const { t, locale, availableLocales } = useI18n()
  const router = useRouter()
  interface Tabs {
    name: string
    slug: string
    path: string
  }
  const tab = ref('')
  const tabsList: Ref<Tabs[]> = ref([
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
