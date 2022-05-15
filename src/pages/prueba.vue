<template>
  <p>message: {{ t('messages.hello') }} </p>
  <p>currecy: {{ n(1000, 'currency') }}</p>
</template>

<script lang="ts">
  const enUS = {
    messages: {
      hello: 'Hello, {name}!',
    },
  }

  export type MessageSchema = typeof enUS
  type Locales = {
    en: MessageSchema
  }

  type GetDictValue<T extends string, O> = T extends `${infer A}.${infer B}`
    ? A extends keyof O
      ? GetDictValue<B, O[A]>
      : never
    : T extends keyof O
    ? O[T]
    : never

  type DeepKeys<T, S extends string> = T extends object
    ? S extends `${infer I1}.${infer I2}`
      ? I1 extends keyof T
        ? `${I1}.${DeepKeys<T[I1], I2>}`
        : keyof T & string
      : S extends keyof T
      ? `${S}`
      : keyof T & string
    : ''

  declare function translate<S extends string>(
    p: DeepKeys<MessageSchema, S>
  ): GetDictValue<S, MessageSchema>
//   translate('messages.hello')
  // define number format schema
  export type NumberSchema = {
    currency: {
      style: 'currency'
      currencyDisplay: 'symbol'
      currency: string
    }
  }

  import { defineComponent } from 'vue'
  import { LocaleMessageDictionary, useI18n, VueMessageType, createI18n } from 'vue-i18n'

  // import resource schema for global scope

  // define Vue component
  export default defineComponent({
    setup() {
      const { t, n } = useI18n({
        useScope: 'global',
        messages: {
          en: enUS,
        },
      })
      return {
        t: translate,
        n,
      }
    },
  })
</script>
