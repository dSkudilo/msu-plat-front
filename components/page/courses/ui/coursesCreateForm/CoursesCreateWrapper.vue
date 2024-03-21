<template>
  <form class="form__wrapper" @submit.prevent>
    <div class="form">
      <slot class="form__item" name="form" />
    </div>
    <SimpleButton>
      <slot name="button" />
    </SimpleButton>
  </form>
</template>
<script setup lang="ts">
import { SimpleButton } from '~/components/ui/buttons/simpleButton'
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: 800px;

  &__item {
    width: 100%;
  }

  &__wrapper {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
}
</style>
