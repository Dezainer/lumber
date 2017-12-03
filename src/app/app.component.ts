import { Component, OnInit } from '@angular/core';

import UserData from './services/user'
import LoginData from './services/login'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	menuItems = [
		{ link: '/home', label: 'HOME' },
		{ link: '/seasons', label: 'TEMPORADAS' },
		{ link: '/packs', label: 'CRÉDITOS' },
		{ link: '/ranking', label: 'RANKING' }
	]

	user : UserData = new UserData()
	login : LoginData = new LoginData()

	coins = null
	modalOpened = false
	credentials = {}

	ngOnInit() {
		this.checkUserLogin()
	}

	bindInput(e : any) {
		let name = e.target.name,
			value = e.target.value

		this.credentials[name] = value
	}

	submit() {
		this.login.login(this.credentials)
			.then(result => {
				if(result) {
					this.user.sessionUser(result)
					this.checkUserLogin()
					this.toggleModal()
				}
			})
	}

	checkUserLogin() {
		let user = this.user.getUser()

		this.coins = user
			? { 
				gold: user.saldo_ouro, 
				silver: user.saldo_prata 
			}
			: null
	}

	logOff() {
		this.user.unsessionUser()
		this.checkUserLogin()
	}

	toggleModal() {
		this.modalOpened = !this.modalOpened
	}
}
