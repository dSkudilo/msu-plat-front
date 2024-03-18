<template>
  <div class="d-flex flex-column align-center h-100 w-100">
    <slot name="title" />
    <div class="main-cards pa-2">
      <slot name="cards" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  &-cards {
   display: flex;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>

