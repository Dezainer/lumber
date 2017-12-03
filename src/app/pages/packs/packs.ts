import { Component, OnInit } from '@angular/core'
import PacksData from '../../services/packs'

@Component({
	selector: 'packs',
	templateUrl: './packs.html',
	styleUrls: ['./packs.css']
})

export default class Packs implements OnInit {

	data : PacksData = new PacksData()
	lists = []

	ngOnInit() {
		this.data.getPacks()
			.then(lists => {
				this.lists = this.separateLists(lists)
			})
	}

	separateLists(lists) {
		let golden,
			silver

		golden = lists.filter(item =>
			item.tipo == 'g'
		)

		silver = lists.filter(item =>
			item.tipo == 's'
		)

		return [golden, silver]
	}
}