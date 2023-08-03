<template>
  <div class="column justify-around no-wrap" style="height: inherit">
    <div class="row justify-around items-center pa-4">
      <div class="text-h3 text-secondary pa-4">
        {{ translate("pages.contact.title") }}
      </div>
    </div>
    <div class="row pa-4 justify-around">
      <div class="row " v-for="item of socialNet" :key="item.label">
        <q-icon :color="item.color" size="4rem">
          <i :class="item.icon"></i>
        </q-icon>
        <div class="text-h6 text-white q-my-auto q-pa-md">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
// Locale
const { t: translate } = useI18n();

const socialNet = [
  {
    icon: "fa-brands fa-bounce fa-linkedin ",
    color: "white",
    url: "",
    label: "Linkedin"
  },
  {
    icon: "fa-brands fa-telegram ",
    color: "white",
    url: "",
    label: "Telegram"
  },
  {
    icon: "fa-brands fa-whatsapp ",
    color: "white",
    url: "",
    label: "Whatsapp"
  }
]
// const mappedData = mappedHomeMetadata(homeMetadata);
</script>

<style scoped>
.body {
  list-style-type: disc;
  /* Cambia 'disc' por otro valor para personalizar el tipo de bullet point */
}
</style>
