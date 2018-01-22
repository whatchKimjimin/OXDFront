import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UserModule} from "./user/user.module";
import {IncludeModule} from "./include/include.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {routes} from "./app.route";
import { MainComponent } from './main/main.component';
import {BoatModule} from "./boat/boat.module";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( routes ),
    IncludeModule,
    UserModule,
    BoatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
