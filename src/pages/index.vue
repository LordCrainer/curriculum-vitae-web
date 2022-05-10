<template>
  <div class="column flex-center pa-4">
    <div class="w-20% text-right">
      <q-select v-model="locale" :options="availableLocales" label="choose your language">
        <template v-slot:prepend>
          <q-icon :name="matLanguage" />
        </template>
      </q-select>
    </div>

    <img class="pa-5" alt="Vue logo" src="/src/assets/img/logo.png" @click="getUser" />
    <HelloWorld :msg="t('pages.index.msg')" />
    <span class="accent-color"> 22 </span>
    {{ count }}
    <AsyncInput v-model="count" />
  </div>
</template>

<script setup="props, { emit }" lang="ts">
  import { useI18n } from 'vue-i18n'

  import { matLanguage } from '@quasar/extras/material-icons'
  import { userApi } from 'src/api/user/user.api'
  import HelloWorld from 'src/components/HelloWorld.vue'
  import { defineAsyncComponent } from 'vue'
  import { ref } from 'vue'
  import { User } from 'src/api/user/user.interface'
  import { LocaleSort, Languages } from 'src/locales/domain/locale.interface'

  // import CustomInput from 'src/components/CustomInput.vue'
  //Async Components
  const AsyncInput = defineAsyncComponent(() => import('src/components/CustomInput.vue'))

  const { t, locale, availableLocales } = useI18n()

  const emit = defineEmits(['update'])

  const getUser = (): void => {
    userApi.get(2).then((res) => {
      const user: User = res.data
      emit('update', user)
    })
  }

  const count = ref<string | null>(null)
</script>

<style lang="scss" scoped></style>
