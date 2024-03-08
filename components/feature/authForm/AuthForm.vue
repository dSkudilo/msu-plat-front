<template>
  <v-form v-model="isValid" @submit.prevent="login">
    <FormWrapper>
      <template #login>
        <SimpleInput
          v-model="data.email"
          label="E-mail"
          :rules="[email]"
        />
      </template>
      <template #password>
        <SimpleInput
          v-model="data.password"
          label="Пароль"
          type="password"
          :rules="[required]"
        />
      </template>
      <template #actions>
        <slot name="additionalAction" />
        <SimpleButton
          type="submit"
          :loading="loading"
        >
          Войти
        </SimpleButton>
      </template>
    </FormWrapper>
  </v-form>
</template>
<script setup>
import FormWrapper from './ui/FormWrapper.vue'
import { useLogin } from './model/useLogin.js'
import { SimpleButton } from '@/components/ui/buttons/simpleButton'
import { SimpleInput } from '@/components/ui/form/simpleInput'
import { useRules } from '@/use/useRules.js'
import { makeError } from '@/helpers/makeError.js'

const {
  required,
  email
} = useRules()

const router = useRouter()
const {
  isValid,
  loading,
  data,
  login
} = useLogin(makeError, router)
</script>
