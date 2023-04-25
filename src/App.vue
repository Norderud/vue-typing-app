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
      text: 'Thomas Almestad er en kul fyr!',
      on: false,
    }
  },
})
</script>

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dense
      shaped
    >
      <v-app-bar-nav-icon />

      <v-toolbar-title>Typing App</v-toolbar-title>

      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <InputField :input-text="text" />
      </v-container>
    </v-main>
    <!-- <v-footer
      padless
      color="primary"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Typing app</strong>
      </v-col>
    </v-footer> -->
  </v-app>
</template>
