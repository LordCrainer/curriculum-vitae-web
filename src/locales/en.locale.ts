import { Locale } from './locale.interface'

//解析单个文件
const msg = Object.entries(import.meta.globEager('/src/locales/en/*.ts')).map(([key, value]) => {
  return value.default
})
const traductions: Locale = msg.reduce((pre, cur) => {
  return { ...pre, ...cur }
}, {})
// ENGLISH TRANSLATE
export default traductions

// export default ['en', lang]
