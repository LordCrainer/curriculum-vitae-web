/**
 * use vue-i18n-next and  vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 */
import { Languages } from 'src/locales/locale.interface'
import { createI18n, I18nOptions } from 'vue-i18n'
const localesList = Object.entries(import.meta.globEager('/src/locales/*.locale.ts')).map(
  ([key, value]) => {
    const nameFile = key.split('/').slice(-1)[0]
    const locale = nameFile.slice(0, 2)
    return [locale, value.default]
  }
)
const messages = Object.fromEntries(localesList)

export const install = (app: any) => {
  const i18n = createI18n({
    locale: 'es',
    messages,
  })
  app.use(i18n)
}
