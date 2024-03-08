export const useCurrentUserStore = defineStore('user', () => {
  const user = ref({})

  const setUser = (u) => {
    user.value = { ...u }
  }

  const isAuthenticated = computed(() => {
    return !!user.value?.id
  })

  const getSession = async () => {
    try {
      const { data } = await useApiRequest('auth/session')
      setUser(data.value)
    } catch (e) {
      throw new Error(e)
    }
  }

  const getUser = computed(() => user)
  return {
    setUser,
    isAuthenticated,
    getSession,
    getUser
  }
})
