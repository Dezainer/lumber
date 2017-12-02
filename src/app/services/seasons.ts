import Reqs from '../utils/reqs'

export default class SeasonsData extends Reqs {

	url = '/temporadas'

	getSeasons() {
		return this.get(this.url+'/listar', null)
	}
}