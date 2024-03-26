<template>
  <tr v-intersect.quiet="props.loadMore">
    <td :colspan="props.headers.length" class="text-center">
      <v-skeleton-loader type="table-row" />
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
    required: true
  },
  loadMore: {
    type: Function,
    required: true
  }
})
</script>
