export async function getSession () {
  return await useApiRequest('auth/session')
}
export async function singOut () {
  return await useApiRequest('auth/sign-out', { method: 'POST' })
}
