import { Languages } from '../domain/locale.interface'

const esLanguages: Languages['es'] = {
  api: {
    '200': 'Ok',
    '404': 'Página no encontrada',
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
      msg: 'Intentar typescript',
    },
  },
}

export default esLanguages
