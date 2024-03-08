<template>
  <div class="header">
    <!--    <slot name="search" />-->
    <!--    <slot name="filters" />-->
    <!--    <slot name="actions" />-->
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: 100%;

  border-top: 1px solid rgb(var(--v-theme-grey-lighten-1));
  border-left: 1px solid rgb(var(--v-theme-grey-lighten-1));

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
}

</style>
