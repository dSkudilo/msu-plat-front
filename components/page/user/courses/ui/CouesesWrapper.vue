<template>
  <div class="courses-wrapper">
    <div class="mb-10">
      <slot class="mb-10" name="header" />
    </div>
    <slot name="content" />
    <div class="mt-10">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<style>
.courses-wrapper {
  width: 100%;
  height: 100%;
}
</style>
