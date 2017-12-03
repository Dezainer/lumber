import { Component, OnInit } from '@angular/core';
import User from './services/user'

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

	user : User = new User()

	coins = null

	ngOnInit() {
		this.checkUserLogin()
	}

	checkUserLogin() {
		let user = this.user.getUser()

		this.coins = user
			? { gold: user.gold, silver: user.sliver }
			: null
	}

	logOff() {
		this.user.unsessionUser()
		this.checkUserLogin()
	}
}
