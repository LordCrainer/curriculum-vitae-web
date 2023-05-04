<template>
  <q-list bordered separator class="min-w-25 pa-4">
    <template v-for="(item, index) in props.generatedRoutes">
      <q-item clickable :key="index" v-if="item.name != 'index'" class="flex-col">
        <q-item-section class="cursor-pointer" @click="router.push({ path: item.path })">
          {{ item.name }}
        </q-item-section>
      </q-item>
    </template>
  </q-list>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const props = defineProps<{ generatedRoutes: any[] }>()
  const router = useRouter()
</script>
