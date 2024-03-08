export function useRules () {
  const required = value => !!value || 'Обязательно к заполнению'

  const minLength = value => value?.length > 3 || 'Минимум 3 символа'

  const isCorrectPhoneLength = value => value?.length === 16 || 'Некорректный номер'

  const email = (value) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Некорректный E-mail'
  }
  return {
    required,
    email,
    minLength,
    isCorrectPhoneLength
  }
}
