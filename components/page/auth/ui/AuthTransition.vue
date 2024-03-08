<template>
  <transition name="toggle-fade">
    <div v-if="show">
      <slot />
    </div>
  </transition>
</template>
<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
</script>
