<template>
  <v-switch
    v-bind="$attrs"
    v-model="value"
    :label="label"
    :color="color"
  />
</template>
<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [Boolean, String],
    default: false
  },
  color: {
    type: String,
    default: 'primary'
  },
  label: {
    type: String,
    default: ''
  }
})

const value = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>
