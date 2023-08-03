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
    subtitle: '(2023 - 2021) Líder de proyectos, desarrollador y diseñador.',
    body: [
      'Líder técnico de dos proyectos (Monitoreo y Facturación)',
      'Desarrollo de un proyecto mediante serverless',
      'Implentación de Docker',
      'Propuesta de Arquitectura Hexagonal.',
      'Desarrollo y diseño de plataformas web',
      'Tech: [Angular, AWS Lambda, Docker, Hexagonal Arch, Node.js, Figma]',
    ],
  },
  {
    title: 'Lanubetv S.A. | Freelancer',
    subtitle: '(2023 - 2019) Asesor de software.',
    body: 'Hice algunas cosas',
  },
  {
    title: 'Diseñador',
    subtitle: 'Diseñador y Líder Técnico',
    body: 'Hice algunas cosas',
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