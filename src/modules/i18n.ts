/**
 * use vue-i18n-next and  vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 */
import { Languages, LocaleSort } from 'src/locales/domain/locale.interface'
import { createI18n, I18nOptions } from 'vue-i18n'
import { DefineLocaleMessage } from 'vue-i18n'

const localesList = Object.entries(import.meta.globEager('/src/locales/languages/*.ts')).map(
  ([key, value]) => {
    const nameFile = key.split('.')[0].slice(-2)
    return [nameFile, value.default]
  }
)

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends LocaleSort {}
}

export const traductions = Object.fromEntries(localesList)

export const install = (app: any) => {
  const i18n = createI18n({
    locale: 'es',
    messages: traductions,
  })

  app.use(i18n)
}
