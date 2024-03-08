<template>
  <v-chip
    v-bind="$attrs"
    :color="color"
    :variant="variant"
    :closable="closable"
  >
    <slot />
  </v-chip>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  variant: {
    type: String,
    default: 'outlined'
  },
  closable: {
    type: Boolean,
    default: false
  }
})
</script>
