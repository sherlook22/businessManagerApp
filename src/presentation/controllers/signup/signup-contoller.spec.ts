import { SignUpController } from './signup-controller'

describe('SignUpController', () => {
  test('Should return 400 is no email is provided', async () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'name',
        lastName: 'lastName',
        password: 'password',
        passwordConfirmation: 'passwordConfirmation'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('email'))
  })
})
