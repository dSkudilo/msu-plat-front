import { useSystemAlertStore } from '@/store/alert/index.js'

export function makeError (e) {
  const store = useSystemAlertStore()
  store.setErrorAlert(e.message)
}
