import Reqs from '../utils/reqs'

export default class PacksData extends Reqs {

	url = '/pacotes'

	getPacks() {
		return this.get(this.url+'/listar', null)
	}
}