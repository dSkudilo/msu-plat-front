<template>
  <v-snackbar
    v-model="value"
    :timeout="timeout"
    :color="color"
    :elevation="elevation"
  >
    <div class="text-center">
      {{ message }}
    </div>
  </v-snackbar>
</template>
<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  color: {
    type: String,
    default: 'info'
  },
  message: {
    type: String,
    default: 'info'
  },
  timeout: {
    type: Number,
    default: 2000
  },
  elevation: {
    type: Number,
    default: 24
  },
  modelValue: {
    type: Boolean,
    default: false
  }

})
const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})
</script>
