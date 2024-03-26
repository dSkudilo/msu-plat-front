<template>
  <SimpleCard class="courses-card">
    <div class="courses-card-image">
      <img src="https://placehold.jp/3d4070/ffffff/250x250.png" alt="test">
      <SimpleChip size="small" variant="elevated" color="green" class="courses-card-image__badge">
        куплено
      </SimpleChip>
    </div>
    <div class="courses-card__info pa-1">
      <div class="d-flex justify-end mb-1">
        <SimpleChip size="small">
          индивидуальный наставник
        </SimpleChip>
      </div>
      <h4 class="courses-card__title">
        Огэ первая часть экспресс курс
      </h4>
      <div class="courses-card__actions">
        <p class="courses-card__price">
          {{ currency(8700) }}
        </p>
        <slot name="action" />
      </div>
    </div>
  </SimpleCard>
</template>

<script setup>
import { currency } from '~/composables/currency.ts'
import { SimpleCard } from '@/components/ui/simpleCard'
import { SimpleChip } from '~/components/ui/chip'

</script>

<style lang="scss" scoped>
.courses-card {
  cursor: pointer;
  width: min-content;

  &__actions {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__price {
    font-weight: bold;
    font-size: 20px;
  }

  &-image {
    position: relative;

    &__badge {
      position: absolute;
      bottom: 15px;
      right: 5px;
    }
  }
}
</style>
