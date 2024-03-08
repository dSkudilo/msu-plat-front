<template>
  <div class="search">
    <input
      v-model="value"
      class="search-input pa-2 pl-5"
      type="text"
      placeholder="Поиск..."
      color="primary"
    >
  </div>
</template>
<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
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
.search {
  width: 100%;
  height: 100%;
  &-input {
    width: 100%;
    height: 100%;
    z-index: 10;
    &:focus {
      outline:none;
    }
  }
}
</style>
