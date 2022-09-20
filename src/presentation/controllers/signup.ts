import { HttpResponse, HttpRequest } from '../protocols/http'

export class SignUpController {
    handle(httpRequest: HttpRequest): HttpResponse {
        if (!httpRequest.body.name) {
            return {
                body: new Error('Missing param: name'),
                statusCode: 400
            }
        }
        if (!httpRequest.body.email) {
            return {
                statusCode: 400,
                body: new Error('Missing param: email')
            }
        }

        return { statusCode: 200, body: "ok" }
    }
}