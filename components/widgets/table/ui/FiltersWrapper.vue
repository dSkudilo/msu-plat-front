<template>
  <div class="filters-wrapper pa-2">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.filters {
  &-wrapper {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
  }
}

</style>
