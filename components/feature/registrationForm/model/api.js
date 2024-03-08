export async function signUp (data) {
  return await useApiRequest('auth/sign-up', {
    method: 'POST',
    body: {
      ...data
    }
  })
}
