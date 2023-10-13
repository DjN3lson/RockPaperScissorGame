import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GameInputComponent } from './game-input/game-input.component';
import { GameResultComponent } from './game-result/game-result.component';
import { InputHeaderComponent } from './input-header/input-header.component';
import { ResultPageComponent } from './result-page/result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GameInputComponent,
    GameResultComponent,
    InputHeaderComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
