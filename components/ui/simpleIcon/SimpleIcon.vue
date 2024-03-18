<template>
  <v-icon :icon="props.icon" :size="props.size" :color="props.color"/>
</template>
<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  }
})
</script>
