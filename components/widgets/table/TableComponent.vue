<template>
  <TableWrapper>
    <template #header>
      <HeaderWrapper>
        <SearchWrapper v-if="!isSearching && selectedFilters.length === 0">
          <SearchInput v-model="searchValue" @keyup.enter="searchingHandler" />
        </SearchWrapper>

        <FiltersWrapper v-else @click.stop>
          <SimpleChip v-if="searchValue" closable @click:close="clearSearching">
            {{ searchValue }}
          </SimpleChip>
          <SimpleChip
            v-for="item in selectedFilters"
            :key="item.id"
            closable
            @click:close="deleteFilter(item)"
          >
            <ChipTitle>
              {{ `${item.name}:` }}
            </ChipTitle>
            test value
          </SimpleChip>
        </FiltersWrapper>

        <SimpleMenu>
          <SimpleCard>
            <SimpleList
              :list="notSelectedFilters"
              @click="selectFilterHandler"
            />
          </SimpleCard>
        </SimpleMenu>

        <ActionWrapper class="pa-2" @click.stop>
          <slot name="actions" />
        </ActionWrapper>
      </HeaderWrapper>
    </template>
    <template #listing />
    <template #footer />
  </TableWrapper>
</template>
<script setup>
import TableWrapper from './ui/TableWrapper.vue'
import HeaderWrapper from './ui/HeaderWrapper.vue'
import ActionWrapper from './ui/ActionWrapper.vue'
import SearchInput from './ui/SearchInput.vue'
import SearchWrapper from './ui/SearchWrapper.vue'
import FiltersWrapper from './ui/FiltersWrapper.vue'
import ChipTitle from './ui/ChipTitle.vue'
import { SimpleChip } from '@/components/ui/chip'
import { SimpleMenu } from '@/components/ui/simpleMenu'
import { SimpleCard } from '@/components/ui/simpleCard'
import { SimpleList } from '@/components/ui/simpleList'

const searchValue = ref('')
const isSearching = ref(false)
const searchingHandler = () => {
  isSearching.value = true
}
const clearSearching = () => {
  isSearching.value = false
  searchValue.value = ''
}

const filtersList = ref([
  { id: 0, name: 'Имя1', query: '/api', list: [] },
  { id: 1, name: 'Фамилия' },
  { id: 2, name: 'Роль' },
  { id: 3, name: 'Телефон' },
  { id: 4, name: 'Учитель' }
])
const notSelectedFilters = computed(() => {
  return filtersList.value.filter(e => !selectedFilters.value.find(element => element.id === e.id))
})
const selectedFilters = ref([
])
const selectFilterHandler = (data) => {
  selectedFilters.value.push(data.item)
}
const deleteFilter = (data) => {
  const id = selectedFilters.value.findIndex(e => e.id === data.id)
  if (id === -1) { return }
  selectedFilters.value.splice(id, 1)
}
</script>
