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
    home: {
      iam: 'Soy Carlos García!',
      slogan: 'Aprende, Desarrolla y Capacita',
      knownlegdeArea: 'Área de Conocimientos',
    },
    about: {
      title: 'Sobre Mí',
    },
    briefcase: {
      title: 'Portafolio',
    },
    jobs: {
      title: 'Trabajos',
    },
  },
  layout: {
    tabs: {
      about: 'Sobre',
      briefcase: 'Portafolio',
      home: 'Inicio',
      jobs: 'Trabajos',
    },
  },
  words: {
    me: 'mi',
  },
}

export default esLanguages
