<template>
  <div class="table">
    <div class="table-header">
      <slot name="header" />
    </div>
    <div class="table-listing">
      <slot name="listing" />
    </div>
    <div class="table-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  &-header {
    //max-height: 48px;
  }

  &-listing {
    flex: 1 1 auto;
  }

  &-footer {
    max-height: 48px;
    background-color: teal;
  }
}
</style>
