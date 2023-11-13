import { FooterComponent } from "../footer/footer.component";
import { InputComponent } from "../input-header/input.component";
import { ResultComponent } from "../result-page/result.component";
import { DataService } from "../data.service";
import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { HeaderComponent } from "../header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ResultComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
