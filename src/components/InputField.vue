<script lang="ts">
import { defineComponent } from 'vue'
import { TypingText } from '../classes/TypingClasses'
export default defineComponent({
  name: 'InputField',
  props: {
    inputText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      targetText: new TypingText(this.inputText),
      progression: 0,
      value: '',
      completed: false,
    }
  },
  computed: {
    color() {
      //TODO Make progression go from red to green
      return ['error', 'warning', 'success'][Math.floor(this.progression / 40)]
    },
  },
  methods: {
    checkInput() {
      this.targetText.eval(this.value)
      this.progression =
        (this.targetText.prevLength / this.targetText.length) * 100
    },
  },
})
</script>

<template>
  <v-container
    class="green"
    fluid
  >
    <v-row>
      <v-col cols="4">
        <div
          class="ma-auto"
          style="max-width: 300px"
        />
      </v-col>
      <v-col cols="4">
        <div
          class="center"
          style="max-width: 300px"
        >
          <template
            v-for="char in targetText.charList"
            :key="char"
          >
            <span :style="{ color: char.color }">
              {{ char.char }}
            </span>
          </template>
          <v-text-field
            v-model="value"
            color="cyan darken"
            label="Text field"
            placeholder="Start typing..."
            @input="checkInput"
          />
          <v-progress-linear
            v-model="progression"
            :color="color"
            height="20"
            absolute
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.center {
  text-align: center;
}
</style>
