import { singOut } from './api.js'

export function useUser (makeError, router) {
  const signOutHandler = async () => {
    try {
      await singOut()
      router.push({ name: 'auth' })
    } catch (e) {
      makeError(e)
    }
  }
  return {
    signOutHandler
  }
}
