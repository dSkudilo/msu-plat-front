<template>
  <div class="search-wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.search {
  &-wrapper {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
  }
}

</style>
