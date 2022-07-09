<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    }
  },
}
</script>

<template>
  <div class="center">
    <button @click="count++">
      {{ count }}
    </button>
  </div>
</template>

<style>
.center {
  display: flex;
  place-content: center;
}
</style>
