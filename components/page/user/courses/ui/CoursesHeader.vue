<template>
  <div class="w-100 align-center d-flex justify-space-between">
    <h2>
      <slot name="title" />
    </h2>
    <div class="courses-header d-flex align-center justify-space-around">
      <slot name="actions" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.courses-header {
  gap: 10px;
}
</style>
