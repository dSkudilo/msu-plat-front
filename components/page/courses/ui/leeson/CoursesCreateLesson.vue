<template>
  <div>
    <CoursesCreateLessonWrapper>
      <template #title>
        Уроки
      </template>
      <template #action>
        <SimpleButton @click="openModal">
          Создать урок
        </SimpleButton>
      </template>
      <template #content>
        <InfinityTable
          :header="headers"
          :items="items"
        >
          <template #top>
            <v-toolbar flat>
              <v-toolbar-title>Список Уроков</v-toolbar-title>
            </v-toolbar>
          </template>
        </InfinityTable>
      </template>
    </CoursesCreateLessonWrapper>
    <ModalLayout v-model:visible="modalOpen">
      <template #title>
        Создание урока
      </template>
      <template #content>
        <SimpleInput v-model="lessonName" label="Название урока" class="mx-5" />
        <SimpleInput v-model="lessonNumber" label="Номер урока" class="mx-5" />
      </template>
      <template #actions>
        <SimpleButton>
          Создать
        </SimpleButton>
      </template>
    </ModalLayout>
  </div>
</template>

<script setup lang="ts">
import CoursesCreateLessonWrapper from '~/components/page/courses/ui/leeson/CoursesCreateLessonWrapper.vue'
import { SimpleButton } from '@/components/ui/buttons/simpleButton'
import InfinityTable from '~/components/widgets/infinityTable/InfinityTable.vue'
import { ModalLayout } from '@/components/ui/modalLayout'
import { SimpleInput } from '@/components/ui/form/simpleInput'
import { useStateCourses } from '@/components/page/courses/model/useStateCourses'
const {
  lessonNumber,
  lessonName,
  items,
  headers,
  modalOpen,
  openModal
} = useStateCourses()
</script>

<style>
.courses-create{}
</style>
