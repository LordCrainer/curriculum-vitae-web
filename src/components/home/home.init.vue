<template>
  <div class="column justify-around" style="height: inherit">
    <div class="row justify-around items-center pa-4 no-wrap">
      <div class="column text-wrapper justify-around">
        <div class="text-h3 text-secondary pa-4" @click="reset">{{ t('pages.home.iam') }}</div>
        <div class="text-h5 pa-4">
          {{ t('pages.home.slogan') }} <span v-if="count > 0">{{ count }}</span>
        </div>
      </div>
      <img class="pa-3" alt="Vue logo" src="/src/assets/img/logo.png" @click="getUser" />
    </div>
    <WaveAnimation></WaveAnimation>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import WaveAnimation from 'src/components/shared/animation/waveAnimation.vue'
  import { useI18n } from 'vue-i18n'
  // Locale
  const { t } = useI18n()

  // Logic
  const count = ref<number>(0)
  const getUser = () => {
    count.value++
  }
  const reset = () => {
    count.value = 0
  }
</script>

<style scoped></style>
