'use strict';

class AuthController {
  async login({ request, response, auth }) {
    const { email, password } = request.all();

    const { token } = await auth.withRefreshToken().attempt(email, password);

    return response.send({ token });
  }
}

module.exports = AuthController;
