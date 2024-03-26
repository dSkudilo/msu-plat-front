<template>
  <div>
    <MainWrapper>
      <template #title>
        <MainTitle text="Меню" />
      </template>
      <template #cards>
        <simple-card v-for="card in CardsContent" :key="card.slug">
          <MainCard>
            <template #icon>
              <SimpleIcon :icon="card.icon" :color="card.color" />
            </template>
            <template #title>
              {{ card.title }}
            </template>
          </MainCard>
        </simple-card>
      </template>
    </MainWrapper>
    />
  </div>
</template>
<script setup lang="ts">
import MainWrapper from '~/components/page/main/ui/MainWrapper.vue'
import MainTitle from '~/components/page/main/ui/MainTitle.vue'
import { useStateMain } from '~/components/page/main/model/useStateMain'
import MainCard from '~/components/page/main/ui/MainCard.vue'
import SimpleCard from '~/components/ui/simpleCard/SimpleCard.vue'
import SimpleIcon from '~/components/ui/simpleIcon/SimpleIcon.vue'

const {
  CardsContent
} = useStateMain()
</script>
