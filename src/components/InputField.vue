<script lang="ts">
import { defineComponent } from 'vue'
import { TypingText, CharState } from '../classes/TypingClasses'
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
      started: false,
      startTime: 0,
      wpm: 0,
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
      const now = Date.now() - this.startTime
      this.wpm = Math.floor(this.targetText.length / 5 / (now / 60000))
      this.targetText.eval(this.value)
      if (!this.started) {
        this.startTime = Date.now()
        this.started = true
      }
      if (this.targetText.lastCharState == CharState.Correct) {
        this.progression =
          (this.targetText.prevLength / this.targetText.length) * 100
      }
      return
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
      <v-col cols="3">
        <div
          class="ma-auto"
          style="max-width: 300px"
        />
      </v-col>
      <v-col cols="6">
        <div class="text-h4 , active && text-center">
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
            color="primary "
            @input="checkInput"
          />
          <v-input v-model="wpm">
            {{ wpm }}
          </v-input>
        </div>
        <v-progress-linear
          v-model="progression"
          :color="color"
          height="20"
          absolute
        />
      </v-col>
    </v-row>
    <div class="text-center ma-2">
      <v-snackbar v-model="targetText.completed">
        You finished with {{ wpm }} wpm!
        <template #action="{ attrs }" />
      </v-snackbar>
    </div>
  </v-container>
</template>

<style>
.center {
  text-align: center;
}
</style>
