import Reqs from '../utils/reqs'

export default class RankingData extends Reqs {

	url = '/ranking'

	getRanking() {
		return this.get(this.url+'/listar', null)
	}
}