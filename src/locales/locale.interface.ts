export interface Languages {
  en: Locale
  es: Locale
}

export interface Locale extends ApiResponseDefines, StatesDefines, PagesDefines {}

export interface PagesDefines {
  index: IndexPage
}

interface IndexPage {
  msg: string
}

export interface ApiResponseDefines {
  404: string
  200: string
}

export interface StatesDefines {
  user: UserDefines
}

interface UserDefines {
  userDisable: string
}
