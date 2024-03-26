<template>
  <div class="infinity-wrapper">
    <slot class="infinity-wrapper__header" name="header" />
    <slot class="infinity-wrapper__table" name="top" />
    <slot class="infinity-wrapper__table" name="table" />
    <slot class="infinity-wrapper__action" name="action" />
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
.infinity-wrapper {
  width: 100%;
  max-width: 1400px;
  border-radius: 4px;

  &__header {
    margin-bottom: -50px;
  }
}
</style>
