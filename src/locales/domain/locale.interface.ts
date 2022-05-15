import { ApiResponseDefines } from './api.defines'
import { PagesDefines } from './page.defines'
import { StatesDefines } from './state.defines'

export interface Locale extends ApiResponseDefines, StatesDefines, PagesDefines {}

export interface LocaleSort {
  api: ApiResponseDefines
  states: StatesDefines
  pages: PagesDefines
  layout: LayoutDefines
  words: WordsDefines
}

interface WordsDefines {
  me: string
}
export interface Languages {
  en: LocaleSort
  es: LocaleSort
}

interface LayoutDefines {
  tabs: TabsDefines
}

interface TabsDefines {
  home: string
  briefcase: string
  about: string
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
