export interface PagesDefines {
  home: HomePage
  about: AboutPage
  briefcase: BriefCasePage
}

interface HomePage {
  iam: string
  slogan: string
  knownlegdeArea: string
}
interface AboutPage {
  title: string
}

interface BriefCasePage {
  title: string
}
