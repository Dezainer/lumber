export default class User {
	sessionUser(user) {
		sessionStorage.setItem('user', JSON.stringify(user))
	}

	getUser() {
		return JSON.parse(sessionStorage.getItem('user'))
	}

	unsessionUser() {
		sessionStorage.removeItem('user')
	}
}