<template>
  <v-tabs v-model="activeTab">
    <v-tab v-for="tab in tabs" :key="tab.name" :value="tab.value">
      {{ tab.name }}
    </v-tab>
  </v-tabs>
</template>

<script setup>
const emit = defineEmits(['input'])

const props = defineProps({
  tabs: {
    type: Array,
    required: true
  }
})

const activeTab = ref(props.tabs[0].value)

watch(activeTab, () => emit('input', activeTab), { deep: true })
</script>
