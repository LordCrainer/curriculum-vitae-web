export interface PagesDefines {
  home: HomePage
  about: AboutPage
  briefcase: BriefCasePage
  jobs: JobsPage
  contact: PageMetadata
}

interface PageMetadata {
  title: string
}

interface HomePage {
  iam: string
  slogan: string
  knownlegdeArea: string
}
interface AboutPage extends PageMetadata {
}

interface BriefCasePage extends PageMetadata {
}

interface JobsPage extends PageMetadata {
}
