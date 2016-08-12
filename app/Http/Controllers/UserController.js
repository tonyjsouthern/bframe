'use strict';

const User = use('App/Model/User'); // or import these above somewhere
const Hash = use('Hash');
class UserController {

  * store (request, response) {


    const input = request.only('email', 'password', 'username');
    input.password = yield Hash.make(input.password);

    const newUser = yield User.create(input);

    response.json(newUser.toJSON());
  }

  * login (request, response) {
    // Get the input from the user
    const input = request.only('email', 'password');

    try {
      // Find the user by email
      const user = yield User.findBy('email', input.email);
      // Verify their passwords matches & if not, let em know
      const verify = yield Hash.verify(input.password, user.password);
      if (!verify) { throw new Error('Password mismatch') };
      // Generate a token
      user.access_token = yield request.auth.generate(user);

      return response.json(user.toJSON());
    } catch (e) {
      return response.status(401).json({ error: e.message });
    }
  }

  * show (request, response) {
  return response.json(request.authUser);
}


} // closing for controller

module.exports = UserController;
