import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedUiModule} from './shared-ui/shared-ui.module';
import {ConfigService} from './services/config.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { BoardGamesComponent } from './board-games/board-games.component';

export function initializeApp(config: ConfigService) {
  return () => config.getConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    BoardGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedUiModule
  ],
  providers: [ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService], multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
