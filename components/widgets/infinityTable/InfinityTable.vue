<template>
  <div>
    <InfnityTableWrapper>
      <template #header>
        <v-text-field
          v-model="search"
          label="Поиск"
          outlined
          dense
          class="mt-3"
          @input="filterItems"
        />
      </template>
      <template #table>
        <v-data-table
          ref="dataTable"
          :headers="props.headers"
          :items="filteredItems"
          :items-per-page="0"
          :hide-default-footer="true"
          class="elevation-1"
          item-value="name"
          @scroll="handleScroll"
        >
          <template #top>
            <slot name="top" />
          </template>

          <template #item.append>
            <v-row v-if="loading">
              <v-col cols="12" class="text-center">
                <v-progress-circular indeterminate size="64" />
              </v-col>
            </v-row>
          </template>
          <template #bottom />
        </v-data-table>
      </template>
      <template #action>
        <v-row v-if="showLoadMoreButton">
          <v-col cols="12" class="text-center mt-3">
            <SimpleButton :loading="loading" :disabled="loading" @click="loadMore">
              Загрузить еще
            </SimpleButton>
          </v-col>
        </v-row>
      </template>
    </InfnityTableWrapper>
  </div>
</template>

<script setup>
import { debounce } from 'lodash'
import { ref, computed } from 'vue'
import InfnityTableWrapper from '~/components/widgets/infinityTable/ui/InfnityTableWrapper.vue'
import SimpleButton from '~/components/ui/buttons/simpleButton/SimpleButton.vue'
const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  headers: {
    type: Array,
    required: true
  },
  showItems: {
    type: Number,
    default: 5
  }
})

const visibleItems = ref(props.items.slice(0, props.showItems))
const loading = ref(false)
const search = ref('')

const showLoadMoreButton = computed(() => {
  return visibleItems.value.length < props.items.length
})

const filteredItems = computed(() => {
  const searchTerm = search.value.toLowerCase()
  const filtered = visibleItems.value.filter((item) => {
    return Object.values(item).some((val) => {
      if (typeof val === 'string' || val instanceof String) {
        return val.toLowerCase().includes(searchTerm)
      }
      return false
    })
  })
  return filtered
})

function handleScroll (event) {
  const target = event.target
  const bottomOfWindow = target.scrollHeight - target.scrollTop === target.clientHeight
  if (bottomOfWindow && !loading.value && showLoadMoreButton.value) {
    loadMore()
  }
}

function loadMore () {
  loading.value = true
  setTimeout(() => {
    const currentLength = visibleItems.value.length
    const nextItems = props.items.slice(currentLength, currentLength + props.showItems)
    visibleItems.value = [...visibleItems.value, ...nextItems]
    loading.value = false
  }, 500)
}

const filterItems = debounce(() => {
  const searchTerm = search.value.toLowerCase()
  visibleItems.value = props.items.filter((item) => {
    return Object.values(item).some((val) => {
      if (typeof val === 'string' || val instanceof String) {
        return val.toLowerCase().includes(searchTerm)
      }
      return false
    })
  }).slice(0, props.showItems)
}, 300)
</script>
