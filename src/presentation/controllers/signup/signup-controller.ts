import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('email')
      }
    }
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('name')
      }
    }

    if (!httpRequest.body.lastName) {
      return {
        statusCode: 400,
        body: new Error('lastName')
      }
    }

    if (!httpRequest.body.password) {
      return {
        statusCode: 400,
        body: new Error('password')
      }
    }

    if (!httpRequest.body.passwordConfirmation) {
      return {
        statusCode: 400,
        body: new Error('passwordConfirmation')
      }
    }
  }
}
