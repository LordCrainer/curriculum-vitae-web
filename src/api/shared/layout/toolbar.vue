<template>
  <div>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <menuToolbarVue :generated-routes="generatedRoutes"></menuToolbarVue>
    </q-drawer>

    <q-header elevated class="bg-primary text-white text-left">
      <q-toolbar>
        <slot></slot>
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
            v-for="tabItem in props.tabsList"
            :key="tabItem.slug"
            :name="tabItem.slug"
            :label="t(`layout.tabs.${tabItem.slug}`)"
            @click="router.push({ path: tabItem.path })" />
        </q-tabs>
      </q-toolbar>
    </q-header>
  </div>
</template>
<script setup="props" lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRouter } from 'vue-router'
  import menuToolbarVue from 'src/api/shared/layout/menuToolbar.vue'
  import generatedRoutes from '~pages'
  const router = useRouter()

  const props = defineProps<{ tabsList: any; leftDrawerOpen?: boolean }>()

  const { t, locale, availableLocales } = useI18n()
  const tab = ref('')
  const leftDrawerOpen = ref<boolean>(false)
  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
</script>
