<template>
  <v-form v-model="isValid" @submit.prevent="registrationHandler">
    <FormWrapper>
      <template #surname>
        <SimpleInput
          v-model="data.surname"
          label="Фамилия"
          :rules="[required]"
        />
      </template>
      <template #name>
        <SimpleInput
          v-model="data.name"
          label="Имя"
          :rules="[required]"
        />
      </template>
      <template #patronymic>
        <SimpleInput
          v-model="data.patronymic"
          label="Отчество"
          :rules="[required]"
        />
      </template>
      <template #phone>
        <SimpleInput
          v-model="data.phone"
          label="Телефон"
          type="tel"
          mask="+7-###-###-##-##"
          :rules="[required, isCorrectPhoneLength]"
        />
      </template>
      <template #email>
        <SimpleInput
          v-model="data.email"
          label="Email"
          :rules="[email]"
        />
      </template>
      <template #password>
        <SimpleInput
          v-model="data.password"
          label="Пароль"
          :rules="[minLength]"
        />
      </template>
      <template #repeatPassword>
        <SimpleInput
          v-model="confirmPassword"
          label="Повторите пароль"
          :rules="[minLength ,confirmPasswordError]"
        />
      </template>

      <template #actions>
        <slot name="additionalAction" />
        <SimpleButton
          type="submit"
          :loading="loading"
        >
          Регистрация
        </SimpleButton>
      </template>
    </FormWrapper>
  </v-form>
</template>
<script setup>
import FormWrapper from './ui/FormWrapper.vue'
import { useRegistration } from './model/useRegistration.js'
import { useRules } from '@/use/useRules.js'
import { SimpleInput } from '@/components/ui/form/simpleInput'
import { SimpleButton } from '@/components/ui/buttons/simpleButton'
import { makeError } from '@/helpers/makeError.js'
import { makeSuccess } from '@/helpers/makeSuccess.js'

const router = useRouter()

const {
  required,
  email,
  minLength,
  isCorrectPhoneLength
} = useRules()

const {
  loading,
  isValid,
  data,
  confirmPassword,
  confirmPasswordError,
  registrationHandler
} = useRegistration(makeError, makeSuccess, router)
</script>
