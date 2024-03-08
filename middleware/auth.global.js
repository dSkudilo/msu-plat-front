import { useFetch } from '#app'
import { useCurrentUserStore } from '../store/currentUser/index.js'

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.name === 'auth') { return }
  const store = useCurrentUserStore()
  if (!store.getUser.value?.id) {
    const nuxtApp = useNuxtApp()

    const user = await useFetch(`${nuxtApp.$config.public.baseURL}auth/session`, {
      credentials: 'include',
      headers: useRequestHeaders(['cookie'])
    })
    store.setUser(user.data.value)
  }
  if (!store.isAuthenticated) {
    return navigateTo('/auth')
  }
})
