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
    jobs: {
      title: 'Jobs',
    },
    contact: {
      title: "Contact"
    }
  },
  layout: {
    tabs: {
      about: 'About',
      briefcase: 'briefcase',
      home: 'home',
      jobs: 'Jobs',
      contact: "Contact"
    },
  },
  words: {
    me: 'me',
  },
}

export default enLanguages
