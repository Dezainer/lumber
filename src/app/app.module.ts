import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes, NavigationStart, RouterLinkActive } from '@angular/router'

import { AppComponent } from './app.component';

import Home from './pages/home/home'
import Seasons from './pages/seasons/seasons'
import Packs from './pages/packs/packs'
import Ranking from './pages/ranking/ranking'

const routes: Routes = [
	{ path: 'home', component: Home },
	{ path: 'seasons', component: Seasons },
	{ path: 'packs', component: Packs },
	{ path: 'ranking', component: Ranking },
	{ path: '', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  declarations: [
    AppComponent,
    Home,
    Seasons,
    Packs,
    Ranking
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
