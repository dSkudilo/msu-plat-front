<template>
  <div class="action">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.action {
  border-left: 1px solid rgb(var(--v-theme-grey-lighten-1));
  z-index: -1;
}
</style>
