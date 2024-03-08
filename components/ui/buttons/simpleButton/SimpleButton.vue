<template>
  <v-btn
    v-bind="$attrs"
    :variant="variant"
    :color="color"
  >
    <template #prepend>
      <slot name="prepend" />
    </template>
    <template #append>
      <slot name="append" />
    </template>
    <slot />
  </v-btn>
</template>
<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'flat'
  },
  color: {
    type: String,
    default: 'primary'
  },
  icon: {
    type: String,
    default: 'primary'
  }
})
</script>
