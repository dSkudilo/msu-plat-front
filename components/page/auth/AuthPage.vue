<template>
  <AuthWrapper>
    <template #card>
      <SimpleCard class="rounded-lg">
        <AuthTransition :show="isLogin">
          <AuthCardTitle text="Авторизация" />
          <AuthForm>
            <template #additionalAction>
              <SimpleButton variant="outlined" class="mr-2" @click="isLogin = false">
                Регистраиця
              </SimpleButton>
            </template>
          </AuthForm>
        </AuthTransition>
        <AuthTransition :show="!isLogin">
          <AuthCardTitle text="Регистраиця" />
          <RegistrationForm>
            <template #additionalAction>
              <SimpleButton variant="outlined" class="mr-2" @click="isLogin = true">
                Уже есть аккаунт
              </SimpleButton>
            </template>
          </RegistrationForm>
        </AuthTransition>
      </SimpleCard>
    </template>
  </AuthWrapper>
</template>
<script setup>
import AuthWrapper from './ui/AuthWrapper.vue'
import AuthCardTitle from './ui/AuthCardTitle.vue'
import { useStateAuth } from './model/useStateAuth.js'
import AuthTransition from './ui/AuthTransition.vue'
import { SimpleCard } from '@/components/ui/simpleCard'
import { AuthForm } from '@/components/feature/authForm'
import { SimpleButton } from '@/components/ui/buttons/simpleButton'
import { RegistrationForm } from '@/components/feature/registrationForm'

const {
  isLogin
} = useStateAuth()
</script>
