<script lang="ts">
import { defineComponent } from 'vue'
import InputField from './components/InputField.vue'

export default defineComponent({
  name: 'App',

  components: {
    InputField,
  },

  data() {
    return {
      text: 'Danay er en kjernekar',
    }
  },
})
</script>

<template>
  <v-app>
    <v-main>
      <InputField :inputText="text" />
    </v-main>
  </v-app>
</template>
