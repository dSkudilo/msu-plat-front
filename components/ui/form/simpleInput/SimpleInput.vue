<template>
  <v-text-field
    v-model="value"
    v-maska:[options]
    v-bind="$attrs"
    color="primary-darken-1"
    :variant="variant"
    :density="density"
  />
</template>
<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  variant: {
    type: String,
    default: 'outlined'
  },
  color: {
    type: String,
    default: 'primary'
  },
  density: {
    type: String,
    default: 'compact'
  },
  mask: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const options = computed(() => props.mask ? { mask: props.mask } : '')

const value = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>
