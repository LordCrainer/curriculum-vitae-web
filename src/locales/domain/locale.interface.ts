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

