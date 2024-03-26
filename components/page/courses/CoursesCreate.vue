<template>
  <CoursesCreateLayout>
    <template #tabs>
      <v-tabs v-model="activeTab" color="primary">
        <v-tab value="info">
          Информация
        </v-tab>
        <v-tab value="lesson">
          Уроки
        </v-tab>
      </v-tabs>
    </template>
    <template #content>
      <v-window v-model="activeTab">
        <v-window-item value="info">
          <CoursesCreateInfo />
        </v-window-item>
        <v-window-item value="lesson">
          <CoursesCreateLesson />
        </v-window-item>
      </v-window>
    </template>
  </CoursesCreateLayout>
</template>
<script setup lang="ts">
import { useStateCourses } from './model/useStateCourses'
import CoursesCreateInfo from '~/components/page/courses/ui/info/CoursesCreateInfo.vue'
import CoursesCreateLesson from '~/components/page/courses/ui/leeson/CoursesCreateLesson.vue'
import CoursesCreateLayout from '~/components/page/courses/ui/CoursesCreateLayout.vue'

const { activeTab } = useStateCourses()
</script>
