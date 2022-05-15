<template>
  <div class="column flex-center pa-4">
    <div class="row justify-center">
      <div class="text-h4 text-uppercase text-center">
        {{ t('layout.tabs.about') }} {{ t('words.me') }}
      </div>
    </div>
    <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-page-container>
        sobre mi
        <q-page padding>
          <p v-for="n in 15" :key="n">sobre mi</p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<style lang="scss" scoped></style>
