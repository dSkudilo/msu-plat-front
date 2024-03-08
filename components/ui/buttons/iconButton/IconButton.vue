<template>
  <v-btn
    v-bind="$attrs"
    :icon="icon"
    :color="color"
    :size="size"
  />
</template>
<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'x-small'
  },
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>
