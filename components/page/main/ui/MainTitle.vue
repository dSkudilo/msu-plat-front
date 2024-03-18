<template>
  <v-card-title class="text-h3">
    {{ text }}
  </v-card-title>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>
