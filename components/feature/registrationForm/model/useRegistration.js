import { signUp } from './api.js'

export function useRegistration (makeError, makeSuccess, router) {
  const isValid = ref(false)
  const loading = ref(false)
  const data = ref({
    surname: '',
    name: '',
    patronymic: '',
    phone: '',
    email: '',
    password: ''
  })

  const confirmPassword = ref('')

  const confirmPasswordError = value => value === data.value.password || 'Пароли не совпадают'

  const registrationHandler = async () => {
    try {
      if (!isValid.value) { return }
      loading.value = true
      await signUp(data.value)
      router.push({ name: 'index' })
      makeSuccess('Вы успешно зарегистрировались!')
    } catch (e) {
      makeError(e)
    } finally {
      loading.value = false
    }
  }
  return {
    loading,
    isValid,
    data,
    confirmPassword,
    confirmPasswordError,
    registrationHandler
  }
}
