import { useSystemAlertStore } from '@/store/alert/index.js'

export function makeSuccess (message) {
  const store = useSystemAlertStore()
  store.setSuccessAlert(message)
}
