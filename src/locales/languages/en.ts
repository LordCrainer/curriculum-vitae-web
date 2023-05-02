import { Languages } from '../domain/locale.interface'

const enLanguages: Languages['en'] = {
  api: {
    '200': 'Ok',
    '404': 'Not Found',
  },
  states: {
    user: {
      created: 'Created User',
      deleted: 'Deleted User',
      disabled: 'Disabled User',
      updated: 'Updated User',
    },
  },
  pages: {
    home: {
      iam: "I'm Carlos García!",
      slogan: 'Learn, Develop and Teach',
      knownlegdeArea: 'Knownledge Area',
    },
    about: {
      title: 'About Me',
    },
    briefcase: {
      title: 'BriefCase',
    },
  },
  layout: {
    tabs: {
      about: 'About',
      briefcase: 'briefcase',
      home: 'home',
    },
  },
  words: {
    me: 'me',
  },
}

export default enLanguages
