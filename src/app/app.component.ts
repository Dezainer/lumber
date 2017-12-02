import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	menuItems = [
		{ link: '/home', label: 'HOME' },
		{ link: '/seasons', label: 'TEMPORADAS' },
		{ link: '/packs', label: 'CRÉDITOS' },
		{ link: '/ranking', label: 'RANKING' }
	]
}
