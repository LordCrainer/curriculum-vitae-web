import { Locale } from './locale.interface'

const msg = Object.entries(import.meta.globEager('/src/locales/es/*.ts')).map(([key, value]) => {
  return value.default
})

const traductions: Locale = msg.reduce((pre, cur) => {
  return { ...pre, ...cur }
}, {})

// SPANISH TRANSLATE
export default traductions

// export default ['en', lang]
