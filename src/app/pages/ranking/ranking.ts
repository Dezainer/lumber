import { Component, OnInit } from '@angular/core'
import RankingData from '../../services/ranking'

@Component({
	selector: 'ranking',
	templateUrl: './ranking.html',
	styleUrls: ['./ranking.css']
})

export default class Ranking implements OnInit{

	data : RankingData = new RankingData()
	ranking = []

	ngOnInit() {
		this.data.getRanking()
			.then(ranking => {
				this.ranking = ranking
			})
	}
}