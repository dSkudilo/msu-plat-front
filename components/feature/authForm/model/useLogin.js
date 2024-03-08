import { signIn } from './api.js'

export function useLogin (makeError, router) {
  const isValid = ref(false)
  const loading = ref(false)

  const data = ref({
    email: '',
    password: ''
  })

  const login = async () => {
    try {
      loading.value = true
      if (!isValid.value) { return }
      await signIn({ ...data.value })
      router.push({ name: 'index' })
    } catch (e) {
      makeError(e)
    } finally {
      loading.value = false
    }
  }
  return {
    isValid,
    loading,
    data,
    login
  }
}
