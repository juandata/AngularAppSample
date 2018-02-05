import { Injectable } from '@angular/core';
/*Observable is one of the key classes in the RxJS library.
In a later tutorial on HTTP, you'll learn that Angular's HttpClient methods return RxJS Observables.
In this tutorial, you'll simulate getting data from the server with the RxJS of() function.
Open the HeroService file and import the Observable and of symbols from RxJS.*/
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { Hero } from './hero';//here I import the data that will be accesible for all component classes
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
/*The @Injectable() decorator tells Angular that this service might itself have injected dependencies.
It doesn't have dependencies now but it will soon. Whether it does or it doesn't, it's good practice to keep the decorator.
The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.
Removing data access from components means you can change your mind about the implementation anytime, without touching any components.
They don't know how the service works.*/
export class HeroService {
/*Modify the constructor with a parameter that declares a private messageService property.
Angular will inject the singleton MessageService into that property when it creates the HeroService.
This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent
*/
  constructor(private messageService: MessageService) { }
//Add a getHeroes method to return the mock heroes
/*getHeroes(): Hero[] {
  return HEROES;
}
There are several ways to provide the HeroService: in the HeroesComponent, in the AppComponent, in the AppModule.
Each option has pros and cons.
This tutorial chooses to provide it in the AppModule.
That's such a popular choice that you could have told the CLI to provide it there automatically by appending --module=app
of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
In the HTTP tutorial, you'll call HttpClient.get<Hero[]>() which also returns an Observable<Hero[]>
that emits a single value, an array of heroes from the body of the HTTP response.
*/

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
  // Todo: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  //Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.
  return of(HEROES.find(hero => hero.id === id));
  /*Like getHeroes(), getHero() has an asynchronous signature. It returns a mock hero as an Observable, using the RxJS of() function.*/
}
}
