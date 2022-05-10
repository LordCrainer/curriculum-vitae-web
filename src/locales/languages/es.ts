import { Languages } from '../domain/locale.interface'

const esLanguages: Languages['es'] = {
  api: {
    '200': 'Ok',
    '404': 'Página no encontrada',
  },
  states: {
    user: {
      created: 'Usuario creado',
      deleted: 'Usuario eliminado',
      disabled: 'Usuario deshabilitado',
      updated: 'Usuario actualizado',
    },
  },
  pages: {
    index: {
      msg: 'Intentar typescript',
    },
  },
}

export default esLanguages
