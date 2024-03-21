<template>
  <SectionWrapper>
    <v-container fluid>
      <div class="lesson-wrapper__header d-flex justify-space-between w-100 mb-6">
        <h2 class="mb-3">
          <slot name="title" />
        </h2>
        <div>
          <slot name="action" />
        </div>
      </div>
      <div class="w-100 flex-column d-flex ga-5 justify-center align-center">
        <slot name="content" />
      </div>
    </v-container>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { SectionWrapper } from '~/components/ui/sectionWrapper'
</script>

<style scoped lang="scss">
.lesson-wrapper {
  &__content {
    width: 100%;
    min-width: 320px;
    max-width: 800px;
    margin-top: 30px;
  }
}
</style>
