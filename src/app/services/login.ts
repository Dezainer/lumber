import Reqs from '../utils/reqs'

export default class LoginData extends Reqs {

	login(user) {
		return this.post('/login', user, null)
	}
}