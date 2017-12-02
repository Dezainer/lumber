import { Component, OnInit } from '@angular/core'
import SeasonsData from '../../services/seasons'

@Component({
	selector: 'seasons',
	templateUrl: './seasons.html',
	styleUrls: ['./seasons.css']
})

export default class Seasons implements OnInit{

	data : SeasonsData = new SeasonsData()
	seasons = []

	ngOnInit() {
		this.data.getSeasons()
			.then(seasons => {
				this.seasons = seasons
			})
	}
}