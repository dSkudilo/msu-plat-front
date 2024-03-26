<template>
  <tr v-intersect.quiet="props.loadLess">
    <td :colspan="props.headers.length" class="text-center">
      <v-skeleton-loader type="table-row" /><v-skeleton-loader type="table-row" />
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
    required: true
  },
  loadLess: {
    type: Function,
    required: true
  }
})
</script>
