<template>
  <SectionWrapper>
    <v-container fluid>
      <h2 class="mb-3">
        <slot name="title" />
      </h2>
      <v-row justify="center">
        <v-col cols="12">
          <v-card height="200">
            <slot name="main" />
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="12" sm="6">
          <p class="text">
            <slot name="description" />
          </p>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card height="300">
            <slot name="side" />
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <v-card height="200">
            <slot name="bottom" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { SectionWrapper } from '~/components/ui/sectionWrapper'
</script>

<style scoped>
.text {
  flex-basis: 45%;
  margin: 0;
}
</style>
