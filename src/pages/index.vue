<template>
  <div class="column">
    <div class="row flex-center pa-4">
      <h1>Prueba</h1>
      <img class="pa-5" alt="Vue logo" src="/src/assets/img/logo.png" @click="getUser" />
    </div>
    <waveAnimation></waveAnimation>
  </div>
</template>

<script setup="props, { emit }" lang="ts">
  import { useI18n } from 'vue-i18n'
  import waveAnimation from 'src/api/user/components/waveAnimation.vue'
  import { matLanguage } from '@quasar/extras/material-icons'
  import { userApi } from 'src/api/user/user.api'
  import HelloWorld from 'src/components/HelloWorld.vue'
  import { defineAsyncComponent } from 'vue'
  import { ref } from 'vue'
  import { User } from 'src/api/user/user.interface'

  // import CustomInput from 'src/components/CustomInput.vue'
  //Async Components
  // const AsyncInput = defineAsyncComponent(() => import('src/components/CustomInput.vue'))

  const { t, locale, availableLocales } = useI18n()

  const emit = defineEmits(['update'])
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