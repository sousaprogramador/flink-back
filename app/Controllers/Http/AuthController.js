'use strict';

const User = use('App/Models/User');

class AuthController {
  async register({ request, response, auth }) {
    try {
      const { username, email, password } = request.all();

      await User.create({ username, email, password });

      const { token } = await auth.withRefreshToken().attempt(email, password);

      response.json(token);
    } catch (error) {
      response.send({ message: 'Error ao salvar usuario', error });
    }
  }

  async login({ request, response, auth }) {
    const { email, password } = request.all();

    const { token } = await auth.withRefreshToken().attempt(email, password);

    return response.send({ token });
  }
}

module.exports = AuthController;
