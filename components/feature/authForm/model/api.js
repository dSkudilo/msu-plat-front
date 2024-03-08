export async function signIn (data) {
  return await useApiRequest('auth/sign-in', {
    method: 'POST',
    body: {
      ...data
    }
  })
}
