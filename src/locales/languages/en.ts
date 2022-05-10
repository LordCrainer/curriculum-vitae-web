import { Languages } from '../domain/locale.interface'

const enLanguages: Languages['en'] = {
  api: {
    '200': 'Ok',
    '404': 'Not Found',
  },
  states: {
    user: {
      created: '',
      deleted: '',
      disabled: '',
      updated: '',
    },
  },
  pages: {
    index: {
      msg: 'Try typescript',
    },
  },
}

export default enLanguages
