<script lang="ts">
import { TypingChar, CharState } from '@/classes/TypingClasses'
export default {
  props: {
    inputChar: {
      char: TypingChar,
      required: true,
    },
  },
  data() {
    return {
      state: CharState.Default,
    }
  },
}
</script>

<template>
  <span> {{ type.char }}</span>
</template>
