<template>
  <TableComponent
    class="mt-1 ml-1"
  >
    <template #actions>
      <IconButton icon="mdi-plus" class="mr-2" />
      <IconButton icon="mdi-view-grid" class="mr-2" />
      <IconButton icon="mdi-format-list-bulleted-square" class="mr-2" />
    </template>
  </TableComponent>
</template>
<script setup>
import { TableComponent } from '@/components/widgets/table'
import { IconButton } from '@/components/ui/buttons/iconButton'

</script>
