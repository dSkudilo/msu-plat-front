<template>
  <v-container class="table">
    <v-data-table
      :headers="headers"
      :items="items"
    />
  </v-container>
</template>

<script setup>
const headers = ref([
  { text: 'ID', value: 'id' },
  { text: 'Name', value: 'name' },
  { text: 'Email', value: 'email' }
])

const items = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
])
</script>

<style>
.table {
}
</style>
