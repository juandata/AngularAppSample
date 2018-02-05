import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';//I import the service which will handle data

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
//Add a private heroService parameter of type HeroService to the constructor.
  constructor(private heroService: HeroService) { }
  //The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  //When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService
//call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit at an appropriate time after constructing a HeroesComponent instance.
  ngOnInit() {
    this.getHeroes();
  }


//Create a function to retrieve the heroes from the service.
/*HeroService.getHeroes() must have an asynchronous signature of some kind.
It can take a callback. It could return a Promise. It could return an Observable.
HeroService.getHeroes() must have an asynchronous signature of some kind.
It can take a callback. It could return a Promise. It could return an Observable.
before:
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}
*/
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
