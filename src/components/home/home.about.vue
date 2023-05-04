<template>
  <div class="column justify-around no-wrap" style="height: inherit">
    <div class="row justify-around items-center pa-4 no-wrap">
      <div class="text-h3 text-secondary pa-4">{{ t('pages.about.title') }}</div>
    </div>
    <div class="row justify-around">
      <div
        v-for="item in thinks"
        class="column text-wrapper text-white col-3 justify-center"
        style="max-width: 300px">
        <img class="pa-3" alt="Vue logo" src="/src/assets/img/logo.png" />
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  // Locale
  const { t } = useI18n()
  const thinks = [
    {
      name: '',
      description:
        'Aplicando el método Kayzen en mi vida. Con el fin de ir mejorando continuamente y superándome cada día.',
      icon: '',
    },
    {
      name: '',
      description:
        'Aplicando el método Kayzen en mi vida. Con el fin de ir mejorando continuamente y superándome cada día.',
      icon: '',
    },
    {
      name: '',
      description:
        'Aplicando el método Kayzen en mi vida. Con el fin de ir mejorando continuamente y superándome cada día.',
      icon: '',
    },
  ]
</script>

<style scoped></style>
