<template>
  <CoursesCreateWrapper>
    <template #title>
      Создание курса
    </template>
    <template #main>
      <SimpleFileUploader />
    </template>
    <template #description>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi architecto asperiores cumque deleniti enim et exercitationem facere, ipsa nemo officia praesentium recusandae rerum ullam vel vitae voluptas? Eum, illo.
    </template>
    <template #side>
      <SimpleFileUploader />
    </template>
    <template #bottom>
      <SimpleFileUploader />
    </template>
  </CoursesCreateWrapper>
</template>
<script setup lang="ts">
import CoursesCreateWrapper from '~/components/page/courses/ui/info/CoursesCreateInfoWrapper.vue'
import { SimpleFileUploader } from '~/components/ui/simpleFileUploader'
</script>
