<template>
  <CoursesWrapper>
    <template #header>
      <CoursesHeader>
        <template #title>
          Список курсов
        </template>
        <template #actions>
          <SimpleButton>
            Фильтр
          </SimpleButton>
          <SimpleButton>
            Добавить курс
          </SimpleButton>
        </template>
      </CoursesHeader>
    </template>
    <template #content>
      <CoursesListing>
        <template #list>
          <v-row>
            <v-col v-for="item in 6" :key="item" cols="12" sm="6" md="3">
              <CoursesCard>
                <template #action>
                  <SimpleButton size="small">
                    Куплено
                  </SimpleButton>
                </template>
              </CoursesCard>
            </v-col>
          </v-row>
        </template>
      </CoursesListing>
    </template>
    <template #footer>
      <SimplePagination :length="10" />
    </template>
  </CoursesWrapper>
</template>

<script setup>
import CoursesWrapper from '@/components/page/user/courses/ui/CouesesWrapper.vue'
import CoursesHeader from '@/components/page/user/courses/ui/CoursesHeader.vue'
import { SimplePagination } from '@/components/ui/simplePagination'
import SimpleButton from '~/components/ui/buttons/simpleButton/SimpleButton.vue'
import CoursesListing from '~/components/page/user/courses/ui/CoursesListing.vue'
import CoursesCard from '~/components/page/user/courses/ui/CoursesCard.vue'
</script>
