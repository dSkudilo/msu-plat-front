export function useSystemAlert (store) {
  const alert = store.getAlert
  const hide = store.hide
  return {
    alert,
    hide
  }
}
