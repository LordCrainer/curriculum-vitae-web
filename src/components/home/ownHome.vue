<template>
  <div class="column justify-around" style="height: inherit">
    <div class="row justify-around items-center pa-4 no-wrap">
      <div class="column text-wrapper justify-around">
        <div class="text-h3 text-secondary pa-4">{{ t('pages.home.iam') }}</div>
        <div class="text-h5 pa-4">{{ t('pages.home.slogan') }}</div>
      </div>
      <img class="pa-3" alt="Vue logo" src="/src/assets/img/logo.png" @click="getUser" />
    </div>
    <WaveAnimation></WaveAnimation>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import WaveAnimation from '../../components/shared/animation/waveAnimation.vue'
  import { useI18n } from 'vue-i18n'
  // Locale
  const { t } = useI18n()

  // Logic
  const count = ref<number>(0)
  const getUser = async () => {
    count.value++
    // await userApi.get(2).then((res) => {
    //   const user: User = res.data
    //   console.log('user', user)
    //   emit('update', user)
    // })
  }
</script>

<style scoped></style>
