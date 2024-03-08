import { defu } from 'defu'
import { useFetch, useRequestHeaders, useRouter, useRuntimeConfig } from 'nuxt/app'

export async function useApiRequest (url, options) {
  const config = useRuntimeConfig()
  const defaults = {
    baseURL: config.public?.baseURL,
    key: url,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    },
    credentials: 'include',

    onRequest () {},
    onRequestError (_ctx) {
    },
    onResponse (_ctx) {},
    onResponseError ({ response }) {
      if (response.status === 403 || response.status === 401) {
        const router = useRouter()
        router.push({ name: 'auth' })
      }
    }
  }

  const params = defu(options, defaults)
  const response = await useFetch(url, params)
  if (response.status.value === 'error' && response.error.value) {
    throw new Error(response.error.value.data?.message || response.error.value.message)
  }
  return response
}
