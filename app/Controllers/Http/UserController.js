'use strict';

const User = use('App/Models/User');

class UserController {
	async store({ request }) {
		const data = request.only(['username', 'email', 'password']);
		return User.create(data);
	}
}

module.exports = UserController;
