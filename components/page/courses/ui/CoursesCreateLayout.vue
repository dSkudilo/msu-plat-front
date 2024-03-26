<template>
  <div class="courses-create-layout mb-2">
    <div class="courses-create-layout__tabs my-3 d-flex justify-start ml-6">
      <slot name="tabs" />
    </div>
    <div class="courses-create-layout__content">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.courses-create-layout {
  width: 100%;
  max-width: 1400px;
  height: 100%;
}
</style>
