<template>
  <div class="d-flex flex-nowrap align-center profile">
<!--    TODO это отдельная фича -->
    <div
      class="rounded-circle profile-avatar d-flex justify-center align-center font-weight-bold"
      :style="{...color}"
    >
      D. B.
    </div>
<!--TODO -->
    <div class="ml-2">
      {{name}}
    </div>
  </div>
</template>
<script setup>
import { getColor } from './model/getColor.js'

defineProps({
  name: {
    type:String,
    default: ''
  }
})

const { color } = getColor()

</script>
<style lang="scss" scoped>
.profile {

  &-avatar {
    width: 40px;
    height: 40px;
  }
}

</style>
