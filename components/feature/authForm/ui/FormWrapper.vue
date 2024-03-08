<template>
  <div class="pa-4">
    <div class="d-flex flex-column">
      <div class="mb-1">
        <slot name="login" />
      </div>
      <div class="my-1">
        <slot name="password" />
      </div>
    </div>
    <div class="d-flex justify-end">
      <slot name="actions" />
    </div>
  </div>
</template>
