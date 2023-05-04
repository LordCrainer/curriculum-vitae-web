<template>
  <div class="column justify-around no-wrap" style="height: inherit">
    <div class="row justify-around items-center pa-4">
      <div class="text-h3 text-secondary pa-4">{{ t('pages.jobs.title') }}</div>
    </div>
    <div class="row pa-4 justify-around">
      <div class="q-px-lg q-py-md">
        <q-timeline dark color="secondary">
          <template v-for="item in mappedData" :key="item">
            <q-timeline-entry
              v-if="Object.keys(item.classes).length > 0"
              heading
              :class="item.classes">
              {{ item.body[0] }}
            </q-timeline-entry>

            <q-timeline-entry v-else :title="item.title" :subtitle="item.subtitle">
              <li class="body" v-for="list in item.body" :key="list">
                {{ list }}
              </li>
              <template v-slot:title>
                <div class="text-h6">{{ item.title }}</div>
              </template>
            </q-timeline-entry>
          </template>
        </q-timeline>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  // Locale
  const { t } = useI18n()
  interface TimeLineIModel {
    title: string
    subtitle: string
    avatar: string
    body: string | string[]
    classes: string[]
  }
  const metadatas: Partial<TimeLineIModel>[] = [
    {
      body: '2023',
      classes: ['text-h3'],
    },
    {
      title: 'NextGen S.A.',
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
      title: 'Lanubetv S.A.',
      subtitle: '(2023 - 2019) Desarrollador, diseñador y técnico.',
      body: 'Hice algunas cosas',
    },
    {
      title: 'Diseñador',
      subtitle: 'Diseñador y Líder Técnico',
      body: 'Hice algunas cosas',
    },
  ]

  const mappedData = metadatas.map((data) => {
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
</script>

<style scoped>
  .body {
    list-style-type: disc;
    /* Cambia 'disc' por otro valor para personalizar el tipo de bullet point */
  }
</style>
