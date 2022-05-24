/**
 * use vue-i18n-next and  vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 * https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 */
import { Languages, LocaleSort } from 'src/locales/domain/locale.interface'
import { createI18n, I18nOptions } from 'vue-i18n'
// import { DefineLocaleMessage } from 'vue-i18n'

const localesList = Object.entries(import.meta.globEager('/src/locales/languages/*.ts')).map(
  ([key, value]) => {
    const nameFile = key.split('.')[0].slice(-2)
    return [nameFile, value.default]
  }
)
type DeepKeys<T, S extends string> = T extends object
  ? S extends `${infer I1}.${infer I2}`
    ? I1 extends keyof T
      ? `${I1}.${DeepKeys<T[I1], I2>}`
      : keyof T & string
    : S extends keyof T
    ? `${S}`
    : keyof T & string
  : ''

type GetDictValue<T extends string, O> = T extends `${infer A}.${infer B}`
  ? A extends keyof O
    ? GetDictValue<B, O[A]>
    : never
  : T extends keyof O
  ? O[T]
  : never
  declare module 'vue-i18n' {

  export interface DefineLocaleMessage extends LocaleSort {}
  // export const data = ""
}

export const traductions = Object.fromEntries(localesList)

export const install = (app: any) => {
  const i18n = createI18n({
    locale: 'es',
    messages: traductions,
  })

  app.use(i18n)
}
