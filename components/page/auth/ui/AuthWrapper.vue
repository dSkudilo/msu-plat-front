<template>
  <div class="d-flex justify-center align-center bg-info h-100 w-100 auth">
    <div class="auth-card pa-2">
      <slot name="card" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.auth {
  position: relative;
  &-card {
    max-width: 480px;
    min-width: 320px;
    width: 100%;
    z-index: 1;
  }
}
</style>
