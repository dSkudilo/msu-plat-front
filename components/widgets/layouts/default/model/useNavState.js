export function useNavState () {
  const navbarExpand = ref(false)

  const openHandler = () => {
    navbarExpand.value = true
  }

  const closeHandler = () => {
    navbarExpand.value = false
  }
  return {
    navbarExpand,
    openHandler,
    closeHandler
  }
}
