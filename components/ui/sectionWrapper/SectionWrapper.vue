<template>
  <section class="section-wrapper">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.section-wrapper {
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.07);
}
</style>
