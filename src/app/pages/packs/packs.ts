import { Component, OnInit } from '@angular/core'

import User from '../../services/user'
import PacksData from '../../services/packs'

@Component({
	selector: 'packs',
	templateUrl: './packs.html',
	styleUrls: ['./packs.css']
})

export default class Packs implements OnInit {

	user : User = new User()

	data : PacksData = new PacksData()
	lists = []
	
	currentPack = {
		tipo: '',
		moedas: ''
	}
	modalOpened = false

	ngOnInit() {
		this.data.getPacks()
			.then(lists => {
				this.lists = this.separateLists(lists)
			})
	}

	separateLists(lists) {
		let golden,
			silver

		golden = lists.filter(item =>item.tipo == 'g')
		silver = lists.filter(item => item.tipo == 's')

		return [golden, silver]
	}

	buy(pack) {
		if(!this.user.getUser()) {
			alert('Faça login para continuar')
			return
		}

		this.currentPack = pack
		this.toggleModal()
	}

	confirm() {
		let user = this.user.getUser(),
			pack = this.currentPack

		if(pack.tipo == 'g') {
			user.saldo_ouro += pack.moedas
		} else {
			user.saldo_prata += pack.moedas
		}

		this.data.buyCoins(user)
			.then(() => {
				this.user.sessionUser(user)
				this.toggleModal()
			})
	}

	toggleModal() {
		this.modalOpened = !this.modalOpened
	}
}