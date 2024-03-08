<template>
  <div class="d-flex">
    <div class="user-profile py-1 px-2 rounded-pill">
      <slot name="profile" />
    </div>
    <slot name="menu" />
  </div>
</template>
<style lang="scss" scoped>
.user {
  &-profile {
    transition: 0.3s ease background-color;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: rgb(var(--v-theme-primary-darken-2));
    }
  }
}
</style>
