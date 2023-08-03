<template>
  <div class="column justify-around no-wrap" style="height: inherit">
    <div class="row justify-around items-center pa-4">
      <div class="text-h3 text-secondary pa-4">{{ translate('pages.jobs.title') }}</div>
    </div>
    <div class="row pa-4 justify-around">
      <div class="q-px-lg q-py-md">
        <q-timeline layout="loose" color="secondary">
          <template v-for="item in mappedData" :key="item">
            <q-timeline-entry v-if="Object.keys(item.classes).length > 0" heading :class="item.classes">
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
import { homeMetadata, mappedHomeMetadata } from 'src/components/home/mock/home.metadata'
// Locale
const { t: translate } = useI18n()


const mappedData = mappedHomeMetadata(homeMetadata)
</script>

<style scoped>
.body {
  list-style-type: disc;
  /* Cambia 'disc' por otro valor para personalizar el tipo de bullet point */
}
</style>
