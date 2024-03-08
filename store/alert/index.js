const defaultAlertValue = {
  isShow: false,
  message: '',
  color: ''
}

const ALERT_COLORS = {
  INFO: 'info',
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning'
}

export const useSystemAlertStore = defineStore('alert', () => {
  const alert = ref({ ...defaultAlertValue })

  const setInfoAlert = (message) => {
    alert.value = {
      color: ALERT_COLORS.INFO,
      isShow: true,
      message
    }
  }

  const setErrorAlert = (message) => {
    alert.value = {
      color: ALERT_COLORS.ERROR,
      isShow: true,
      message
    }
  }

  const setSuccessAlert = (message) => {
    alert.value = {
      color: ALERT_COLORS.SUCCESS,
      isShow: true,
      message
    }
  }

  const setWarningAlert = (message) => {
    alert.value = {
      color: ALERT_COLORS.WARNING,
      isShow: true,
      message
    }
  }

  const clear = () => {
    alert.value = { ...defaultAlertValue }
  }

  const hide = () => {
    alert.value.isShow = false
  }

  const getAlert = computed(() => {
    return alert
  })
  return {
    setInfoAlert,
    setErrorAlert,
    setSuccessAlert,
    setWarningAlert,
    clear,
    hide,
    getAlert
  }
})
