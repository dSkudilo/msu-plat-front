export const currency = (value: number, currency = 'RUB'): string => {
  if (typeof value !== 'number') {
    return value
  }

  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: 'currency',
    currency
  }

  return value.toLocaleString('ru-RU', options).replace(/\s/g, ' ')
}
