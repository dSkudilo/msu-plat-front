<template>
  <v-menu
    v-bind="$attrs"
    :max-width="maxWidth"
    :min-width="minWidth"
    :max-height="maxHeight"
    :offset="offset"
    :activator="activator"
    :transition="transition"
  >
    <slot />
  </v-menu>
</template>
<script setup>
const props = defineProps({
  maxWidth: {
    type: String,
    default: '320px'
  },
  minWidth: {
    type: String,
    default: '100px'
  },
  maxHeight: {
    type: String,
    default: '300px'
  },
  offset: {
    type: [String, Number, Array],
    default: () => ([5, 0])
  },
  activator: {
    type: String,
    default: 'parent'
  },
  transition: {
    type: String,
    default: 'slide-y-transition'
  }
})
</script>
