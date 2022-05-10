/**
 * use vue-i18n-next and  vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 */
import { createI18n } from 'vue-i18n'
const localesList = Object.entries(import.meta.globEager('/src/locales/languages/*.ts')).map(
  ([key, value]) => {
    const nameFile = key.split('.')[0].slice(-2)
    return [nameFile, value.default]
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
