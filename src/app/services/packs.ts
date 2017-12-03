import Reqs from '../utils/reqs'

export default class PacksData extends Reqs {

	url = '/pacotes'

	getPacks() {
		return this.get(this.url+'/listar', null)
	}

	buyCoins(user) {
		return this.post('/comprar', user, null)
	}
}