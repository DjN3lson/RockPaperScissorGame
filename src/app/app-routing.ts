import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputHeaderComponent } from './input-header/input-header.component';
import { ResultPageComponent } from './result-page/result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InputHeaderComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
