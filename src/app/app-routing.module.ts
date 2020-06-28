import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CardsComponent} from './cards/cards.component';
import {BoardGamesComponent} from './board-games/board-games.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'board', component: BoardGamesComponent},
  { path: '**', component: HomeComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

