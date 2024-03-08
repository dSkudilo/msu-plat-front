<template>
  <SimpleCard>
    <div class="pa-2">
      <div class="info-text">
        <p class="info-caption text-grey-darken-2">
          Имя пользователя:
        </p>
        {{ name }}
      </div>
    </div>
    <div class="info-action pa-1 d-flex justify-center align-center">
      <slot name="action" />
    </div>
  </SimpleCard>
</template>
<script setup>
import { SimpleCard } from '@/components/ui/simpleCard'
const props = defineProps({
  name: {
    type: String,
    default: '-'
  }
})
</script>
<style lang="scss" scoped>
.info {
  &-text {
    font-size: 0.7rem;
  }
  &-caption {
    font-size: 0.6rem;
  }
  &-action {
    border-top: 1px solid rgb(var(--v-theme-grey-lighten-3));
  }
}
</style>
