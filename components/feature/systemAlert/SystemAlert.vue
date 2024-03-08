<template>
  <SimpleSnackbar
    :model-value="alert.isShow"
    :color="alert.color"
    :message="alert.message"
    location="bottom left"
    min-width="100"
    @update:model-value="hide"
  />
</template>
<script setup>
import { useSystemAlert } from './model/useSystemAlert.js'
import { SimpleSnackbar } from '@/components/ui/simpleSnackbar'
import { useSystemAlertStore } from '@/store/alert/index.js'

const systemAlertStore = useSystemAlertStore()

const {
  alert,
  hide
} = useSystemAlert(systemAlertStore)
</script>
