<template>
  <CoursesCreateInfoWrapper>
    <template #title>
      Создание курса
    </template>
    <template #main>
      <SimpleFileUploader />
    </template>
    <template #description>
      <SimpleTextArea />
    </template>
    <template #side>
      <SimpleFileUploader />
    </template>
    <template #bottom>
      <SimpleFileUploader />
    </template>
    <template #form>
      <CoursesCreateForm>
        <template #form>
          <SimpleInput
            label="Автор"
          />
          <SimpleInput
            label="Название курса"
          />
          <SimpleInput
            label="Стоимость курса"
          />
          <SimpleInput
            label="Учитель"
          />
        </template>
        <template #button>
          Сохранить курс
        </template>
      </CoursesCreateForm>
    </template>
  </CoursesCreateInfoWrapper>
</template>
<script setup lang="ts">
import CoursesCreateInfoWrapper from '~/components/page/courses/ui/info/CoursesCreateInfoWrapper.vue'
import { SimpleFileUploader } from '~/components/ui/simpleFileUploader'
import CoursesCreateForm from '~/components/page/courses/ui/coursesCreateForm/CoursesCreateWrapper.vue'
import { SimpleInput } from '~/components/ui/form/simpleInput'
import { SimpleTextArea } from '~/components/ui/form/simpleTextArea'

</script>
<style scoped lang="scss">
.curses {}
</style>
