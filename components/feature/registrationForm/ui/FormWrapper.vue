<template>
  <div class="pa-4">
    <div class="d-flex flex-column">
      <div class="d-flex  mb-1">
        <div class="w-50 pr-1">
          <slot name="surname" />
        </div>
        <div class="w-50 pl-1">
          <slot name="name" />
        </div>
      </div>

      <div class="d-flex my-1">
        <div class="w-50 pr-1">
          <slot name="patronymic" />
        </div>
        <div class="w-50 pl-1">
          <slot name="phone" />
        </div>
      </div>

      <div class="w-100 my-1">
        <slot name="email" />
      </div>

      <div class="w-100 my-1">
        <slot name="password" />
      </div>

      <div class="w-100 my-1">
        <slot name="repeatPassword" />
      </div>
    </div>

    <div class="d-flex justify-end mt-4">
      <slot name="actions" />
    </div>
  </div>
</template>
