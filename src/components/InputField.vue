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
      showCompleted: false,
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
      if (this.targetText.state == CharState.Correct) {
        this.progression =
          (this.targetText.prevLength / this.targetText.length) * 100
      }
      this.showCompleted = this.targetText.completed
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
        </div>
      </v-col>
      <v-progress-linear
        v-model="progression"
        :color="color"
        height="20"
        absolute
      />
      <div class="text-center ma-2">
        <v-snackbar v-model="showCompleted">
          You're finished!
          <template #action="{ attrs }">
            <v-btn
              color="pink"
              text
              v-bind="attrs"
              @click="showCompleted = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-row>
  </v-container>
</template>

<style>
.center {
  text-align: center;
}
</style>
