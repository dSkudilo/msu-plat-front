<template>
  <v-textarea
    v-model="value"
    v-bind="$attrs"
    rows="13"
    no-resize
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
  modelValue: {
    type: String,
    default: ''
  }
})

const value = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;
  height: 100%;
}
</style>
