<template>
  <CoursesCeateLeassonWrapper>
    <template #title>
      Уроки
    </template>
    <template #action>
      <SimpleButton>
        Создать урок
      </SimpleButton>
    </template>
    <template #content>
      <SimpleCard v-for="item in 6" :key="item" class="w-75 pa-5 cursor-pointer v-card--hover">
        kek
      </SimpleCard>
    </template>
  </CoursesCeateLeassonWrapper>
</template>
<script setup lang="ts">
import CoursesCeateLeassonWrapper from '~/components/page/courses/ui/leeson/CoursesCeateLeassonWrapper.vue'
import { SimpleCard } from '@/components/ui/simpleCard'
import { SimpleButton } from '@/components/ui/buttons/simpleButton'
</script>
