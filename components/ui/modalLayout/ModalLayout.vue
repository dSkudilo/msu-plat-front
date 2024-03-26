<template>
  <v-dialog
    v-model="props.visible"
    width="600"
    @click:outside="close"
  >
    <v-card max-width="600">
      <v-card-title class="d-flex justify-space-between w-100 align-center">
        <slot name="title" />
        <v-icon icon="mdi-close" @click="close" />
      </v-card-title>

      <slot name="content" />

      <v-card-actions class="d-flex justify-end">
        <slot name="actions" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits()

const close = () => {
  emits('update:visible', false)
}
</script>
