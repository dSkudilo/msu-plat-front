export function useStateAuth () {
  const isLogin = ref(true)

  return {
    isLogin
  }
}
