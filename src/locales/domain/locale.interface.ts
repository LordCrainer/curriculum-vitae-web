import { ApiResponseDefines } from './api.defines'
import { PagesDefines } from './page.defines'
import { StatesDefines } from './state.defines'

export interface Locale extends ApiResponseDefines, StatesDefines, PagesDefines {}

export interface LocaleSort {
  api: ApiResponseDefines
  states: StatesDefines
  pages: PagesDefines
}

export interface Languages {
  en: LocaleSort
  es: LocaleSort
}

// import { Locale } from './domain/locale.interface'

// //解析单个文件
// const msg = Object.entries(import.meta.globEager('/src/locales/languages/en.ts')).map(([key, value]) => {
//   return value.default
// })
// const traductions: Locale = msg.reduce((pre, cur) => {
//   return { ...pre, ...cur }
// }, {})
// // ENGLISH TRANSLATE
// export default traductions

// // export default ['en', lang]
