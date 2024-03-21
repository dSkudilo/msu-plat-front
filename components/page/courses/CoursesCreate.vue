<template>
  <CoursesCreateLayout>
    <template #tabs>
      <SimpleTabs :tabs="tabs" />
    </template>
    <template #content>
      <component
        :is="activeTab.component"
      />
    </template>
  </CoursesCreateLayout>
</template>
<script setup lang="ts">
import CoursesCreateInfo from '~/components/page/courses/ui/info/CoursesCreateInfo.vue'
import CoursesCreateLesson from '~/components/page/courses/ui/leeson/CoursesCreateLesson.vue'
import CoursesCreateLayout from '~/components/page/courses/ui/CoursesCreateLayout.vue'
import { SimpleTabs } from '~/components/ui/simpleTabs'

const tabs = [
  { id: 1, value: 'info', name: 'Информация', component: CoursesCreateInfo },
  { id: 1, value: 'info', name: 'Уроки', component: CoursesCreateLesson }
]

const activeTab = ref(tabs[1])
</script>
