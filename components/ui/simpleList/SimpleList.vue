<template>
  <v-list>
    <v-list-item
      v-for="(item, id) in list"
      :key="typeof item === 'object' ? item[idName] : id"
      :value="typeof item === 'object' ? item[fieldName] : item"
      :color="color"
      @click="emit('click', {item, id})"
    >
      <v-list-item-title
        v-text="typeof item === 'object' ? item[fieldName] : item"
      />
    </v-list-item>
  </v-list>
</template>
<script setup>
const emit = defineEmits(['click'])
const props = defineProps({
  list: {
    type: Array,
    default: () => ([])
  },
  fieldName: {
    type: String,
    default: 'name'
  },
  idName: {
    type: String,
    default: 'id'
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>
