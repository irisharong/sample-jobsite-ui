import jwt from 'jsonwebtoken';
import mock from '../mock';

const jwtConfig = {
	secret: 'some-secret-code-goes-here',
	expiresIn: '2 days' // A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units (days, hours, etc)
};

const authDB = {
	users: [
		{
			uuid: 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
			from: 'custom-db',
			password: 'employer',
			role: 'employer',
			data: {
				displayName: 'Dylan Keitch',
				photoURL: 'assets/images/avatars/Dylan.jpg',
				email: 'employer@remoterecruit.com',
			}
		},
		{
			uuid: 'XgbuVEXBU6gtSKdbTYR1Zbbby1i3',
			from: 'custom-db',
			password: 'contractor',
			role: 'contractor',
			data: {
				displayName: 'Max Matlock',
				photoURL: 'assets/images/avatars/Arnold.jpg',
				email: 'contractor@remoterecruit.com',				
				},
		}
	]
};

mock.onPost('/api/auth/signin').reply(request => {
	const data = JSON.parse(request.data);
	const { email, password } = data;
	const user = _.cloneDeep(authDB.users.find(_user => _user.data.email === email));

	const error = [];

	if (!user) {
		error.push({
			type: 'email',
			message: 'Check your email address'
		});
	}

	if (user && user.password !== password) {
		error.push({
			type: 'password',
			message: 'Check your password'
		});
	}

	if (error.length === 0) {
		delete user.password;

		const access_token = jwt.sign({ id: user.uuid }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });

		const response = {
			user,
			access_token
		};

		return [200, response];
	}

	return [200, { error }];
});
