<template>
  <SimpleSwitch
    v-model="isDarkMode"
    label="Темная"
    @click="toggleTheme"
  />
</template>
<script setup>
import { useTheme } from 'vuetify'
import { useToggle } from './model/useToggle.js'
import { SimpleSwitch } from '@/components/ui/SimpleSwitch'

const theme = useTheme()
const {
  isDarkMode,
  toggleTheme
} = useToggle(theme)
</script>
