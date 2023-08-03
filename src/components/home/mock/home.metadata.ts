interface TimeLineIModel {
  title: string
  subtitle: string
  avatar: string
  body: string | string[]
  classes: string[]
}
export const homeMetadata: Partial<TimeLineIModel>[] = [
  {
    body: '2023',
    classes: ['text-h3'],
  },
  {
    title: 'NextGen S.A. | Freelancer',
    subtitle: '(2023 - 2021) Líder Técnico, desarrollador y diseñador UI',
    body: [
      "Líder técnico en múltiples proyectos, supervisando y dirigiendo un equipo de 4+ Desarrolladores.",
      "Desarrollo de proyecto utilizando arquitectura serverless en Aws Lambda. Creación de 1 Mill+ registros por petición.",
      "Desarrollo de proyecto utilizando HTTP y MQTT para la comunicación entre hardware y software.",
      "Desarrollo y diseño UI de plataformas web.",
      "La estructura modular y ciertos conocimientos de la arquitectura hexagonal ayudaron a facilitar la creación de microservicios.",
      "Propuse e implenté entornos de desarrollo, estructura Modular, Arquitectura Hexagonal y Docker en diversos proyectos. Incluso fomenté el código limpio.",
      "Capacitación en SAP Cloud Studio para SAP ByD."
    ],
  },
  {
    title: 'Lanubetv S.A. | Freelancer',
    subtitle: '(2023 - 2019) Asesor de software.',
    body: [
      'Desarrollé y diseñé nuevos servicios para notificación y Transcoding.',
      'Rediseñé la página web y realicé diseños de folletos.',
      'Migración de toda la infraestructura de un proveedor externo a DigitalOcean.',
      'Disminuí un 50% del costo de infraestructura',
      'Transcoding manual a semi-automático (1h => 4min)',
      'Desacoplamiento de la BD a un nuevo servidor.',
      'Propuse e implenté el entorno de desarrollo (dev) y Docker.', "Tech: [Docker, Avis Media, Ffmpeg, Vue, Illustrator, Figma, DigitalOcean]"
    ]
  },
  {
    title: 'Freelancer',
    subtitle: '(2023 - 2019) Diseñador UI.',
    body: [
      'Diseño de páginas web, aplicaciones móviles y folletos',
    ]
  },
]

export const mappedHomeMetadata = (metadata: Partial<TimeLineIModel>[]) => {
  return metadata.map((data) => {
    const { classes = [], body = '', ...otherData } = data
    const mappedAttr = classes.reduce((acc, current) => {
      acc[current] = true
      return acc
    }, {} as Record<string, any>)
    const bodyString = Array.from([body]).flat()
    return {
      ...otherData,
      body: bodyString,
      classes: mappedAttr,
    }
  })
}