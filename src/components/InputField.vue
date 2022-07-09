<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputField',
  props: {
    inputText: String,
  },
  data() {
    return {
      inputValue: this.inputText || '',
      interval: 0,
      progression: 0,
      value: '',
    }
  },
  computed: {
    color() {
      return ['error', 'warning', 'success'][Math.floor(this.progression / 40)]
    },
  },
  methods: {
    checkInput() {
      this.progression = (this.value.length / this.inputValue.length) * 100
    },
  }
})
</script>

<template>
  <v-container class="green lighten-2" fluid>
    <v-row>
      <v-col cols="4">
        <div class="ma-auto" style="max-width: 300px">
          <v-input>{{ inputValue }}</v-input>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="ma-auto" style="max-width: 300px">
          <v-text-field
            v-model="value"
            color="cyan darken"
            label="Text field"
            placeholder="Start typing..."
            @input="checkInput"
          >
            <v-progress-linear
              v-model="progression"
              color="red"
              :height="progression"
              absolute
            />
          </v-text-field>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.center {
  display: flex;
  place-content: center;
}
</style>
