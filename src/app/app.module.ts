//este es el centro de la aplicación, aquí se declaran los componentes que componen la aplicación
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; //los componentes deben importarse aquí
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/*import hero service it could be done automatically by telling the clii:
ng generate service hero --module=app
*/
import {HeroService} from './hero.service';
//Open the AppModule class, import the HeroService, and add it to the @NgModule.providers array.
import {MessageService} from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService, MessageService],
  /*The providers array tells Angular to create a single, shared instance of HeroService and inject into any class
   that asks for it.*/
  bootstrap: [AppComponent]
})
export class AppModule { }
